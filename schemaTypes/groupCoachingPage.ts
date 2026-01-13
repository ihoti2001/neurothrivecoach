import {defineField, defineType} from 'sanity'

export const groupCoachingPage = defineType({
  name: 'groupCoachingPage',
  title: 'Group Coaching Page',
  type: 'document',
  fields: [
    defineField({name: 'heading', title: 'Heading', type: 'string'}),
    defineField({name: 'intro', title: 'Intro', type: 'text'}),
    defineField({name: 'heroImage', title: 'Hero Image', type: 'image'}),
    defineField({name: 'groupHeading', title: 'Group Section Heading', type: 'string'}),
    defineField({name: 'groupBody', title: 'Group Section Body', type: 'text'}),
    defineField({name: 'groupMinSize', title: 'Group Minimum Size', type: 'number'}),
    defineField({name: 'groupMaxSize', title: 'Group Maximum Size', type: 'number'}),
    defineField({
      name: 'groupHighlights',
      title: 'Group Highlights',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({name: 'deliveryHeading', title: 'Delivery Heading', type: 'string'}),
    defineField({
      name: 'deliveryOptions',
      title: 'Delivery Options',
      type: 'array',
      of: [{type: 'deliveryOption'}],
    }),
    defineField({name: 'corporateHeading', title: 'Corporate Heading', type: 'string'}),
    defineField({name: 'corporateBody', title: 'Corporate Body', type: 'text'}),
    defineField({
      name: 'corporateHighlights',
      title: 'Corporate Highlights',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({name: 'ctaLabel', title: 'Cta Label', type: 'string'}),
    defineField({name: 'ctaHref', title: 'Cta Href', type: 'string'}),
    defineField({name: 'faqHeading', title: 'Faq Heading', type: 'string'}),
    defineField({
      name: 'faqs',
      title: 'Faqs',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'faq'}]}],
    }),
  ],
})
