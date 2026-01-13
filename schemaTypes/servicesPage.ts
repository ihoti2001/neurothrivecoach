import {defineField, defineType} from 'sanity'

export const packageCard = defineType({
  name: 'packageCard',
  title: 'Package Card',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'price', title: 'Price', type: 'string'}),
    defineField({name: 'oldPrice', title: 'Old Price', type: 'string'}),
    defineField({name: 'duration', title: 'Duration', type: 'string'}),
    defineField({name: 'badge', title: 'Badge', type: 'string'}),
    defineField({
      name: 'bullets',
      title: 'Bullets',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({name: 'ctaLabel', title: 'Cta Label', type: 'string'}),
    defineField({name: 'bookingPath', title: 'Booking Path', type: 'string'}),
  ],
})

export const expectStep = defineType({
  name: 'expectStep',
  title: 'Expect Step',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'body', title: 'Body', type: 'text'}),
  ],
})

export const deliveryOption = defineType({
  name: 'deliveryOption',
  title: 'Delivery Option',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'body', title: 'Body', type: 'text'}),
  ],
})

export const benefitGroup = defineType({
  name: 'benefitGroup',
  title: 'Benefit Group',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({
      name: 'bullets',
      title: 'Bullets',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})

export const servicesPage = defineType({
  name: 'servicesPage',
  title: 'Services Page',
  type: 'document',
  fields: [
    defineField({name: 'heading', title: 'Heading', type: 'string'}),
    defineField({name: 'intro', title: 'Intro', type: 'text'}),
    defineField({
      name: 'packages',
      title: 'Packages',
      type: 'array',
      of: [{type: 'packageCard'}],
    }),
    defineField({name: 'undecidedText', title: 'Undecided Text', type: 'text'}),
    defineField({name: 'expectHeading', title: 'Expect Heading', type: 'string'}),
    defineField({
      name: 'expectSteps',
      title: 'Expect Steps',
      type: 'array',
      of: [{type: 'expectStep'}],
    }),
    defineField({name: 'deliveryHeading', title: 'Delivery Heading', type: 'string'}),
    defineField({
      name: 'deliveryOptions',
      title: 'Delivery Options',
      type: 'array',
      of: [{type: 'deliveryOption'}],
    }),
    defineField({name: 'benefitHeading', title: 'Benefit Heading', type: 'string'}),
    defineField({
      name: 'benefitGroups',
      title: 'Benefit Groups',
      type: 'array',
      of: [{type: 'benefitGroup'}],
    }),
    defineField({name: 'faqHeading', title: 'Faq Heading', type: 'string'}),
    defineField({
      name: 'faqs',
      title: 'Faqs',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'faq'}]}],
    }),
  ],
})
