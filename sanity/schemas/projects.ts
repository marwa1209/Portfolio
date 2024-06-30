/** @format */

import { defineField, defineType } from "sanity";

export default defineType({
  name: "projects",
  type: "document",
  title: "Projects",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule) =>
        Rule.required()
          .min(3)
          .error("A title of min. 3 characters is required")
          .max(100)
          .error("Max 100 characters are allowed"),
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
      validation: (Rule) => Rule.required().min(3).max(1000),
    }),
    defineField({
      name: "images",
      type: "array",
      title: "Images",
      of: [{ type: "image" }],
    }),
    defineField({
      name: "tags",
      type: "array",
      title: "Tags",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "demoLink",
      type: "string",
      title: "Demo Link",
      validation: (Rule) =>
        Rule.regex(
          /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
          {
            name: "URL",
            invert: false,
          }
        ).error("Invalid URL. Please provide a valid URL."),
    }),
    defineField({
      name: "githubLink",
      type: "string",
      title: "Github Repository Link",
      validation: (Rule) =>
        Rule.regex(
          /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
          {
            name: "URL", 
            invert: false, 
          }
        ).error("Invalid URL. Please provide a valid URL."),
    }),
    defineField({
      name: "publishedAt",
      type: "date",
      title: "Published At",
      validation: (Rule) =>
        Rule.min(new Date("2020-08-25").toISOString())
          .max(new Date().toISOString())
          .error("Published date must be between 2020-08-25 and today"),
    }),
    defineField({
      name: "isResponsive",
      type: "boolean",
      title: "Is Responsive",
      initialValue: true,
    }),
  ],
});
