import {sanityClient} from './sanityClient'

/**
 * These are simple helper functions for fetching content from Sanity.
 * Components should import and call these rather than writing queries themselves.
 */

export type SiteSettings = {
  siteName?: string
  logo?: any
  bookingBaseUrl?: string
  mainBookingPath?: string
  navItems?: {label: string; href: string}[]
  footerLinks?: {label: string; href: string}[]
  footerCopyright?: string
}

export type HomePage = {
  heroHeading: string
  heroBody: string
  heroCtaLabel: string
  heroCtaPath: string
  heroImage?: any
  helpHeading?: string
  helpIntro?: string
  helpCards?: {title: string; body: string}[]
  clientStoriesHeading?: string
  featuredTestimonials?: Testimonial[]
}

export type AboutPage = {
  heroHeading: string
  heroBody: string
  heroPrimaryCtaLabel?: string
  heroPrimaryCtaPath?: string
  heroSecondaryCtaLabel?: string
  heroSecondaryCtaHref?: string
  heroImage?: any
  philosophyHeading?: string
  philosophyIntro?: string
  philosophyPillars?: {title: string; body: string}[]
  journeyHeading?: string
  journeyBody?: any
  journeyImage?: any
  credentialsHeading?: string
  credentials?: {title: string; year?: string; body?: string}[]
}

export type PackageCard = {
  title: string
  price: string
  oldPrice?: string
  duration?: string
  badge?: string
  bullets?: string[]
  ctaLabel: string
  bookingPath: string
}

export type ExpectStep = {
  title: string
  body: string
}

export type DeliveryOption = {
  title: string
  body: string
}

export type BenefitGroup = {
  title: string
  bullets?: string[]
}

export type FAQ = {
  _id: string
  question: string
  answer: any
}

export type ServicesPage = {
  heading: string
  intro?: string
  packages?: PackageCard[]
  undecidedText?: string
  expectHeading?: string
  expectSteps?: ExpectStep[]
  deliveryHeading?: string
  deliveryOptions?: DeliveryOption[]
  benefitHeading?: string
  benefitGroups?: BenefitGroup[]
  faqHeading?: string
  faqs?: FAQ[]
}

export type ContactPage = {
  heroHeading: string
  heroBody: string
  formFullNameLabel?: string
  formEmailLabel?: string
  formMessageLabel?: string
  formSubmitLabel?: string
  directEmailHeading?: string
  directEmailBody?: string
  directEmailAddress?: string
  faqBoxHeading?: string
  faqBoxBody?: string
  faqBoxLinkLabel?: string
  faqBoxLinkHref?: string
  privacyBoxHeading?: string
  privacyBoxBody?: string
}

export type Testimonial = {
  _id: string
  name: string
  context?: string
  quote: string
  rating?: number
  avatar?: any
  showOnHome?: boolean
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  const query = `*[_type == "siteSettings"][0]{
    siteName,
    logo{asset->{url}},
    bookingBaseUrl,
    mainBookingPath,
    navItems,
    footerLinks,
    footerCopyright
  }`
  return sanityClient.fetch<SiteSettings | null>(query)
}

export async function getHomePage(): Promise<HomePage | null> {
  const query = `*[_type == "homePage"][0]{
    heroHeading,
    heroBody,
    heroCtaLabel,
    heroCtaPath,
    heroImage{asset->{url}},
    helpHeading,
    helpIntro,
    helpCards,
    clientStoriesHeading,
    featuredTestimonials[]->{
      _id,
      name,
      context,
      quote,
      rating,
      avatar{asset->{url}},
      showOnHome
    }
  }`
  return sanityClient.fetch<HomePage | null>(query)
}

export async function getAboutPage(): Promise<AboutPage | null> {
  const query = `*[_type == "aboutPage"][0]{
    heroHeading,
    heroBody,
    heroPrimaryCtaLabel,
    heroPrimaryCtaPath,
    heroSecondaryCtaLabel,
    heroSecondaryCtaHref,
    heroImage{asset->{url}},
    philosophyHeading,
    philosophyIntro,
    philosophyPillars,
    journeyHeading,
    journeyBody,
    journeyImage{asset->{url}},
    credentialsHeading,
    credentials
  }`
  return sanityClient.fetch<AboutPage | null>(query)
}

export async function getServicesPage(): Promise<ServicesPage | null> {
  const query = `*[_type == "servicesPage"][0]{
    heading,
    intro,
    packages,
    undecidedText,
    expectHeading,
    expectSteps,
    deliveryHeading,
    deliveryOptions,
    benefitHeading,
    benefitGroups,
    faqHeading,
    faqs[]->{
      _id,
      question,
      answer
    }
  }`
  return sanityClient.fetch<ServicesPage | null>(query)
}

export async function getContactPage(): Promise<ContactPage | null> {
  const query = `*[_type == "contactPage"][0]{
    heroHeading,
    heroBody,
    formFullNameLabel,
    formEmailLabel,
    formMessageLabel,
    formSubmitLabel,
    directEmailHeading,
    directEmailBody,
    directEmailAddress,
    faqBoxHeading,
    faqBoxBody,
    faqBoxLinkLabel,
    faqBoxLinkHref,
    privacyBoxHeading,
    privacyBoxBody
  }`
  return sanityClient.fetch<ContactPage | null>(query)
}

export async function getAllFaqs(): Promise<FAQ[]> {
  const query = `*[_type == "faq"]|order(_createdAt asc){
    _id,
    question,
    answer
  }`
  return sanityClient.fetch<FAQ[]>(query)
}

export async function getAllTestimonials(): Promise<Testimonial[]> {
  const query = `*[_type == "testimonial"]|order(_createdAt asc){
    _id,
    name,
    context,
    quote,
    rating,
    avatar{asset->{url}},
    showOnHome
  }`
  return sanityClient.fetch<Testimonial[]>(query)
}

export function buildBookingUrl(
  settings: SiteSettings | null | undefined,
  bookingPath: string | null | undefined,
): string | null {
  if (!settings?.bookingBaseUrl || !bookingPath) return null
  const base = settings.bookingBaseUrl.replace(/\/+$/, '')
  const path = bookingPath.startsWith('/') ? bookingPath : `/${bookingPath}`
  return `${base}${path}`
}
