import {defineField, defineType} from 'sanity'

export const helpCard = defineType({
  name: 'helpCard',
  title: 'Help Card',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'body', title: 'Body', type: 'text'}),
  ],
})

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({name: 'heroHeading', title: 'Hero Heading', type: 'string'}),
    defineField({name: 'heroBody', title: 'Hero Body', type: 'text'}),
    defineField({name: 'heroCtaLabel', title: 'Hero Cta Label', type: 'string'}),
    defineField({name: 'heroCtaPath', title: 'Hero Cta Path', type: 'string'}),
    defineField({name: 'heroImage', title: 'Hero Image', type: 'image'}),
    defineField({name: 'helpHeading', title: 'Help Heading', type: 'string'}),
    defineField({name: 'helpIntro', title: 'Help Intro', type: 'text'}),
    defineField({
      name: 'helpCards',
      title: 'Help Cards',
      type: 'array',
      of: [{type: 'helpCard'}],
    }),
    defineField({name: 'clientStoriesHeading', title: 'Client Stories Heading', type: 'string'}),
    defineField({
      name: 'featuredTestimonials',
      title: 'Featured Testimonials',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'testimonial'}]}],
    }),
  ],
})
