import type { HomepageData, NavigationData, FooterData } from "@/types";

export const mockNavigation: NavigationData = {
  logoText: "UNIVET",
  links: [
    { label: "About", href: "/about" },
    { label: "Academics", href: "/academics", children: [{ label: "Programs", href: "/programs" }, { label: "Courses", href: "/courses" }] },
    { label: "Admissions", href: "/admissions" },
    { label: "Research", href: "/research" },
    { label: "Campus Life", href: "/campus-life" },
    { label: "News", href: "/news" },
  ],
  ctaLabel: "Apply Now",
  ctaHref: "/apply",
};

export const mockFooter: FooterData = {
  logoText: "UNIVET",
  tagline: "Excellence In Education, Innovation For Life",
  columns: [
    {
      title: "Academics",
      links: [
        { label: "Undergraduate Programs", href: "/programs/undergraduate" },
        { label: "Graduate Programs", href: "/programs/graduate" },
        { label: "Online Learning", href: "/online" },
        { label: "Research Centers", href: "/research" },
        { label: "Faculty Directory", href: "/faculty" },
      ],
    },
    {
      title: "Admissions",
      links: [
        { label: "How to Apply", href: "/admissions/apply" },
        { label: "Tuition & Aid", href: "/admissions/tuition" },
        { label: "Scholarships", href: "/admissions/scholarships" },
        { label: "International Students", href: "/admissions/international" },
        { label: "Visit Campus", href: "/visit" },
      ],
    },
    {
      title: "Campus Life",
      links: [
        { label: "Housing", href: "/housing" },
        { label: "Student Organizations", href: "/student-orgs" },
        { label: "Athletics", href: "/athletics" },
        { label: "Dining", href: "/dining" },
        { label: "Health & Wellness", href: "/health" },
      ],
    },
    {
      title: "About",
      links: [
        { label: "Our Mission", href: "/about/mission" },
        { label: "Leadership", href: "/about/leadership" },
        { label: "History", href: "/about/history" },
        { label: "Rankings & Awards", href: "/about/rankings" },
        { label: "Contact Us", href: "/contact" },
      ],
    },
  ],
  socialLinks: [
    { platform: "facebook", href: "https://facebook.com" },
    { platform: "twitter", href: "https://twitter.com" },
    { platform: "instagram", href: "https://instagram.com" },
    { platform: "linkedin", href: "https://linkedin.com" },
    { platform: "youtube", href: "https://youtube.com" },
  ],
  copyright: "© 2024 Univet University. All rights reserved.",
};

