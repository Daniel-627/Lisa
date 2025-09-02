export default {
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Service Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "department",
      title: "Department",
      type: "reference",
      to: [{ type: "department" }],
    },
    {
      name: "doctors",
      title: "Available Doctors",
      type: "array",
      of: [{ type: "reference", to: [{ type: "doctor" }] }],
    },
  ],
}
