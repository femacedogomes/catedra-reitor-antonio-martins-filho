export const programSchema = {
  name: "program",
  title: "Programs",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "degree", title: "Degree (e.g. BA, MSc, PhD)", type: "string" },
    { name: "description", title: "Description", type: "text" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
    { name: "image", title: "Image", type: "image", options: { hotspot: true } },
  ],
};

export const courseSchema = {
  name: "course",
  title: "Courses",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "category", title: "Category", type: "string" },
    { name: "description", title: "Description", type: "text" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
    { name: "image", title: "Image", type: "image", options: { hotspot: true } },
  ],
};

export const coordinatorSchema = {
  name: "coordinator",
  title: "Coordinators",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    { name: "role", title: "Role / Course", type: "string" },
    { name: "quote", title: "Quote", type: "text" },
    { name: "photo", title: "Photo", type: "image", options: { hotspot: true } },
  ],
};

export const newsPostSchema = {
  name: "newsPost",
  title: "News Posts",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "category", title: "Category", type: "string" },
    { name: "date", title: "Date", type: "date" },
    { name: "readTime", title: "Read Time (e.g. 5 min read)", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
    { name: "image", title: "Image", type: "image", options: { hotspot: true } },
    { name: "body", title: "Body", type: "array", of: [{ type: "block" }] },
  ],
};

export const navigationSchema = {
  name: "navigation",
  title: "Navigation",
  type: "document",
  fields: [
    { name: "logoText", title: "Logo Text", type: "string" },
    { name: "logo", title: "Logo Image", type: "image" },
    {
      name: "links",
      title: "Navigation Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "Label", type: "string" },
            { name: "href", title: "Link", type: "string" },
            {
              name: "children",
              title: "Dropdown Items",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    { name: "label", title: "Label", type: "string" },
                    { name: "href", title: "Link", type: "string" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    { name: "ctaLabel", title: "CTA Button Label", type: "string" },
    { name: "ctaHref", title: "CTA Button Link", type: "string" },
  ],
};

export const footerSchema = {
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    { name: "logoText", title: "Logo Text", type: "string" },
    { name: "tagline", title: "Tagline", type: "string" },
    {
      name: "columns",
      title: "Footer Columns",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Column Title", type: "string" },
            {
              name: "links",
              title: "Links",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    { name: "label", title: "Label", type: "string" },
                    { name: "href", title: "Link", type: "string" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "platform", title: "Platform", type: "string" },
            { name: "href", title: "Link", type: "string" },
          ],
        },
      ],
    },
    { name: "copyright", title: "Copyright Text", type: "string" },
  ],
};
