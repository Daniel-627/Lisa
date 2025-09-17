export default {
  name: "department",
  title: "Department",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Department Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
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
      name: "doctors",
      title: "Available Doctors",
      type: "array",
      of: [{ type: "reference", to: [{ type: "doctor" }] }],
    },
  ],
}
