import Butter from 'buttercms';

const apiKey = import.meta.env.VITE_BUTTER_CMS_API_KEY;

if (!apiKey) {
    console.error("VITE_BUTTER_CMS_API_KEY is not defined in the environment variables.");
}

const butter = Butter(apiKey);

export async function fetchPageWithFallback(pageTypes: string[], slug: string) {
    if (!apiKey) return null;

    for (const pageType of pageTypes) {
        try {
            const resp = await butter.page.retrieve(pageType, slug);
            if (resp?.data?.data) {
                return resp.data.data;
            }
        } catch (error) {
            // Try next page type
        }
    }

    return null;
}

export async function fetchCollections(keys: string[], params: Record<string, any> = {}) {
    if (!apiKey) return null;

    try {
        const resp = await butter.content.retrieve(keys, params);
        return resp?.data?.data || null;
    } catch (error) {
        console.error("ButterCMS collection fetch failed:", error);
        return null;
    }
}

export default butter;
