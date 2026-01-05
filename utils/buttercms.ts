import Butter from 'buttercms';

const apiKey = import.meta.env.VITE_BUTTER_CMS_API_KEY;
const apiBase = 'https://api.buttercms.com/v2';
const debugEnabled =
    typeof window !== 'undefined' &&
    window.location &&
    window.location.search.includes('cmsdebug=1');

if (!apiKey) {
    console.error("VITE_BUTTER_CMS_API_KEY is not defined in the environment variables.");
}

const butter = Butter(apiKey);

async function fetchJson(url: string) {
    const res = await fetch(url, {
        cache: 'no-store',
        headers: {
            Accept: 'application/json'
        }
    });
    if (!res.ok) {
        let body = '';
        try {
            body = await res.text();
        } catch (error) {
            // ignore
        }
        if (debugEnabled) {
            console.error('ButterCMS error', { url, status: res.status, body });
        }
        throw new Error(`ButterCMS request failed: ${res.status}`);
    }
    const data = await res.json();
    if (debugEnabled) {
        console.log('ButterCMS response', { url, data });
    }
    return data;
}

export async function fetchPageWithFallback(pageTypes: string[], slug: string) {
    if (!apiKey) return null;

    for (const pageType of pageTypes) {
        try {
            const url = `${apiBase}/pages/${pageType}/${slug}/?auth_token=${apiKey}`;
            const data = await fetchJson(url);
            if (data?.data) {
                return data.data;
            }
        } catch (error) {
            // Try next page type
        }
    }

    try {
        const resp = await butter.page.retrieve(pageTypes[0], slug);
        if (resp?.data?.data) {
            return resp.data.data;
        }
    } catch (error) {
        console.error("ButterCMS page fetch failed:", error);
    }

    return null;
}

async function listPageTypes() {
    if (!apiKey) return [];
    try {
        const url = `${apiBase}/page_types/?auth_token=${apiKey}`;
        const data = await fetchJson(url);
        return data?.data || [];
    } catch (error) {
        if (debugEnabled) {
            console.error('ButterCMS page types fetch failed', error);
        }
        return [];
    }
}

async function listPagesForType(pageType: string) {
    if (!apiKey) return [];
    try {
        const url = `${apiBase}/pages/${pageType}/?auth_token=${apiKey}`;
        const data = await fetchJson(url);
        return data?.data || [];
    } catch (error) {
        if (debugEnabled) {
            console.error('ButterCMS pages list failed', { pageType, error });
        }
        return [];
    }
}

export async function fetchPageByNameOrSlug(match: { names?: string[]; slugs?: string[] }) {
    if (!apiKey) return null;

    const names = (match.names || []).map(name => name.toLowerCase());
    const slugs = (match.slugs || []).map(slug => slug.toLowerCase());
    const pageTypes = await listPageTypes();

    for (const pageType of pageTypes) {
        const apiIdentifier = pageType.api_identifier || pageType.slug || pageType.name;
        if (!apiIdentifier) continue;

        const pages = await listPagesForType(apiIdentifier);
        const found = pages.find((page: any) => {
            const pageName = (page.name || '').toLowerCase();
            const pageSlug = (page.slug || '').toLowerCase();
            return (names.length && names.includes(pageName)) || (slugs.length && slugs.includes(pageSlug));
        });

        if (found?.slug) {
            const result = await fetchPageWithFallback([apiIdentifier], found.slug);
            if (result) {
                return result;
            }
        }
    }

    return null;
}

export async function fetchCollections(keys: string[], params: Record<string, any> = {}) {
    if (!apiKey) return null;

    try {
        const searchParams = new URLSearchParams({
            auth_token: apiKey,
            keys: keys.join(',')
        });

        Object.entries(params).forEach(([key, value]) => {
            if (value !== undefined && value !== null) {
                searchParams.set(key, String(value));
            }
        });

        const url = `${apiBase}/content/?${searchParams.toString()}`;
        const data = await fetchJson(url);
        return data?.data || null;
    } catch (error) {
        console.error("ButterCMS collection fetch failed:", error);
        try {
            const resp = await butter.content.retrieve(keys, params);
            return resp?.data?.data || null;
        } catch (fallbackError) {
            console.error("ButterCMS collection fetch fallback failed:", fallbackError);
            return null;
        }
    }
}

export default butter;
