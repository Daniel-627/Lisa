import { defineType, defineField } from "sanity";

export default defineType({
    name: "testimonial",
    title: "Testimonial",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Patient Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "text",
            title: "Testimonial Text",
            type: "text",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "image",
            title: "Patient Image",
            type: "image",
            options: { hotspot: true },
        }),
    ],
});
