import React from "react";
import educationAndExperience from "../information/educationAndExperience";
import ExperienceItem from "./ExperienceItem";

export default function Experience() {
  const experience = educationAndExperience.experience;
  console.log("Experience ~ experience:", experience);

  return (
    <section className="bg-gradient-to-r from-[#766dff] to-[#88f3ff] min-h-svh py-6">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl py-6 text-fuchsia-600">
          <span className="border-b-4 border-white inline-block px-4 py-2 font-satisfy cursor-pointer hover:px-8 duration-300">
            Experience
          </span>
        </h2>
        <div className="flex flex-col items-center">
          {experience.map((xp) => (
            <ExperienceItem key={xp.company} {...xp} />
          ))}
        </div>
      </div>
    </section>
  );
}
