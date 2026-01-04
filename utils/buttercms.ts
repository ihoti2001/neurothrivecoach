import Butter from 'buttercms';

const apiKey = import.meta.env.VITE_BUTTER_CMS_API_KEY;

if (!apiKey) {
    console.error("VITE_BUTTER_CMS_API_KEY is not defined in the environment variables.");
}

const butter = Butter(apiKey);

export default butter;
