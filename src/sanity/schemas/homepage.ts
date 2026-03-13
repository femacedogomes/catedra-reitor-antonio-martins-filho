export const homepageSchema = {
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    {
      name: "hero",
      title: "Hero Section",
      type: "object",
      fields: [
        { name: "eyebrow", title: "Eyebrow Text", type: "string" },
        { name: "title", title: "Title", type: "string" },
        { name: "subtitle", title: "Subtitle", type: "text" },
        { name: "ctaLabel", title: "CTA Button Label", type: "string" },
        { name: "ctaHref", title: "CTA Button Link", type: "string" },
        { name: "backgroundImage", title: "Background Image", type: "image", options: { hotspot: true } },
      ],
    },
    {
      name: "aboutSection",
      title: "About Section",
      type: "object",
      fields: [
        { name: "eyebrow", title: "Eyebrow Text", type: "string" },
        { name: "title", title: "Title", type: "string" },
        { name: "description", title: "Description", type: "text" },
        {
          name: "tabs",
          title: "Tabs",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "label", title: "Tab Label", type: "string" },
                { name: "content", title: "Tab Content", type: "text" },
              ],
            },
          ],
        },
        {
          name: "highlights",
          title: "Highlight Points",
          type: "array",
          of: [{ type: "object", fields: [{ name: "text", title: "Text", type: "string" }] }],
        },
        { name: "ctaLabel", title: "CTA Label", type: "string" },
        { name: "ctaHref", title: "CTA Link", type: "string" },
        { name: "leftImage", title: "Left Image", type: "image", options: { hotspot: true } },
        { name: "badgeLabel", title: "Badge Label", type: "string" },
        { name: "badgeValue", title: "Badge Value", type: "string" },
      ],
    },
    {
      name: "statsBar",
      title: "Stats Bar",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "icon", title: "Icon (lucide name)", type: "string" },
            { name: "value", title: "Value", type: "string" },
            { name: "label", title: "Label", type: "string" },
            { name: "description", title: "Description", type: "string" },
          ],
        },
      ],
    },
    {
      name: "programsSection",
      title: "Programs Section",
      type: "object",
      fields: [
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        { name: "title", title: "Title", type: "string" },
        { name: "ctaLabel", title: "CTA Label", type: "string" },
        { name: "ctaHref", title: "CTA Link", type: "string" },
        {
          name: "programs",
          title: "Programs",
          type: "array",
          of: [{ type: "reference", to: [{ type: "program" }] }],
        },
      ],
    },
    {
      name: "applicationForm",
      title: "Application Form",
      type: "object",
      fields: [
        { name: "title", title: "Title", type: "string" },
        { name: "subtitle", title: "Subtitle", type: "text" },
        {
          name: "fields",
          title: "Form Fields",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                { name: "name", title: "Field Name", type: "string" },
                { name: "label", title: "Label", type: "string" },
                { name: "type", title: "Input Type", type: "string" },
                { name: "placeholder", title: "Placeholder", type: "string" },
                { name: "required", title: "Required", type: "boolean" },
                { name: "halfWidth", title: "Half Width", type: "boolean" },
              ],
            },
          ],
        },
        { name: "submitLabel", title: "Submit Button Label", type: "string" },
      ],
    },
    {
      name: "testimonialsSection",
      title: "Testimonials Section",
      type: "object",
      fields: [
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        { name: "title", title: "Title", type: "string" },
        { name: "ctaLabel", title: "CTA Label", type: "string" },
        { name: "ctaHref", title: "CTA Link", type: "string" },
        {
          name: "testimonials",
          title: "Testimonials",
          type: "array",
          of: [{ type: "reference", to: [{ type: "testimonial" }] }],
        },
      ],
    },
    {
      name: "coursesSection",
      title: "Courses Section",
      type: "object",
      fields: [
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        { name: "title", title: "Title", type: "string" },
        { name: "ctaLabel", title: "CTA Label", type: "string" },
        { name: "ctaHref", title: "CTA Link", type: "string" },
        {
          name: "courses",
          title: "Courses",
          type: "array",
          of: [{ type: "reference", to: [{ type: "course" }] }],
        },
      ],
    },
    {
      name: "newsSection",
      title: "News Section",
      type: "object",
      fields: [
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        { name: "title", title: "Title", type: "string" },
        { name: "ctaLabel", title: "CTA Label", type: "string" },
        { name: "ctaHref", title: "CTA Link", type: "string" },
        {
          name: "posts",
          title: "News Posts",
          type: "array",
          of: [{ type: "reference", to: [{ type: "newsPost" }] }],
        },
      ],
    },
    {
      name: "campusLifeSection",
      title: "Campus Life Section",
      type: "object",
      fields: [
        { name: "eyebrow", title: "Eyebrow", type: "string" },
        { name: "title", title: "Title", type: "string" },
        { name: "description", title: "Description", type: "text" },
        { name: "ctaLabel", title: "CTA Label", type: "string" },
        { name: "ctaHref", title: "CTA Link", type: "string" },
        { name: "mainImage", title: "Main Image", type: "image", options: { hotspot: true } },
        { name: "gallery", title: "Gallery Images", type: "array", of: [{ type: "image", options: { hotspot: true } }] },
      ],
    },
  ],
};
