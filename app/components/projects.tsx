"use client";
import { Project } from "@/typings";
import { FramerContainer } from "./framer-container";

import {
  ArrowLeft,
  ChevronRight,
  Github,
  SquareArrowUpRight,
} from "lucide-react";
import { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

type Props = {
  projects: Project[];
};
export const Projects = ({ projects }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [portfolio, setPortfolio] = useState<Project | null>(null);

  const onClick = (project: Project) => {
    console.log({ project });
    setIsOpen(true);
    setPortfolio(project);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <FramerContainer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col text-left max-w-full mx-auto items-center"
    >
      <h3 className=" uppercase tracking-[10px] text-gray-500 text-xl mt-20 md:mt-14">
        projects
      </h3>
      <div className="w-full absolute top-[35%] left-0 h-[300px] bg-[#cc5223]/20 -skew-y-12" />
      <div className="w-full max-w-xl mx-auto h-full px-4 gap-y-4 flex flex-col justify-center">
        {projects.map((project, i) => {
          return (
            <Fragment key={i}>
              <div
                onClick={() => onClick(project)}
                className="flex items-center gap-x-2 cursor-pointer z-30 group"
              >
                <h3 className="font-semibold text-lg text-gray-400 group-hover:text-white">
                  {project.title}
                </h3>
                <div className="flex-1 h-[0.185rem] bg-gray-400 group-hover:bg-white" />
                <ChevronRight className="size-5 text-gray-400 group-hover:text-white" />
              </div>
              {portfolio && (
                <div
                  className={`fixed inset-0 z-30 bg-black overflow-y-auto scrollbar-track-gray-400/20 scrollbar-thumb-[#cc5223]/80 scrollbar-thin scroll-smooth ${!isOpen && "hidden"}`}
                >
                  <div className="max-w-2xl mx-auto px-2 py-8 md:py-20">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="cursor-pointer p-2 rounded-md bg-[#272626] hover:bg-black/70"
                    >
                      <ArrowLeft className="size-5" />
                    </button>
                    <div className="relative w-[20rem] h-[13rem] md:w-[30rem] md:h-[18rem] mx-auto">
                      <Image
                        src={urlFor(portfolio.image).url()}
                        alt="project"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex justify-between">
                      <h3 className="font-semibold text-xl">
                        {portfolio.title}
                      </h3>
                      <div className="flex gap-x-2">
                        {portfolio.linkToGit && (
                          <Link
                            href={portfolio.linkToGit}
                            target="_blank"
                            className="rounded-md p-2 bg-[#272626] hover:bg-black/70"
                          >
                            <Github className="size-5" />
                          </Link>
                        )}
                        {portfolio.linkToBuild && (
                          <Link
                            href={portfolio.linkToBuild}
                            target="_blank"
                            className="rounded-md p-2 bg-[#272626] hover:bg-black/70"
                          >
                            <SquareArrowUpRight className="size-5" />
                          </Link>
                        )}
                      </div>
                    </div>
                    <p className="text-gray-300 py-2">{portfolio.summary}</p>
                    <div className="py-2 flex flex-wrap gap-3">
                      {portfolio.techStack.map((tech) => (
                        <span
                          className="py-1 px-2 text-sm font-semibold rounded-full bg-white text-gray-900"
                          key={tech}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </Fragment>
          );
        })}
      </div>
    </FramerContainer>
  );
};
