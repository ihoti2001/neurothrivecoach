const SITE_NAME = 'Neuro Thrive Coach'
const BASE_URL = 'https://neurothrivecoach.co.uk'

export function buildTitle(pageTitle?: string): string {
  if (!pageTitle) return SITE_NAME
  return `${pageTitle} | ${SITE_NAME}`
}

export function buildCanonical(path: string): string {
  if (!path || path === '/') return `${BASE_URL}/`
  const trimmed = path.startsWith('/') ? path : `/${path}`
  return `${BASE_URL}${trimmed}`
}

export function buildOgImage(imageUrl?: string): string {
  return imageUrl || `${BASE_URL}/logo.png`
}
