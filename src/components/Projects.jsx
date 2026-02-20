import React from "react";

const projects = [
    {
    title: "Cab Booking Management System Cpp",
    image: "/Assets/images/cabsystemPic.png",
    alt: "Cab Booking Management System - A C++ cab booking system for user/driver management, ride requests, driver assignment, and ride status tracking by Shodhan",
    desc: "A C++ cab booking management system for creating users/drivers, requesting rides, assigning drivers, and tracking ride status through completion.",
    tags: ["C++", "OOPS", "File Handling", "User Authentication"],
    href: "https://github.com/shodhan07/Cab-Booking-Management-System-Cpp",
    hover: "group-hover:text-neo-pink",
    mt: ""
  },
  {
    title: "Room Expense Tracker",
    image: "/Assets/images/roomexpensePic.png",
    alt: "Room Expense Tracker - A full-stack application that logs expenses, splits costs, and provides clear summaries for transparent money management by Shodhan",
    desc: "Helps users log daily expenses, split costs, and view clear summaries for easy and transparent money management.",
    tags: ["React", "Axios", "React Router", "MySQL"],
    href: "https://github.com/shodhan07/RoomExpenseTracker-Frontend",
    hover: "group-hover:text-neo-purple",
    mt: ""
  },
  {
    title: "XWeather",
    image: "/Assets/images/XweatherPic.png",
    alt: "XWeather - An automated app that fetches real-time weather data and posts daily updates on X by Shodhan",
    desc: "XWeather fetches real-time weather for a location and posts daily updates on X automatically.",
    tags: ["JavaScript", "Twitter API", "Weather API"],
    href: "https://github.com/shodhan07/XWeatherJs",
    hover: "group-hover:text-neo-blue",
    mt: "md:mt-20"
  },
  {
    title: "Portfolio",
    image: "/Assets/images/portfolioPic.png",
    alt: "Portfolio - React + Vite + Tailwind portfolio with neo-brutalist design, animations, live coding stats, and full responsiveness by Shodhan.",
    desc: "React + Vite + Tailwind portfolio with neo-brutalist design, animations, live coding stats, and full responsiveness.",
    tags: ["React", "TailwindCSS", "3D", "Animated"],
    href: "https://github.com/shodhan07/ShodhanPortfolio",
    hover: "group-hover:text-neo-orange",
    mt: "md:mt-20",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-neo-yellow border-t-4 border-black px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-6xl md:text-9xl font-black mb-16 uppercase tracking-tighter text-white drop-shadow-[4px_4px_0_rgba(0,0,0,1)]"
          style={{ WebkitTextStroke: "3px black" }}
        >
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <article key={project.title} className={`reveal group bg-white border-4 border-black p-4 shadow-hard ${project.mt}`}>
              <div className="bg-black border-2 border-black aspect-video relative overflow-hidden mb-6 group-hover:shadow-none transition-all">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  {project.titleHref ? (
                    <a href={project.titleHref}>
                      <h3 className={`text-4xl font-black uppercase mb-2 ${project.hover} transition-colors`}>
                        {project.title}
                      </h3>
                    </a>
                  ) : (
                    <h3 className={`text-4xl font-black uppercase mb-2 ${project.hover} transition-colors `}>
                      {/* ${project.hover} transition-colors glitch-hover */}
                      {project.title}
                    </h3>
                  )}
                  <p className="font-mono text-sm mb-4 max-w-xs">{project.desc}</p>
                  <div className="flex gap-2 font-mono text-xs font-bold flex-wrap">
                    {project.tags.map((tag) => (
                      <span key={tag} className="bg-neo-black text-white px-2 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={project.href}
                  className="w-12 h-12 border-2 border-black bg-neo-green flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-hover shadow-hard-sm"
                  target="_blank" rel="noopener noreferrer"
                >
                  <i className="ri-arrow-right-up-line text-2xl" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-24">
          <a
            href="https://github.com/shodhan07?tab=repositories"
            className="inline-block bg-neo-black text-white px-12 py-5 font-bold font-mono text-xl hover:bg-neo-white hover:text-black border-4 border-black transition-all shadow-hard hover:shadow-none cursor-hover"
            target="_blank" rel="noopener noreferrer"
          >
            VIEW ALL REPOS ON GITHUB
          </a>
        </div>
      </div>
    </section>
  );
}