export const mockHomepage: HomepageData = {
  hero: {
    eyebrow: "Welcome to Univet University",
    title: "Excellence In Education\nInnovation For Life",
    subtitle: "Shaping the future through world-class education, groundbreaking research, and a vibrant community of scholars.",
    ctaLabel: "Apply For Fall 2025",
    ctaHref: "/apply",
  },
  aboutSection: {
    eyebrow: "About Univet University",
    title: "Experience the Difference at Univet University",
    description: "At Univet University, we believe in transforming lives through education. Our diverse programs, exceptional faculty, and state-of-the-art facilities create an environment where students thrive academically and personally.",
    tabs: [
      { label: "Years", content: "With over 150 years of academic excellence, Univet has shaped generations of leaders and innovators." },
      { label: "Skills", content: "Our curriculum combines theoretical knowledge with practical skills, preparing graduates for real-world challenges." },
      { label: "Fellows", content: "Join a community of over 50,000 distinguished alumni who are making an impact across the globe." },
    ],
    highlights: [
      { text: "First-class academic environment" },
      { text: "World-renowned research facilities" },
      { text: "Global exchange programs" },
      { text: "Industry partnership opportunities" },
    ],
    ctaLabel: "Discover More",
    ctaHref: "/about",
    badgeLabel: "Years of Excellence",
    badgeValue: "150+",
  },
  statsBar: [
    { icon: "GraduationCap", value: "42,000+", label: "Graduate Students", description: "Students graduated with honors each year" },
    { icon: "BookOpen", value: "200+", label: "Total Scholarship", description: "Scholarships awarded annually to deserving students" },
    { icon: "Users", value: "5,000+", label: "In-House Scholars", description: "Distinguished scholars and researchers on campus" },
  ],
  programsSection: {
    eyebrow: "Explore Our Programs",
    title: "Academic Programs",
    ctaLabel: "View All Programs",
    ctaHref: "/programs",
    programs: [
      { _id: "1", title: "BA in History", degree: "BA", description: "Explore the rich tapestry of human civilization through critical analysis of historical events and cultures.", slug: { current: "ba-history" } },
      { _id: "2", title: "BSc in Pre-Medicine", degree: "BSc", description: "A rigorous pre-medical curriculum designed to prepare students for medical school admissions.", slug: { current: "bsc-pre-medicine" } },
      { _id: "3", title: "MBA in CSE", degree: "MBA", description: "Combine business acumen with technical expertise in our cutting-edge business and computer science program.", slug: { current: "mba-cse" } },
      { _id: "4", title: "BSc in CSE", degree: "BSc", description: "Develop expertise in software engineering, algorithms, and emerging technologies.", slug: { current: "bsc-cse" } },
    ],
  },
  applicationForm: {
    title: "Apply For Admission",
    subtitle: "Take the first step toward your future at Univet University. Complete the form below and our admissions team will be in touch.",
    fields: [
      { name: "firstName", label: "First Name", type: "text", placeholder: "First Name", required: true, halfWidth: true },
      { name: "lastName", label: "Last Name", type: "text", placeholder: "Last Name", required: true, halfWidth: true },
      { name: "email", label: "Email", type: "email", placeholder: "Email Address", required: true, halfWidth: true },
      { name: "phone", label: "Phone", type: "tel", placeholder: "Phone Number", required: false, halfWidth: true },
      { name: "program", label: "Program", type: "text", placeholder: "Program of Interest", required: true, halfWidth: true },
      { name: "year", label: "Year", type: "text", placeholder: "Expected Start Year", required: true, halfWidth: true },
      { name: "message", label: "Message", type: "textarea", placeholder: "Tell us about yourself...", required: false, halfWidth: false },
    ],
    submitLabel: "Submit Application",
  },
  testimonialsSection: {
    eyebrow: "Testimonials",
    title: "What Our Students Say",
    ctaLabel: "View More",
    ctaHref: "/testimonials",
    testimonials: [
      { _id: "1", name: "Katherine Murphy", role: "Graduate Student", quote: "Univet University gave me the tools and confidence to pursue my dreams. The faculty are incredibly supportive and the facilities are world-class." },
      { _id: "2", name: "Cameron O'Donnell", role: "Undergraduate Student", quote: "The campus life here is incredible. I have grown not just academically but personally through the diverse community and programs available." },
      { _id: "3", name: "Savannah Hassan", role: "PhD Candidate", quote: "The research opportunities at Univet are unmatched. I have been able to work on cutting-edge projects with leading experts in my field." },
    ],
  },
  coursesSection: {
    eyebrow: "Our Courses",
    title: "Featured Courses",
    ctaLabel: "View All Courses",
    ctaHref: "/courses",
    courses: [
      { _id: "1", title: "Bachelor of Student Studies", category: "Undergraduate", description: "A comprehensive study of student development and higher education practices.", slug: { current: "bachelor-student-studies" } },
      { _id: "2", title: "BSc in International Law", category: "Undergraduate", description: "Study the principles of international legal systems and global governance.", slug: { current: "bsc-international-law" } },
      { _id: "3", title: "Bachelor of Public Health", category: "Undergraduate", description: "Address public health challenges with evidence-based approaches and policy analysis.", slug: { current: "bachelor-public-health" } },
      { _id: "4", title: "MSc in Mathematics", category: "Graduate", description: "Advanced mathematical theory and its applications in science and engineering.", slug: { current: "msc-mathematics" } },
      { _id: "5", title: "Master in English Literature", category: "Graduate", description: "Explore literature's power to illuminate the human experience across cultures and centuries.", slug: { current: "master-english-literature" } },
      { _id: "6", title: "Master of Laws (LLM)", category: "Graduate", description: "Deepen your legal expertise with advanced study in specialized areas of law.", slug: { current: "master-of-laws" } },
    ],
  },
  newsSection: {
    eyebrow: "Latest News",
    title: "University News",
    ctaLabel: "View All News",
    ctaHref: "/news",
    posts: [
      { _id: "1", title: "Academic Excellence: International Conference Announcements", category: "Academic", date: "2024-10-15", readTime: "5 min read", slug: { current: "academic-excellence-conference" } },
      { _id: "2", title: "New Research Grants: University Innovative Research Announcements", category: "Research", date: "2024-10-10", readTime: "3 min read", slug: { current: "research-grants-announcement" } },
      { _id: "3", title: "Annual Founders Day: Celebrating University Milestones & Achievements", category: "Events", date: "2024-10-05", readTime: "4 min read", slug: { current: "founders-day-2024" } },
    ],
  },
  campusLifeSection: {
    eyebrow: "Campus Life",
    title: "Univet Campus Life",
    description: "Discover a vibrant campus community with state-of-the-art facilities, diverse student organizations, and countless opportunities for growth beyond the classroom.",
    ctaLabel: "Explore Campus",
    ctaHref: "/campus-life",
    gallery: [],
  },
};
