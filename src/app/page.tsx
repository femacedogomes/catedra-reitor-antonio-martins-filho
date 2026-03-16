import { getPrograms, getNews, getCoordinators } from "@/lib/sanity/queries";
import { mockHomepage } from "@/lib/sanity/mockData";
import { mergeWithFallback } from "@/lib/sanity/client";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import StatsBar from "@/components/sections/StatsBar";
import Programs from "@/components/sections/Programs";
import ApplicationForm from "@/components/sections/ApplicationForm";
import Coordinators from "@/components/sections/Coordinators";
import Courses from "@/components/sections/Courses";
import News from "@/components/sections/News";
import CampusLife from "@/components/sections/CampusLife";
import type { HomepageData } from "@/types";
import Participants from "@/components/sections/Participants";

export const revalidate = 60; // ISR — revalidate every 60 seconds

export default async function HomePage() {
  // Start with mock data
  let data: HomepageData = mockHomepage;

  try {
    // Fetch only Programs, News, and Coordinators from Sanity
    const [programsData, newsData, coordinatorsData] = await Promise.all([
      getPrograms(),
      getNews(),
      getCoordinators(),
    ]);

    // Merge Sanity data with mock data for these sections only
    if (programsData) {
      data.programsSection = mergeWithFallback(programsData, mockHomepage.programsSection);
    }
    if (newsData) {
      data.newsSection = mergeWithFallback(newsData, mockHomepage.newsSection);
    }
    if (coordinatorsData) {
      data.coordinatorsSection = mergeWithFallback(coordinatorsData, mockHomepage.coordinatorsSection);
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
      {/* <ApplicationForm data={data.applicationForm} /> */}
      <Coordinators data={data.coordinatorsSection} />
      <Courses data={data.coursesSection} />
      <Participants data={data.participantsSection} />
      <News data={data.newsSection} />
      <CampusLife data={data.campusLifeSection} />
    </>
  );
}
