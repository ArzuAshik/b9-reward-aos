import React from "react";

export default function ExperienceItem({
  company,
  duration,
  title,
  index,
  length,
}) {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration={(length - index) * 400}
      data-aos-delay={((length - index) * 300) - 300}
      data-aos-anchor="#xp-anchor"
      className="relative grid grid-cols-2 gap-16 p-8 text-white"
    >
      <div className="flex items-center justify-end">
        <h3 className="font-satisfy">{duration}</h3>
      </div>
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">{company}</h2>
        <h4>{title}</h4>
      </div>
      <div className="w-1 h-full absolute bg-[rgba(255,255,255,0.5)] left-1/2 ">
        <div className="size-3 bg-white left-1/2 absolute top-1/2 rounded-full -translate-x-1/2 ring-4"></div>
      </div>
    </div>
  );
}
