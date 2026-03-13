import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { homepageSchema } from "./schemas/homepage";
import {
  programSchema,
  courseSchema,
  testimonialSchema,
  newsPostSchema,
  navigationSchema,
  footerSchema,
} from "./schemas/index";

export default defineConfig({
  name: "default",
  title: "Catedra UFC",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your_project_id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  plugins: [structureTool()],
  schema: {
    types: [
      homepageSchema,
      programSchema,
      courseSchema,
      testimonialSchema,
      newsPostSchema,
      navigationSchema,
      footerSchema,
    ],
  },
});
