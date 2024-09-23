"use client";

import { urlFor } from "@/sanity/lib/image";
import { PageInfo } from "@/typings";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { BackgroundCircles } from "./background-circle";
import { FramerContainer } from "./framer-container";

type Props = {
  pageInfo: PageInfo;
};
function Hero({ pageInfo }: Props) {
  const [text] = useTypewriter({
    words: pageInfo.heroMessage,
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <FramerContainer
        initial={{
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="relative size-36"
      >
        <Image
          src={urlFor(pageInfo.heroImage).url()}
          alt="image"
          fill
          className="object-cover rounded-full"
        />
      </FramerContainer>
      <div className="z-20">
        <motion.h2
          initial={{
            x: -200,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="uppercase text-sm text-gray-500 pb-2 tracking-[15px]"
        >
          {pageInfo.role}
        </motion.h2>
        <motion.h1
          initial={{
            scale: 0.7,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
          className="text-2xl md:text-3xl lg:text-4xl font-semibold px-10"
        >
          <span>{text}</span>
          <Cursor cursorColor="#cc5223" />
        </motion.h1>
        <FramerContainer
          initial={{
            x: 200,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="pt-2"
        >
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#contact">
            <button className="heroButton">Contact</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </FramerContainer>
      </div>
    </div>
  );
}

export default Hero;
