import {defineField, defineType} from 'sanity'

export const philosophyPillar = defineType({
  name: 'philosophyPillar',
  title: 'Philosophy Pillar',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'body', title: 'Body', type: 'text'}),
  ],
})

export const credentialItem = defineType({
  name: 'credentialItem',
  title: 'Credential Item',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'year', title: 'Year', type: 'string'}),
    defineField({name: 'body', title: 'Body', type: 'text'}),
  ],
})

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({name: 'heroHeading', title: 'Hero Heading', type: 'string'}),
    defineField({name: 'heroBody', title: 'Hero Body', type: 'text'}),
    defineField({name: 'heroPrimaryCtaLabel', title: 'Hero Primary Cta Label', type: 'string'}),
    defineField({name: 'heroPrimaryCtaPath', title: 'Hero Primary Cta Path', type: 'string'}),
    defineField({name: 'heroSecondaryCtaLabel', title: 'Hero Secondary Cta Label', type: 'string'}),
    defineField({name: 'heroSecondaryCtaHref', title: 'Hero Secondary Cta Href', type: 'string'}),
    defineField({name: 'heroImage', title: 'Hero Image', type: 'image'}),
    defineField({name: 'philosophyHeading', title: 'Philosophy Heading', type: 'string'}),
    defineField({name: 'philosophyIntro', title: 'Philosophy Intro', type: 'text'}),
    defineField({
      name: 'philosophyPillars',
      title: 'Philosophy Pillars',
      type: 'array',
      of: [{type: 'philosophyPillar'}],
    }),
    defineField({name: 'journeyHeading', title: 'Journey Heading', type: 'string'}),
    defineField({
      name: 'journeyBody',
      title: 'Journey Body',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({name: 'journeyImage', title: 'Journey Image', type: 'image'}),
    defineField({name: 'credentialsHeading', title: 'Credentials Heading', type: 'string'}),
    defineField({
      name: 'credentials',
      title: 'Credentials',
      type: 'array',
      of: [{type: 'credentialItem'}],
    }),
  ],
})
