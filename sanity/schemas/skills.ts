/** @format */

import { defineField, defineType } from "sanity";

export default defineType({
  name: "skills",
  type: "document",
  title: "Skills",
  fields: [
    defineField({
      name: "label",
      type: "string",
      title: "Label",
      validation: (Rule) => Rule.required().min(3).max(100),
    }),
    defineField({
      name: "value",
      type: "number",
      title: "Percentage",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .error("Minimum value must be 1")
          .max(100)
          .error("Max value must be 100"),
    }),
    defineField({
      name: "category",
      type: "string",
      title: "Category",
      initialValue: () => "frontend",
      options: {
        list: [
          { title: "Front End", value: "frontend" },
          { title: "Back End", value: "backend" },
          { title: "Tools", value: "tools" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
