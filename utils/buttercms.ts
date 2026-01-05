import Butter from 'buttercms';

const apiKey = import.meta.env.VITE_BUTTER_CMS_API_KEY;
const apiBase = 'https://api.buttercms.com/v2';

if (!apiKey) {
    console.error("VITE_BUTTER_CMS_API_KEY is not defined in the environment variables.");
}

const butter = Butter(apiKey);

async function fetchJson(url: string) {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`ButterCMS request failed: ${res.status}`);
    }
    return res.json();
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
