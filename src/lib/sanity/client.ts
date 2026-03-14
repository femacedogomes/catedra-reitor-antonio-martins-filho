import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your_project_id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01",
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_API_TOKEN,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

/**
 * Deep merge function that fills null/undefined values from sanity data with fallback mock data
 * Recursively merges objects and arrays, preserving sanity data structure while filling gaps
 */
export function mergeWithFallback<T>(sanityData: T | null | undefined, fallbackData: T): T {
  // If sanity data is null or undefined, return fallback
  if (!sanityData) {
    return fallbackData;
  }

  // If sanity data is not an object, return it as is
  if (typeof sanityData !== "object") {
    return sanityData;
  }

  // If it's an array
  if (Array.isArray(sanityData)) {
    const fallbackArray = Array.isArray(fallbackData) ? fallbackData : [];
    
    return sanityData.map((item, index) => {
      // If array item is null/undefined, use fallback item
      if (item == null) {
        return fallbackArray[index] ?? item;
      }
      
      // If array item is an object, merge recursively
      if (typeof item === "object" && !Array.isArray(item)) {
        const fallbackItem = fallbackArray[index] ?? {};
        return mergeWithFallback(item, fallbackItem);
      }
      
      return item;
    }) as T;
  }

  // If it's an object, merge recursively
  const result = { ...sanityData } as Record<string, unknown>;
  const fallbackObj = fallbackData as Record<string, unknown>;

  for (const key in result) {
    const sanityValue = result[key];
    const fallbackValue = fallbackObj[key];

    // If sanity value is null or undefined, use fallback
    if (sanityValue == null && fallbackValue != null) {
      result[key] = fallbackValue;
    }
    // If both are objects (but not arrays), merge recursively
    else if (
      typeof sanityValue === "object" &&
      !Array.isArray(sanityValue) &&
      typeof fallbackValue === "object" &&
      !Array.isArray(fallbackValue)
    ) {
      result[key] = mergeWithFallback(sanityValue, fallbackValue);
    }
  }

  return result as T;
}
