import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import VerticalScroll from "./components/VerticalScroll";
import "./App.css";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // scroll event to toggle header background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // toggle dark class on document
  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  // IntersectionObserver for active section
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section[id]"));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#F9F8F6] via-white to-[#F9F8F6] relative dark:from-[#201f1f] dark:via-[#353433] dark:to-[#3B3735] scroll-smooth">
      <Navbar
        scrolled={scrolled}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeSection={activeSection}
      />

      <VerticalScroll />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <div className="mt-7 bg-white py-1 flex justify-center items-center dark:bg-[#7A7571]">
        <div className="text-center text-gray-700 dark:text-[#EBE8E3]">
          &copy; 2026 Zahrin Savana. All Rights Reserved.
        </div>
      </div>

      {/* Scroll to top */}
      <div className="scroll-smooth w-10 h-10 bg-[#F3D7CA] rounded-full flex fixed bottom-5 right-5 -translate-x-1/2 cursor-pointer">
        <a href="#home" className="text-xl m-auto">
          ↑
        </a>
      </div>
    </div>
  );
}

export default App;

