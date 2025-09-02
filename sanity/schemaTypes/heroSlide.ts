// schemas/heroSlide.ts
import { defineType, defineField } from "sanity"

export const heroSlide = defineType({
  name: "heroSlide",
  title: "Hero Slide",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "image",
      title: "Background Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "link",
      title: "Button Link",
      type: "url",
      description: "Where should the CTA button go?",
      validation: (Rule) => Rule.uri({ scheme: ["http", "https", "mailto", "tel"] }),
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description: "Manually set the order of slides",
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
})
