export const CAL_API_KEY = 'cal_live_034d005b08a15418ac0eb13a0b4effb7';

export async function getCalProfile() {
  try {
    const res = await fetch(`https://api.cal.com/v1/me?apiKey=${CAL_API_KEY}`);
    if (!res.ok) throw new Error('Failed to fetch user');
    const data = await res.json();
    return data.user;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getCalEventTypes() {
  try {
    const res = await fetch(`https://api.cal.com/v1/event-types?apiKey=${CAL_API_KEY}`);
    if (!res.ok) throw new Error('Failed to fetch event types');
    const data = await res.json();
    return data.event_types;
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Helper to find best matching slug or default to username
export async function getBookingLink(preferredSlugKeywords: string[] = []) {
    const user = await getCalProfile();
    // Fallback if API fails
    if (!user) return 'https://cal.com';
    const baseUrl = `https://cal.com/${user.username}`;

    if (preferredSlugKeywords.length === 0) {
        return baseUrl;
    }

    const eventTypes = await getCalEventTypes();
    // Try to find an event type that matches any of the keywords
    const match = eventTypes.find((et: any) => 
        preferredSlugKeywords.some(keyword => 
            et.title.toLowerCase().includes(keyword.toLowerCase()) || 
            et.slug.toLowerCase().includes(keyword.toLowerCase())
        )
    );

    if (match) {
        return `${baseUrl}/${match.slug}`;
    }

    return baseUrl;
}