import { defineType, defineField } from "sanity"

export default defineType({
    name: "accreditation",
    title: "Accreditation",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "logo",
            title: "Logo",
            type: "image",
            options: { hotspot: true },
        }),
    ],
})
