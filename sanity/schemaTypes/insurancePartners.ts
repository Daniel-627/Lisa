import { defineType, defineField } from "sanity";

export default defineType({
    name: "insurancePartner",
    title: "Insurance Partner",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Partner Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "logo",
            title: "Logo",
            type: "image",
            options: { hotspot: true },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "website",
            title: "Website",
            type: "url",
        }),
    ],
});
