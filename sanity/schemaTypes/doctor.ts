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
      name: "services",
      title: "Services Provided",
      type: "array",
      of: [{ type: "reference", to: [{ type: "service" }] }],
    },
  ],
}
