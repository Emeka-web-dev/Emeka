import { client } from "@/sanity/lib/client";
import { Toaster } from "react-hot-toast";
import { PageInfo, Social, Project, Experience, Skill } from "@/typings";
import {
  experienceQuery,
  pageInfoQuery,
  projectQuery,
  skillQuery,
  socialQuery,
} from "@/util/getQuery";
import Header from "../components/header";
import Hero from "../components/hero";
import { About } from "../components/about";

export const revalidate = 30;
export default async function Home() {
  const pageInfo: PageInfo = await client.fetch(pageInfoQuery);
  const socials: Social[] = await client.fetch(socialQuery);
  const projects: Project[] = await client.fetch(projectQuery);
  const experiences: Experience[] = await client.fetch(experienceQuery);
  const skills: Skill[] = await client.fetch(skillQuery);

  // console.log({ pageInfo, socials, projects, experiences, skills });

  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-x-hidden z-0 scrollbar-track-gray-400/20 scrollbar-thumb-[#cc5223]/80 scrollbar-thin scroll-smooth">
      <Header socials={socials} />
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      <Toaster />
    </div>
  );
}
