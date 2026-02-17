import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 max-w-5xl mx-auto">
      <div className="bg-white border-4 border-black shadow-hard-xl p-8 md:p-12 relative reveal mt-12">
        <div className="absolute -top-10 -left-6 bg-neo-yellow border-4 border-black px-6 py-2 shadow-hard rotate-[-5deg]">
          <span className="font-black text-2xl">CONTACT ME</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-6xl font-black uppercase mb-6 leading-[0.85]">
              Let&apos;s
              <br />
              Talk
              <br />
              Code.
            </h2>
            <p className="font-mono text-lg mb-8 text-gray-600">
              I am currently available for full-time opportunities.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-neo-black text-white flex items-center justify-center border-2 border-black">
                  <i className="ri-mail-line text-xl" />
                </div>
                <a href="mailto:shodhangowda07@gmail.com" className="text-xl font-bold hover:bg-neo-blue cursor-hover">
                  shodhangowda07@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-neo-black text-white flex items-center justify-center border-2 border-black">
                  <i className="ri-map-pin-line text-xl" />
                </div>
                <span className="text-xl font-bold">Bengaluru</span>
              </div>
            </div>
          </div>

          <form className="space-y-6 bg-gray-50 p-6 border-2 border-black">
            <div className="flex flex-col">
              <label className="font-mono font-bold mb-1 uppercase text-xs">Identity</label>
              <input
                type="text"
                placeholder="NAME / COMPANY"
                className="bg-white border-2 border-black p-3 font-bold focus:outline-none focus:bg-neo-yellow focus:shadow-hard-sm transition-all cursor-hover"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-mono font-bold mb-1 uppercase text-xs">Coordinates</label>
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="bg-white border-2 border-black p-3 font-bold focus:outline-none focus:bg-neo-yellow focus:shadow-hard-sm transition-all cursor-hover"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-mono font-bold mb-1 uppercase text-xs">Transmission</label>
              <textarea
                rows="4"
                placeholder="DETAILS..."
                className="bg-white border-2 border-black p-3 font-bold focus:outline-none focus:bg-neo-yellow focus:shadow-hard-sm transition-all resize-none cursor-hover"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-neo-blue text-white font-black text-xl py-4 border-2 border-black shadow-hard neo-button hover:bg-neo-black hover:translate-y-1 hover:shadow-none transition-all cursor-hover"
            >
              TRANSMIT DATA
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
