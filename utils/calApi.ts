const CAL_API_KEY = import.meta.env.VITE_CAL_API_KEY;

export async function getCalProfile() {
  try {
    if (!CAL_API_KEY) return null;

    const isV1 = !CAL_API_KEY.startsWith('cal_');
    const url = isV1
      ? `/api/cal/v1/me?apiKey=${CAL_API_KEY}`
      : `/api/cal/v2/me`;

    const headers: Record<string, string> = {};
    if (!isV1) {
      headers['Authorization'] = `Bearer ${CAL_API_KEY}`;
    }

    const res = await fetch(url, { headers });
    if (!res.ok) throw new Error('Failed to fetch user');
    const data = await res.json();
    return data.user || data.data; // V2 might use 'data'
  } catch (error) {
    console.error("Cal.com Profile Fetch Error:", error);
    return null;
  }
}

export async function getCalEventTypes() {
  try {
    if (!CAL_API_KEY) return [];

    const isV1 = !CAL_API_KEY.startsWith('cal_');
    const url = isV1
      ? `/api/cal/v1/event-types?apiKey=${CAL_API_KEY}`
      : `/api/cal/v2/event-types`;

    const headers: Record<string, string> = {};
    if (!isV1) {
      headers['Authorization'] = `Bearer ${CAL_API_KEY}`;
      headers['cal-api-version'] = '2024-06-11'; // Recommended v2 version header
    }

    const res = await fetch(url, { headers });
    if (!res.ok) throw new Error('Failed to fetch event types');
    const data = await res.json();

    // V1 returns data.event_types, V2 returns data.data (array)
    return data.event_types || data.data || [];
  } catch (error) {
    console.error("Cal.com Event Types Fetch Error:", error);
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