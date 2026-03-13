import { getHomepage } from "@/lib/sanity/queries";
import { mockHomepage } from "@/lib/sanity/mockData";
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
  let data: HomepageData = mockHomepage;

  try {
    const sanityData = await getHomepage();
    if (sanityData) data = sanityData;
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
