import {defineField, defineType} from 'sanity'

export const navItem = defineType({
  name: 'navItem',
  title: 'Nav Item',
  type: 'object',
  fields: [
    defineField({name: 'label', title: 'Label', type: 'string'}),
    defineField({name: 'href', title: 'Href', type: 'string'}),
  ],
})

export const footerLink = defineType({
  name: 'footerLink',
  title: 'Footer Link',
  type: 'object',
  fields: [
    defineField({name: 'label', title: 'Label', type: 'string'}),
    defineField({name: 'href', title: 'Href', type: 'string'}),
  ],
})

export const socialLink = defineType({
  name: 'socialLink',
  title: 'Social Link',
  type: 'object',
  fields: [
    defineField({name: 'label', title: 'Label', type: 'string'}),
    defineField({name: 'href', title: 'Href', type: 'string'}),
  ],
})

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({name: 'siteName', title: 'Site Name', type: 'string'}),
    defineField({name: 'logo', title: 'Logo', type: 'image'}),
    defineField({name: 'bookingBaseUrl', title: 'Booking Base Url', type: 'string'}),
    defineField({name: 'mainBookingPath', title: 'Main Booking Path', type: 'string'}),
    defineField({
      name: 'navItems',
      title: 'Nav Items',
      type: 'array',
      of: [{type: 'navItem'}],
    }),
    defineField({
      name: 'footerLinks',
      title: 'Footer Links',
      type: 'array',
      of: [{type: 'footerLink'}],
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [{type: 'socialLink'}],
    }),
    defineField({name: 'footerCopyright', title: 'Footer Copyright', type: 'string'}),
  ],
})
