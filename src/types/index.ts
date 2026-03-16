// ─── Sanity Image ─────────────────────────────────────────────────────────────

export interface SanityImage {
  asset: { url: string };
}

// ─── Navigation ──────────────────────────────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export interface NavigationData {
  logo?: SanityImage;
  logoText: string;
  links: NavLink[];
  ctaLabel: string;
  ctaHref: string;
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

export interface HeroData {
  eyebrow: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  backgroundImage?: SanityImage;
}

// ─── About Section ────────────────────────────────────────────────────────────

export interface AboutTab {
  label: string;
  content: string;
}

export interface AboutSection {
  eyebrow: string;
  title: string;
  description: string;
  tabs: AboutTab[];
  highlights: { text: string }[];
  ctaLabel: string;
  ctaHref: string;
  leftImage?: SanityImage;
  badgeLabel: string;
  badgeValue: string;
}

// ─── Stats ────────────────────────────────────────────────────────────────────

export interface StatItem {
  icon: string;
  value: string;
  label: string;
  description: string;
}

// ─── Programs ─────────────────────────────────────────────────────────────────

export interface Program {
  _id: string;
  title: string;
  degree: string;
  description: string;
  slug: { current: string };
  image?: SanityImage;
}

export interface ProgramsSection {
  eyebrow: string;
  title: string;
  ctaLabel: string;
  ctaHref: string;
  programs: Program[];
}

// ─── Application Form ─────────────────────────────────────────────────────────

export interface FormField {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  required: boolean;
  halfWidth: boolean;
}

export interface ApplicationForm {
  title: string;
  subtitle: string;
  fields: FormField[];
  submitLabel: string;
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

export interface Testimonial {
  _id: string;
  name: string;
  role: string;
  quote: string;
  photo?: SanityImage;
}

export interface TestimonialsSection {
  eyebrow: string;
  title: string;
  ctaLabel: string;
  ctaHref: string;
  testimonials: Testimonial[];
}

// ─── Courses ──────────────────────────────────────────────────────────────────

export interface Course {
  _id: string;
  title: string;
  category: string;
  description: string;
  slug: { current: string };
  image?: SanityImage;
}

export interface CoursesSection {
  eyebrow: string;
  title: string;
  ctaLabel: string;
  ctaHref: string;
  courses: Course[];
}

// ─── News ─────────────────────────────────────────────────────────────────────

export interface NewsPost {
  _id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  slug: { current: string };
  image?: SanityImage;
}

export interface NewsSection {
  eyebrow: string;
  title: string;
  ctaLabel: string;
  ctaHref: string;
  posts: NewsPost[];
}

// ─── Campus Life ──────────────────────────────────────────────────────────────

export interface CampusLifeSection {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  mainImage?: SanityImage;
  gallery: SanityImage[];
}

// ─── Footer ───────────────────────────────────────────────────────────────────

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface FooterData {
  logoText: string;
  tagline: string;
  columns: FooterColumn[];
  socialLinks: { platform: string; href: string }[];
  copyright: string;
}

// ─── Homepage ─────────────────────────────────────────────────────────────────

// ─── Participants ─────────────────────────────────────────────────────────────

export interface Participant {
  _id: string;
  name: string;
  course: string;
  bio: string;
  photo?: SanityImage;
}

export interface ParticipantsSection {
  eyebrow: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  participants: Participant[];
}

// ─── Homepage ─────────────────────────────────────────────────────────────────

export interface HomepageData {
  hero: HeroData;
  aboutSection: AboutSection;
  statsBar: StatItem[];
  programsSection: ProgramsSection;
  applicationForm: ApplicationForm;
  testimonialsSection: TestimonialsSection;
  participantsSection: ParticipantsSection;
  coursesSection: CoursesSection;
  newsSection: NewsSection;
  campusLifeSection: CampusLifeSection;
}
