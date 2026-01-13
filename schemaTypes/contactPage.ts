import {defineField, defineType} from 'sanity'

export const contactPage = defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fields: [
    defineField({name: 'heroHeading', title: 'Hero Heading', type: 'string'}),
    defineField({name: 'heroBody', title: 'Hero Body', type: 'text'}),
    defineField({name: 'formFullNameLabel', title: 'Form Full Name Label', type: 'string'}),
    defineField({name: 'formEmailLabel', title: 'Form Email Label', type: 'string'}),
    defineField({name: 'formMessageLabel', title: 'Form Message Label', type: 'string'}),
    defineField({name: 'formSubmitLabel', title: 'Form Submit Label', type: 'string'}),
    defineField({name: 'directEmailHeading', title: 'Direct Email Heading', type: 'string'}),
    defineField({name: 'directEmailBody', title: 'Direct Email Body', type: 'text'}),
    defineField({name: 'directEmailAddress', title: 'Direct Email Address', type: 'string'}),
    defineField({name: 'faqBoxHeading', title: 'Faq Box Heading', type: 'string'}),
    defineField({name: 'faqBoxBody', title: 'Faq Box Body', type: 'text'}),
    defineField({name: 'faqBoxLinkLabel', title: 'Faq Box Link Label', type: 'string'}),
    defineField({name: 'faqBoxLinkHref', title: 'Faq Box Link Href', type: 'string'}),
    defineField({name: 'privacyBoxHeading', title: 'Privacy Box Heading', type: 'string'}),
    defineField({name: 'privacyBoxBody', title: 'Privacy Box Body', type: 'text'}),
  ],
})
