export default {
  name: "doctor",
  title: "Doctor",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Full Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
    },
    {
      name: "professional_title",
      title: "Professional Title",
      type: "string",
    },
    {
      name: "photo",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "bio",
      title: "Biography",
      type: "text",
    },
    {
      name: "qualifications",
      title: "Qualifications",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "department",
      title: "Department",
      type: "reference",
      to: [{ type: "department" }],
    },
  ],
}
