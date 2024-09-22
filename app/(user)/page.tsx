import { client } from "@/sanity/lib/client";
import { Toaster } from "react-hot-toast";
import { PageInfo, Social, Project, Skill } from "@/typings";
import {
  pageInfoQuery,
  projectQuery,
  skillQuery,
  socialQuery,
} from "@/util/getQuery";
import Header from "../components/header";
import Hero from "../components/hero";
import { About } from "../components/about";
import { Projects } from "../components/projects";
import { UserSkills } from "../components/user-skills";
import { ContactMe } from "../components/contact-me";

export const revalidate = 30;
export default async function Home() {
  const pageInfo: PageInfo = await client.fetch(pageInfoQuery);
  const socials: Social[] = await client.fetch(socialQuery);
  const projects: Project[] = await client.fetch(projectQuery);
  // const experiences: Experience[] = await client.fetch(experienceQuery);
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
      <section id="projects" className="snap-center">
        <Projects projects={projects} />
      </section>
      <section id="skills" className="snap-center">
        <UserSkills skills={skills} />
      </section>
      <section id="contact" className="snap-center">
        <ContactMe pageInfo={pageInfo} />
      </section>
      <Toaster />
    </div>
  );
}
