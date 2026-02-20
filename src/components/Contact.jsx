import React, { useState } from "react";
import emailjs from "emailjs-com";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const CONTACT_TO_EMAIL = import.meta.env.VITE_CONTACT_TO_EMAIL || "shodhangowda07@gmail.com";

export default function Contact() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", text: "" });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", text: "" });

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setStatus({
        type: "error",
        text: "Email service is not configured. Please add EmailJS environment variables.",
      });
      return;
    }

    setIsSending(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          message: formData.message,
          to_email: CONTACT_TO_EMAIL,
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus({ type: "success", text: "Message transmitted successfully." });
      setFormData({ from_name: "", from_email: "", message: "" });
    } catch (error) {
      setStatus({
        type: "error",
        text: "Transmission failed. Please try again.",
      });
    } finally {
      setIsSending(false);
    }
  };

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

          <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-6 border-2 border-black">
            <div className="flex flex-col">
              <label className="font-mono font-bold mb-1 uppercase text-xs">Identity</label>
              <input
                type="text"
                name="from_name"
                placeholder="NAME / COMPANY"
                value={formData.from_name}
                onChange={handleChange}
                required
                className="bg-white border-2 border-black p-3 font-bold focus:outline-none focus:bg-neo-yellow focus:shadow-hard-sm transition-all cursor-hover"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-mono font-bold mb-1 uppercase text-xs">Coordinates</label>
              <input
                type="email"
                name="from_email"
                placeholder="EMAIL ADDRESS"
                value={formData.from_email}
                onChange={handleChange}
                required
                className="bg-white border-2 border-black p-3 font-bold focus:outline-none focus:bg-neo-yellow focus:shadow-hard-sm transition-all cursor-hover"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-mono font-bold mb-1 uppercase text-xs">Transmission</label>
              <textarea
                rows="4"
                name="message"
                placeholder="DETAILS..."
                value={formData.message}
                onChange={handleChange}
                required
                className="bg-white border-2 border-black p-3 font-bold focus:outline-none focus:bg-neo-yellow focus:shadow-hard-sm transition-all resize-none cursor-hover"
              />
            </div>
            {status.text ? (
              <p
                className={`font-mono text-sm ${
                  status.type === "success" ? "text-green-700" : "text-red-700"
                }`}
              >
                {status.text}
              </p>
            ) : null}
            <button
              type="submit"
              disabled={isSending}
              className="w-full bg-neo-blue text-white font-black text-xl py-4 border-2 border-black shadow-hard neo-button hover:bg-neo-black hover:translate-y-1 hover:shadow-none transition-all cursor-hover"
            >
              {isSending ? "TRANSMITTING..." : "TRANSMIT DATA"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
