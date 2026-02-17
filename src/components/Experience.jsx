import React from "react";

const items = [
  {
    color: "bg-neo-yellow",
    role: "Associate Analyst",
    date: "OCT 2025 - PRESENT",
    company: "@ Merck India",
    companyColor: "text-neo-yellow",
    points: [
      "Worked on Agent creation in Copilot Studio",
      "Worked with REST APIs, JavaScript, React HTML, CSS",
      "Developed ServiceNow catalog items and scripts"
    ]
  },
  {
    color: "bg-neo-red",
    role: "Intern",
    date: "OCT 2024 - OCT 2025",
    company: "@ Merck India",
    companyColor: "text-neo-red",
    points: [
      "Worked on K2 workflows & automation",
      "Developed ServiceNow catalog items and scripts",
      "Worked with REST APIs, JavaScript, HTML, CSS"
    ]
  },
  {
    color: "bg-neo-green",
    role: "Web Development Intern",
    date: "Sep 2023 - Nov 2023",
    company: "@ Coding Raja Technologies",
    companyColor: "text-neo-green",
    points: [
      "Built Resume Builder & Music Player projects",
      "Worked with HTML, CSS, JS",
      "Learned real-world project workflows"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 max-w-7xl mx-auto">
      <h2 className="text-5xl md:text-8xl font-black uppercase mb-12 tracking-tighter text-center">
        Experience<span className="text-neo-red">_Log</span>
      </h2>

      <div className="relative border-l-4 border-black ml-4 md:ml-10 space-y-12">
        {items.map((item) => (
          <div key={item.role} className="reveal relative pl-8 md:pl-16">
            <div className={`absolute -left-[14px] top-2 w-6 h-6 ${item.color} border-4 border-black`} />
            <div className="bg-white border-4 border-black p-6 shadow-hard hover:shadow-hard-xl transition-all">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b-2 border-dashed border-gray-300 pb-4 mb-4">
                <h3 className="text-3xl font-black uppercase">{item.role}</h3>
                <span className="font-mono font-bold bg-neo-black text-white px-2 py-1">{item.date}</span>
              </div>
              <p className={`font-mono text-xl mb-2 ${item.companyColor} font-bold`}>{item.company}</p>
              <ul className="list-disc list-inside font-mono text-gray-700 space-y-1">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
