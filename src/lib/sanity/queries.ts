import { client } from "./client";

// ─── Programs ─────────────────────────────────────────────────────────────────

export async function getPrograms() {
  return client.fetch(`
    *[_type == "homepage"][0].programsSection {
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
    }
  `);
}

// ─── News ────────────────────────────────────────────────────────────────────

export async function getNews() {
  return client.fetch(`
    *[_type == "homepage"][0].newsSection {
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
    }
  `);
}

// ─── Coordinators ────────────────────────────────────────────────────────────

export async function getCoordinators() {
  return client.fetch(`
    *[_type == "homepage"][0].coordinatorsSection {
      eyebrow,
      title,
      ctaLabel,
      ctaHref,
      coordinators[]-> {
        _id,
        name,
        role,
        quote,
        photo { asset-> { url } }
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
