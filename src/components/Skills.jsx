import React from "react";

const skills = [
  ["LANGUAGE", "C++", "hover:bg-white"],
  ["LANGUAGE", "C", "hover:bg-white"],
  ["LANGUAGE", "JavaScript", "hover:bg-neo-blue"],
  ["LANGUAGE", "SQL", "hover:bg-neo-yellow"],
  ["LIBRARY", "REACT", "hover:bg-neo-purple"],
  ["BACKEND", "NODE.JS", "hover:bg-neo-green"],
  ["STYLING", "TAILWIND", "hover:bg-neo-pink"],
  ["DATA", "MySQL", "hover:bg-neo-purple"],
  ["DATA", "MS SQL SERVER", "hover:bg-neo-pink"],
  ["CORE", "HTML5", "hover:bg-neo-orange"],
  ["VERSION", "GIT", "hover:bg-white"],
  ["QUERY", "REST API", "hover:bg-white"],
  ["OPS", "GitHub", "hover:bg-neo-blue"],
  ["AUTOMATION", "ServiceNow", "hover:bg-neo-orange"],
  ["AUTOMATION", "Nintex K2", "hover:bg-neo-yellow"],
  ["AUTOMATION", "COPILOT STUDIO", "hover:bg-neo-pink"]  
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-neo-black text-neo-white border-y-4 border-black relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />

      <div className="max-w-[1400px] mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b-4 border-white pb-4">
          <h2 className="text-6xl md:text-8xl font-black uppercase text-white tracking-tighter">
            TECH<span className="text-neo-green">_STACK</span>
          </h2>
          <div className="flex items-center gap-2 mb-2 md:mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
            <p className="font-mono text-neo-green text-sm font-bold">/// SYSTEM_OPTIMIZED</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start">
          {skills.map(([type, name, hover], idx) => (
            <div
              key={`${name}-${idx}`}
              className={`group w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-[12.5%] h-24 border-r-2 border-b-2 border-white/20 bg-neo-black ${hover} transition-all duration-0 hover:z-10 relative cursor-hover flex flex-col items-center justify-center p-2`}
            >
              <div className="text-neo-green group-hover:text-black font-mono text-xs mb-1 opacity-50">{`>_ ${type}`}</div>
              <div className="text-white group-hover:text-black font-black font-display text-xl uppercase">{name}</div>
            </div>
          ))}
        </div>

        <div className="border-t-4 border-white mt-8 pt-4 flex justify-between font-mono text-xs text-gray-500">
          <span>TOTAL_NODES: 16</span>
          <span>MEMORY_USAGE: 128MB</span>
        </div>
      </div>
    </section>
  );
}
