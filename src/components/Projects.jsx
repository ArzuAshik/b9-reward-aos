import React from "react";
import projects from "../information/projects.js";
import ProjectItem from "./ProjectItem.jsx";
export default function Projects() {

  return (
    <section className="py-5 bg-gradient-to-r to-slate-100 from-fuchsia-300 min-h-svh">
      <h2 className="text-4xl text-center py-6 mb-8" data-aos="fade-down"
          data-aos-duration="1000">
        <span className="border-b-4 border-fuchsia-400 inline-block px-4 py-2 font-satisfy cursor-pointer hover:px-8 duration-300">
          Projects
        </span>
      </h2>
      <div className="container mx-auto">
        <div className="space-y-4">
          {projects.map((props, index) => (
            <ProjectItem key={props.title} {...props} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
