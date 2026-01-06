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

export function toJsonLd(data: unknown): string {
  return JSON.stringify(data)
}

export function buildOrganizationJsonLd(options: {
  name?: string
  url?: string
  logoUrl?: string
  sameAs?: string[]
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: options.name || SITE_NAME,
    url: options.url || BASE_URL,
    logo: options.logoUrl || `${BASE_URL}/logo.png`,
    sameAs: options.sameAs?.filter(Boolean),
  }
}

export function buildWebsiteJsonLd(options: {
  name?: string
  url?: string
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: options.name || SITE_NAME,
    url: options.url || BASE_URL,
  }
}

export function buildWebPageJsonLd(options: {
  name: string
  description?: string
  url: string
  pageType?: 'WebPage' | 'AboutPage' | 'ContactPage'
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': options.pageType || 'WebPage',
    name: options.name,
    description: options.description,
    url: options.url,
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: BASE_URL,
    },
  }
}

export function buildFaqJsonLd(
  faqs: Array<{question: string; answer: string}>,
): Record<string, unknown> | null {
  const items = faqs
    .filter((faq) => faq.question && faq.answer)
    .map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    }))

  if (!items.length) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items,
  }
}
