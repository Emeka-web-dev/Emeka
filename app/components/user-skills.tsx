"use client";
import { Skill } from "@/typings";
import { FramerContainer } from "./framer-container";
import { UserSkill } from "./skill";

type Props = {
  skills: Skill[];
};
export const UserSkills = ({ skills }: Props) => {
  return (
    <FramerContainer className="h-screen flex flex-col text-center md:text-left max-w-[2000px] lg:px-10 items-center ">
      <h3 className="uppercase tracking-[10px] text-xl text-gray-500 pt-16">
        skill
      </h3>

      <div className="w-full h-[80%]  flex items-center justify-center">
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <UserSkill
              number={index}
              total={skills.length}
              key={skill.title}
              image={skill.image}
            />
          ))}
        </div>
      </div>
    </FramerContainer>
  );
};
