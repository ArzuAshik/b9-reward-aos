import React from "react";
import educationAndExperience from "../information/educationAndExperience";
import ExperienceItem from "./ExperienceItem";

export default function Experience() {
  const experience = educationAndExperience.experience;
  console.log("Experience ~ experience:", experience);
  const a = 1;

  return (
    <section className="bg-gradient-to-r from-[#766dff] to-[#88f3ff] min-h-svh py-6 relative">
      <div className="container mx-auto">
        <h2
          className="text-center text-3xl py-6 text-fuchsia-600"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <span className="border-b-4 border-white inline-block px-4 py-2 font-satisfy cursor-pointer hover:px-8 duration-300">
            Experience
          </span>
        </h2>
        <div className="flex flex-col items-center">
          {experience.map((xp, index, arr) => (
            <ExperienceItem
              key={xp.company}
              {...xp}
              index={index}
              length={arr.length}
            />
          ))}
        </div>
        <div
          id="xp-anchor"
          className="size-2 bg-red-500 absolute right-0 bottom-[30%]"
        ></div>
      </div>
    </section>
  );
}
