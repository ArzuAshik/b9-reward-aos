import React from "react";

export default function SkillItem({
  title,
  icon,
  animation,
  delay,
  duration,
  easing,
}) {
  return (
    <div
      data-aos={animation}
      data-aos-delay={delay}
      data-aos-duration={duration}
      data-aos-anchor="#anchor"
      data-aos-easing="ease-in"
    >
      <div className="shadow-lg bg-gradient-to-r to-slate-100 from-fuchsia-100 rounded-2xl p-1  size-48 flex items-center justify-center rotate-45">
        <div className=" size-48 -rotate-45  flex flex-col items-center justify-center p-12 relative">
          <img className="object-cover" src={icon} alt={title} />
          <h3 className="absolute bottom-2">{title}</h3>
        </div>
      </div>
    </div>
  );
}
