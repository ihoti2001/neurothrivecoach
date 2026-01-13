import {defineField, defineType} from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({name: 'name', title: 'Name', type: 'string'}),
    defineField({name: 'context', title: 'Context', type: 'string'}),
    defineField({name: 'quote', title: 'Quote', type: 'text'}),
    defineField({name: 'rating', title: 'Rating', type: 'number'}),
    defineField({name: 'avatar', title: 'Avatar', type: 'image'}),
    defineField({name: 'showOnHome', title: 'Show On Home', type: 'boolean'}),
  ],
})
