import React from "react";

const reports = [
  ["neo-green", "001.log", "Udemy", "Data Structures and Algorithms Certificate"],
  ["neo-blue", "002.log", "Unstop", "Certification of Participation in Tata Imagination Challenge"],
  ["neo-pink", "003.log", "Unstop", "Certification of Participation in Level 1: E-Commerce"],
  ["neo-purple", "004.log", "Service Now", "ServiceNow Certified App Developer"],
  [
    "neo-orange",
    "005.log",
    "Nintex",
    "Nintex K2 Automation IT Developer"
  ],
  ["neo-green", "001.log", "Udemy", "Data Structures and Algorithms Certificate"],
  ["neo-blue", "002.log", "Unstop", "Certification of Participation in Tata Imagination Challenge"],
  ["neo-pink", "003.log", "Unstop", "Certification of Participation in Level 1: E-Commerce"],
  ["neo-purple", "004.log", "Service Now", "ServiceNow Certified App Developer"],
  [
    "neo-orange",
    "005.log",
    "Nintex",
    "Nintex K2 Automation IT Developer."
  ]
];

const colorClasses = {
  "neo-green": {
    hover: "hover:border-neo-green/50",
    bar: "bg-neo-green",
    text: "text-neo-green",
    stars: "text-neo-green/60"
  },
  "neo-blue": {
    hover: "hover:border-neo-blue/50",
    bar: "bg-neo-blue",
    text: "text-neo-blue",
    stars: "text-neo-blue/60"
  },
  "neo-pink": {
    hover: "hover:border-neo-pink/50",
    bar: "bg-neo-pink",
    text: "text-neo-pink",
    stars: "text-neo-pink/60"
  },
  "neo-purple": {
    hover: "hover:border-neo-purple/50",
    bar: "bg-neo-purple",
    text: "text-neo-purple",
    stars: "text-neo-purple/60"
  },
  "neo-orange": {
    hover: "hover:border-neo-orange/50",
    bar: "bg-neo-orange",
    text: "text-neo-orange",
    stars: "text-neo-orange/60"
  }
};

export default function Reports() {
  return (
    <section id="reports" className="py-24 bg-neo-black border-t-4 border-black overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-2 mb-16 bg-white/5 border-2 border-white/10 p-4 inline-flex shadow-hard shadow-neo-blue/20">
          <div className="flex gap-2">
            <div className="h-3 w-3 bg-red-500 rounded-full border border-black" />
            <div className="h-3 w-3 bg-yellow-500 rounded-full border border-black" />
            <div className="h-3 w-3 bg-green-500 rounded-full border border-black" />
          </div>
          <h2 className="font-mono text-white text-xl font-bold ml-4 tracking-tighter">Achivements.txt</h2>
          <div className="ml-8 px-2 bg-neo-blue text-black text-[10px] font-black uppercase">LIVE_FEED</div>
        </div>
      </div>

      <div className="marquee-container group cursor-hover">
        <div className="marquee-content flex gap-8 py-12 px-4 select-none">
          {reports.map(([color, file, from, quote], idx) => (
            <div
              key={`${file}-${idx}`}
              className={`flex-shrink-0 w-[450px] bg-neo-black border-4 border-white/10 p-8 shadow-hard ${colorClasses[color].hover} hover:-translate-y-2 transition-all duration-500 relative group/card overflow-hidden text-left whitespace-normal`}
            >
              <div className={`absolute top-0 left-0 w-full h-1 ${colorClasses[color].bar}`} />
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-white/5 rotate-45" />
              <div className="flex justify-between items-start mb-6">
                <div className={`font-mono ${colorClasses[color].text} text-xs font-bold tracking-widest uppercase`}>
                  {file}
                </div>
                <div className="text-[10px] font-mono text-gray-500">2025.txt</div>
              </div>
              <div className="font-mono text-gray-400 text-[10px] mb-2 uppercase tracking-tight">FROM: {from}</div>
              <p className="font-bold text-xl leading-snug mb-6 text-white/90">{quote}</p>
              <div className={`flex ${colorClasses[color].stars} gap-1 text-lg`}>
                <i className="ri-star-fill" />
                <i className="ri-star-fill" />
                <i className="ri-star-fill" />
                <i className="ri-star-fill" />
                <i className="ri-star-fill" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
