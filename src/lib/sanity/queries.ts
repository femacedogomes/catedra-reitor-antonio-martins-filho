import { client } from "./client";

// ─── Homepage ────────────────────────────────────────────────────────────────

export async function getHomepage() {
  return client.fetch(`
    *[_type == "homepage"][0] {
      hero {
        eyebrow,
        title,
        subtitle,
        ctaLabel,
        ctaHref,
        backgroundImage { asset-> { url } }
      },
      aboutSection {
        eyebrow,
        title,
        description,
        tabs[] { label, content },
        highlights[] { text },
        ctaLabel,
        ctaHref,
        leftImage { asset-> { url } },
        badgeLabel,
        badgeValue
      },
      statsBar[] {
        icon,
        value,
        label,
        description
      },
      programsSection {
        eyebrow,
        title,
        ctaLabel,
        ctaHref,
        programs[]-> {
          _id,
          title,
          degree,
          description,
          slug { current },
          image { asset-> { url } }
        }
      },
      applicationForm {
        title,
        subtitle,
        fields[] { name, label, type, placeholder, required, halfWidth },
        submitLabel
      },
      testimonialsSection {
        eyebrow,
        title,
        ctaLabel,
        ctaHref,
        testimonials[]-> {
          _id,
          name,
          role,
          quote,
          photo { asset-> { url } }
        }
      },
      coursesSection {
        eyebrow,
        title,
        ctaLabel,
        ctaHref,
        courses[]-> {
          _id,
          title,
          category,
          description,
          slug { current },
          image { asset-> { url } }
        }
      },
      newsSection {
        eyebrow,
        title,
        ctaLabel,
        ctaHref,
        posts[]-> {
          _id,
          title,
          category,
          date,
          readTime,
          slug { current },
          image { asset-> { url } }
        }
      },
      campusLifeSection {
        eyebrow,
        title,
        description,
        ctaLabel,
        ctaHref,
        mainImage { asset-> { url } },
        gallery[] { asset-> { url } }
      }
    }
  `);
}

// ─── Navigation ──────────────────────────────────────────────────────────────

export async function getNavigation() {
  return client.fetch(`
    *[_type == "navigation"][0] {
      logo { asset-> { url } },
      logoText,
      links[] { label, href, children[] { label, href } },
      ctaLabel,
      ctaHref
    }
  `);
}

// ─── Footer ──────────────────────────────────────────────────────────────────

export async function getFooter() {
  return client.fetch(`
    *[_type == "footer"][0] {
      logoText,
      tagline,
      columns[] {
        title,
        links[] { label, href }
      },
      socialLinks[] { platform, href },
      copyright
    }
  `);
}
