import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
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
  title: "Univet University",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your_project_id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  plugins: [structureTool(), visionTool()],
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
