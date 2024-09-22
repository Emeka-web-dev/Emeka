import { urlFor } from "@/sanity/lib/image";
import { Image as SkillImage } from "@/typings";
import Image from "next/image";
import { FramerContainer } from "./framer-container";

type Props = {
  image: SkillImage;
  number: number;
  total: number;
};
export const UserSkill = ({ image, number, total }: Props) => {
  const isNumber = Math.ceil(total / 2) > number;
  return (
    <>
      <FramerContainer
        initial={{
          opacity: 0,
          x: isNumber ? -200 : 200,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="group hidden md:flex relative cursor-pointer hover:grayscale-0 grayscale"
      >
        <div className="relative w-16 md:w-20 h-16 md:h-20 transition duration-300 ease-in-out filter">
          <Image
            src={urlFor(image).url()}
            alt="image"
            fill
            className="object-contain"
          />
        </div>
      </FramerContainer>
      <FramerContainer
        initial={{
          opacity: 0,
        }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="group relative flex md:hidden cursor-pointer grayscale hover:grayscale-0"
      >
        <div className="relative w-16 md:w-20 h-16 md:h-20 transition duration-300 ease-in-out filter">
          <Image
            src={urlFor(image).url()}
            alt="image"
            fill
            className="object-contain"
          />
        </div>
      </FramerContainer>
    </>
  );
};
