import { Resume, Social } from "@/typings";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { FramerContainer } from "./framer-container";
import { Download } from "lucide-react";
import { urlForFile } from "@/sanity/lib/file";

type Props = {
  socials: Social[];
  resume: Resume;
};
function Header({ socials, resume }: Props) {
  return (
    <header className="fixed inset-x-0 top-0 flex items-center justify-between max-w-5xl mx-auto z-20 xl:items-center py-1 px-4">
      <FramerContainer
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        className="flex flex-row items-center"
      >
        {socials.map((social) => (
          <SocialIcon
            key={social.title}
            url={social.url}
            fgColor="gray"
            bgColor="transparent"
          />
        ))}
      </FramerContainer>

      <FramerContainer
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        className="text-gray-300"
      >
        <Link
          href={urlForFile(resume) as string}
          target="_blank"
          className="flex items-center justify-center gap-2"
        >
          <Download className="size-5" />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Resume
          </p>
        </Link>
      </FramerContainer>
    </header>
  );
}

export default Header;
