import React from "react";

export default function SkillItem({ title, icon }) {
  return (
    <div className="shadow-lg bg-gradient-to-r to-slate-100 from-fuchsia-100 rounded-2xl p-1 rotate-45 size-48 flex items-center justify-center">
      <div className="-rotate-45 size-48 origin-center  flex flex-col items-center justify-center p-12 relative">
        <img className="object-cover" src={icon} alt={title} />
        <h3 className="absolute bottom-2">{title}</h3>
      </div>
    </div>
  );
}
