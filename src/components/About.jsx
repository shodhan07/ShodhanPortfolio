import React from "react";

export default function About() {
  return (
    <section id="about" className="py-24 px-4 max-w-7xl mx-auto border-x-4 border-black bg-white my-12 shadow-hard-lg">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4 reveal">
          <div className="aspect-square bg-gray-200 border-4 border-black relative shadow-hard overflow-hidden group">
            <img
              src="/Assets/images/Ppic.jpeg"
              alt="Shodhan"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <span className="absolute top-2 left-2 bg-neo-red text-white px-2 font-mono text-xs border border-black z-10">
              AVATAR.JPG
            </span>
          </div>
        </div>
        <div className="md:col-span-8 flex flex-col justify-center reveal">
          <h2 className="text-6xl font-black uppercase mb-6">Who am I?</h2>
          <p className="font-mono text-xl leading-relaxed mb-6">
            I’m Shodhan, a C++ developer focused on performance, control, and bringing {" "}
            <span className="bg-neo-yellow px-1 border border-black">personality</span> into code.
          </p>
          <p className="font-mono text-lg mb-8 text-gray-600 border-l-4 border-neo-purple pl-4">
            {"> Focused on C++, Data Structures & Algorithms, React, and MySQL."}
            <br />
            {"> Driven by clean logic, performance, and well-structured solutions."}
            <br />
            {"> Experienced in building reliable, real-world applications."}
          </p>

          <div className="flex gap-4">
            <div className="bg-neo-black text-white px-4 py-2 font-mono text-sm border-2 border-transparent">
              📍 LOCATION: BENGALURU
            </div>
            <div className="bg-neo-green text-black px-4 py-2 font-mono text-sm border-2 border-black">
              🟢 STATUS: AVAILABLE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
