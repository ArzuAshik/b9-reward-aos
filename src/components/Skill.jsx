import React from "react";
import skills from "../information/skills";
import SkillItem from "./SkillItem";

export default function Skill() {
  return (
    <section className="py-5 bg-gradient-to-r to-slate-100 from-fuchsia-300 min-h-svh relative">
      <h2
        className="text-4xl text-center py-6 mb-8"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <span className="border-b-4 border-fuchsia-400 inline-block px-4 py-2 font-satisfy cursor-pointer hover:px-8 duration-300">
          Skills
        </span>
      </h2>
      <div className="flex items-center justify-center pb-16 -space-x-6">
        <div className="space-y-24">
          {skills.slice(0, 1).map((props) => (
            <SkillItem key={props.title} {...props} />
          ))}
        </div>
        <div className="space-y-24">
          {skills.slice(1, 3).map((props) => (
            <SkillItem key={props.title} {...props} />
          ))}
        </div>
        <div className="space-y-24">
          {skills.slice(3, 6).map((props) => (
            <SkillItem key={props.title} {...props} />
          ))}
        </div>
        <div className="space-y-24">
          {skills.slice(6, 8).map((props) => (
            <SkillItem key={props.title} {...props} />
          ))}
        </div>
        <div className="space-y-24">
          {skills.slice(8, 9).map((props) => (
            <SkillItem key={props.title} {...props} />
          ))}
        </div>
      </div>
      <div
        id="anchor"
        className="size-4 bg-red-500 absolute right-0 bottom-1/4"
      ></div>
    </section>
  );
}
