import { defineType, defineField } from "sanity"
import { UserIcon } from "@sanity/icons"

export default defineType({
    name: "leader",
    title: "Leadership Profile",
    type: "document",
    icon: UserIcon,
    fields: [
        defineField({
            name: "name",
            title: "Full Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "role",
            title: "Role / Position",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "photo",
            title: "Profile Photo",
            type: "image",
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        }),
    ],
    preview: {
        select: {
            title: "name",
            subtitle: "role",
            media: "photo",
        },
    },
})
