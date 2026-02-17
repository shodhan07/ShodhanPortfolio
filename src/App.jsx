import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import CodingStats from "./components/CodingStats";
import Projects from "./components/Projects";
import Reports from "./components/Reports";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import StatusMarquee from "./components/StatusMarquee";

export default function App() {
  const [stats, setStats] = useState({
    repos: "--",
    followers: "--",
    joined: "--",
    contributions: "--"
  });

  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const updateHoverElements = () => document.querySelectorAll(".cursor-hover, a, button, input, textarea");
    const onMove = (e) => {
      if (!cursor) return;
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      cursor.style.transform = "translate(-50%, -50%)";
    };

    document.addEventListener("mousemove", onMove);

    const enters = [];
    const leaves = [];
    const els = updateHoverElements();
    els.forEach((el) => {
      const onEnter = () => {
        if (!cursor) return;
        cursor.style.width = "60px";
        cursor.style.height = "60px";
        cursor.style.backgroundColor = "#FBFF48";
        cursor.style.mixBlendMode = "normal";
        cursor.style.border = "2px solid black";
      };
      const onLeave = () => {
        if (!cursor) return;
        cursor.style.width = "24px";
        cursor.style.height = "24px";
        cursor.style.backgroundColor = "#fff";
        cursor.style.mixBlendMode = "difference";
        cursor.style.border = "none";
      };
      enters.push({ el, fn: onEnter });
      leaves.push({ el, fn: onLeave });
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      enters.forEach(({ el, fn }) => el.removeEventListener("mouseenter", fn));
      leaves.forEach(({ el, fn }) => el.removeEventListener("mouseleave", fn));
    };
  }, []);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const response = await fetch("https://api.github.com/users/shodhan07", {
          headers: { Accept: "application/vnd.github.v3+json" }
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        const date = data.created_at
          ? new Date(data.created_at).toLocaleDateString("en-US", { year: "numeric", month: "short" })
          : "--";
        const contributions = `${(data.public_repos * 20) + (data.followers * 5)}+`;
        setStats({
          repos: data.public_repos || "0",
          followers: data.followers || "0",
          joined: date,
          contributions
        });
      } catch {
        setStats({
          repos: "ERR",
          followers: "ERR",
          joined: "N/A",
          contributions: "API Error"
        });
      }
    };
    fetchGitHubStats();
  }, []);

  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("active");
        });
      },
      { threshold: 0.1 }
    );
    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      const bar = document.getElementById("progressBar");
      if (bar) bar.style.width = `${scrolled}%`;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="text-neo-black font-display antialiased selection:bg-neo-black selection:text-neo-yellow">
      <div id="cursor" className="w-6 h-6 bg-white rounded-full border-2 border-black hidden lg:block" />
      <div
        className="fixed top-0 left-0 h-2 bg-neo-green z-[60] border-b-2 border-black"
        id="progressBar"
        style={{ width: "0%" }}
      />
      <Navbar />
      <Hero />
      <StatusMarquee />
      <About />
      <Skills />
      <Experience />
      <CodingStats stats={stats} />
      <Projects />
      <Reports />
      <Contact />
      <Footer />
    </div>
  );
}
