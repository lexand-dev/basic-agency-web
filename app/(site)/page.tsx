import { HomeIntro } from "@/components/sections/home";
import { Overview } from "@/components/sections/overview";
import { CaseStudies } from "@/components/sections/case-studies";
import { Clients } from "@/components/sections/clients";
import { Spotlight } from "@/components/sections/spotlight";
import { News } from "@/components/sections/news";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HomeIntro />
      <Overview />
      <CaseStudies />
      <Clients />
      <Spotlight />
      <News />
    </main>
  );
}
