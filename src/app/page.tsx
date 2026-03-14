import { getPrograms, getNews, getTestimonials } from "@/lib/sanity/queries";
import { mockHomepage } from "@/lib/sanity/mockData";
import { mergeWithFallback } from "@/lib/sanity/client";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import StatsBar from "@/components/sections/StatsBar";
import Programs from "@/components/sections/Programs";
import ApplicationForm from "@/components/sections/ApplicationForm";
import Testimonials from "@/components/sections/Testimonials";
import Courses from "@/components/sections/Courses";
import News from "@/components/sections/News";
import CampusLife from "@/components/sections/CampusLife";
import type { HomepageData } from "@/types";

export const revalidate = 60; // ISR — revalidate every 60 seconds

export default async function HomePage() {
  // Start with mock data
  let data: HomepageData = mockHomepage;

  try {
    // Fetch only Programs, News, and Testimonials from Sanity
    const [programsData, newsData, testimonialsData] = await Promise.all([
      getPrograms(),
      getNews(),
      getTestimonials(),
    ]);

    // Merge Sanity data with mock data for these sections only
    if (programsData) {
      data.programsSection = mergeWithFallback(programsData, mockHomepage.programsSection);
    }
    if (newsData) {
      data.newsSection = mergeWithFallback(newsData, mockHomepage.newsSection);
    }
    if (testimonialsData) {
      data.testimonialsSection = mergeWithFallback(testimonialsData, mockHomepage.testimonialsSection);
    }
  } catch {
    // Falls back to mock data in development or when Sanity is not configured
  }

  return (
    <>
      <Hero data={data.hero} />
      <About data={data.aboutSection} />
      <StatsBar data={data.statsBar} />
      <Programs data={data.programsSection} />
      <ApplicationForm data={data.applicationForm} />
      <Testimonials data={data.testimonialsSection} />
      <Courses data={data.coursesSection} />
      <News data={data.newsSection} />
      <CampusLife data={data.campusLifeSection} />
    </>
  );
}
