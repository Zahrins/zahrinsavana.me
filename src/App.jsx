import React, { useState, useEffect } from "react";
import zahrinpink from "./img/zahrinpink.jpg";
import animasizahrin from "./img/animasi_zahrin2-removebg-preview (1).png";
import htmlLogo from "./img/html.png";
import cssLogo from "./img/css-3.png";
import jsLogo from "./img/js.png";
import tsLogo from "./img/typescript.png";
import reactLogo from "./img/physics.png";
import figmaLogo from "./img/figma.png";
import tailwindLogo from "./img/tailwindcss-icon.svg";

import walkingTracker1 from "./img/walking-tracker-1.png";
import walkingTracker2 from "./img/walking-tracker-2.png";
import walkingTracker3 from "./img/walking-tracker-3.png";

import counter3 from "./img/counter-3.png";

import library1 from "./img/library1.png";
import library2 from "./img/library2.png";
import library3 from "./img/library3.png";
import library4 from "./img/library4.png";

import fleurskin1 from "./img/fleurskin1.png";
import fleurskin3 from "./img/fleurskin3.png";
import fleurskin4 from "./img/fleurskin4.png";
import fleurskin5 from "./img/fleurskin5.png";
import fleurskin6 from "./img/fleurskin6.png";
import fleurskin7 from "./img/fleurskin7.png";
import fleurskin8 from "./img/fleurskin8.png";

import pegawaiweb1 from "./img/pegawaiweb1.png";
import pegawaiweb2 from "./img/pegawaiweb2.png";
import pegawaiweb3 from "./img/pegawaiweb3.png";
import pegawaiweb4 from "./img/pegawaiweb4.png";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  const skills = [
    { name: "HTML", logo: htmlLogo },
    { name: "CSS", logo: cssLogo },
    { name: "JavaScript", logo: jsLogo },
    { name: "Typescript", logo: tsLogo },
    { name: "React", logo: reactLogo },
    { name: "Figma", logo: figmaLogo },
    { name: "Tailwind", logo: tailwindLogo },
  ];

  const projects = [
    {
      title: "Walking Tracker Web App",
      desc: "Simple web application to monitor daily step counts for a week. Built using HTML, CSS, and Chart.js to display data visualizations in the form of a responsive line chart.",
      img: [walkingTracker1],
      images: [walkingTracker1, walkingTracker2, walkingTracker3],
      tech: ["HTML", "CSS", "Chart.js", "Javascript"],
    },
    {
      title: "Tap Battle Counter (React Mini Game)",
      desc: "A simple React-based mini-game where two images compete against each other. The user must tap/click the images as quickly as possible to increase their score. The first one to reach the highest score wins.",
      img: [counter3],
      images: [counter3],
      tech: ["React", "Javascript", "CSS"],
    },
    {
      title: "Library Management System (Team Project)",
      desc: "A web-based library management system built with PHP, Tailwind CSS, and MySQL. The system provides separate roles for Admin and User. Admin can perform full CRUD operations (Create, Read, Update, Delete) on books, manage data, and control the library collection. Users can browse, search, and view available books in the system. The application implements authentication, role-based access control, and database integration for dynamic data management.",
      img: [library1],
      images: [library1, library2, library3, library4],
      tech: ["PHP", "Tailwind CSS", "MySQL", "Javascript"],
    },
    {
      title: "Fleur Skin Care Management System",
      desc: "A web-based skin care management system built with PHP, Tailwind CSS, and MySQL. The application allows users to schedule daily, weekly, or monthly skincare routines such as salon visits, masking sessions, and treatments. It also includes a product library to manage skincare products and a beauty notes feature to record personal skincare experiences. The system implements CRUD functionality for schedules, products, and notes with dynamic database integration.",
      img: [fleurskin1],
      images: [
        fleurskin1,
        fleurskin3,
        fleurskin4,
        fleurskin5,
        fleurskin6,
        fleurskin7,
        fleurskin8,
      ],
      tech: ["PHP", "Tailwind CSS", "MySQL", "Javascript"],
    },
    {
      title: "Employee Management Web App",
      desc: "A full-featured employee management system built with Laravel, Tailwind CSS, and MySQL. The application supports full CRUD operations (Create, Read, Update, Delete) for employee records and includes secure file upload functionality for storing documents such as ID cards (KTP), family cards (KK), and other supporting files. The system implements server-side validation, database integration, and organized file storage management.",
      img: [pegawaiweb1],
      images: [pegawaiweb1, pegawaiweb2, pegawaiweb3, pegawaiweb4],
      tech: ["Laravel", "Tailwind CSS", "MySQL", "Javascript"],
    },
  ];

  return (
    <div className="bg-gradient-to-b from-neutral-300 via-white to-neutral-300 relative dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 scroll-smooth">
      {/* Header */}
      <header
        className={`navbar-fixed py-4 px-10 flex justify-between items-center z-50 transition-colors ${
          scrolled
            ? "bg-slate-100 shadow-md dark:bg-slate-900"
            : "bg-transparent"
        }`}
      >
        <nav className="fixed top-0 left-0 w-full bg-white bg-transparent backdrop-blur-md dark:bg-slate-900 shadow-md z-50">
          <div className="max-w-6xl mx-auto flex items-center justify-between lg:px-6 px-2 gap-2 py-4">
            
            <a className="hidden lg:block text-slate-700 text-xl font-medium hover:text-slate-800 dark:text-slate-100 capitalize">
              Zahrin
            </a>

            <ul className="flex lg:space-x-12 space-x-2 items-center absolute left-1/2 -translate-x-1/2">
              {["home", "about", "skill", "project", "contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="text-slate-600 hover:text-slate-900 transform transition-all hover:border-b-2 hover:border-b-slate-600 dark:text-slate-100 capitalize"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center">
              <span className="hidden lg:block text-sm text-slate-500 mr-2">
                Light
              </span>
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="hidden"
                  onChange={() => setDarkMode(!darkMode)}
                />
                <div className="w-9 h-5 bg-slate-500 rounded-full flex items-center p-1 relative">
                  <div
                    className={`w-4 h-4 bg-white rounded-full transition-transform ${
                      darkMode ? "translate-x-4" : "translate-x-0"
                    }`}
                  ></div>
                </div>
              </label>
              <span className="hidden lg:block text-sm text-slate-500 ml-2">
                Dark
              </span>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="lg:pt-36 pt-5 lg:mx-40 mt-10 lg:mt-0">
        <div className="container flex px-10">
          <div className="flex-wrap w-full gap-10 lg:flex">
            <div className="lg:w-1/2">
              <h1 className="text-base font-semibold text-slate-500 md:text-xl lg:text-2xl dark:text-slate-500">
                Helloooo, I'm
                <span className="block mt-4 font-bold text-slate-700 text-3xl lg:text-5xl dark:text-slate-200">
                  Zahrin Savana
                </span>
              </h1>
              <h2 className="font-medium text-slate-400 lg:text-xl text-lg mb-5">
                Student of{" "}
                <span className="text-slate-600">frontend developer</span>
              </h2>
              <p className="leading-relaxed dark:text-slate-300">
                Welcome to my personal corner of the web – where creativity
                meets passion. Take a look around and enjoy the journey!!
              </p>
              <div className="flex flex-row gap-4 mt-5">
                <div className="bg-slate-300 px-4 py-2 rounded-3xl w-max mt-5 text-sm">
                  Web
                </div>
                <div className="bg-slate-300 px-4 py-2 rounded-3xl w-max mt-5 text-sm">
                  UI/UX
                </div>
              </div>
              <div className="bg-[#F3D7CA] border border-neutral-400 hover:bg-[#f1cbb9] transform transition-colors cursor-pointer px-6 py-2 rounded-3xl w-max mt-5 text-sm">
                View My Work
              </div>
            </div>
            <div className="relative mt-10 lg:m-5 lg:bottom-0 lg:left-10 lg:w-2/5">
              <img
                src={animasizahrin}
                alt="Zahrin"
                className="mx-auto rounded-full w-100 animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="pt-20 mx-10 lg:mx-20">
        <h5 className="text-2xl text-slate-700 mb-5 dark:text-slate-200">
          ------- About
        </h5>
        <div className="w-full lg:flex justify-center items-center">
          <img
            src={zahrinpink}
            alt="hijab girl"
            className="hidden lg:flex lg:mr-10 lg:w-64 lg:h-full lg:rounded-lg"
          />
          <div>
            <h3 className="dark:text-slate-200 text-xl">Who I Am</h3>
            <div className="bg-slate-300 px-4 py-2 rounded-3xl w-max mt-3 text-sm">
              Web Developer
            </div>
            <p className="leading-relaxed font-medium dark:text-slate-300 mt-5">
              I am a 19-year-old Informatics Engineering student with a strong
              passion for technology, especially in web development.
            </p>
            <p className="leading-relaxed dark:text-slate-300 mt-5">
              Since starting my journey in coding, I have created various
              projects – from simple to complex – that have helped me gain a
              deeper understanding of design, functionality, and user
              experience. This website serves as a platform to showcase my work,
              share experiences, and continue learning about the digital world.
              If you're interested in collaborating or just want to chat, feel
              free to reach out! Check out some of the projects I've worked on
              in the portfolio section.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skill" className="pt-20 mx-10 lg:mx-20 mb-20">
        <h5 className="text-2xl text-slate-700 mb-5 dark:text-slate-200">
          ------- Skills
        </h5>
        <div className="flex flex-wrap justify-center items-center gap-3">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex border border-slate-400 cursor-pointer rounded-lg w-32 px-3 py-2 hover:bg-slate-200 dark:hover:bg-slate-500"
            >
              <img src={skill.logo} className="w-5 mr-2" />
              <h5 className="font-semibold text-xs m-auto dark:text-slate-300">
                {skill.name}
              </h5>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="project" className="pt-20 mx-10 lg:mx-20">
        <h5 className="text-2xl text-slate-700 mb-5 dark:text-slate-200">
          ------- Past Project Experience
        </h5>
        <p className="text-slate-500 mb-5">
          Explore the projects I've worked on so far
        </p>
        <div className="container mx-auto px-6 flex flex-wrap gap-5">
          {projects.map((project) => (
            <div
              key={project.title}
              onClick={() => setSelectedProject(project)}
              className="group rounded-2xl shadow-md overflow-hidden mb-10 w-80 
             bg-white dark:bg-slate-800
             transform transition-all duration-500 ease-out
             hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02] 
             cursor-pointer"
            >
              {project.img ? (
                <img src={project.img} className="w-full" />
              ) : (
                <div className="w-full transition-transform duration-700 group-hover:scale-110">
                  No Image
                </div>
              )}
              <div className="px-6 py-4">
                <div className="font-semibold leading-relaxed text-xl mb-2 text-slate-700 dark:text-slate-200">
                  {project.title}
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-3">
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-5">
          <div className="bg-white dark:bg-slate-800 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-8 relative shadow-2xl transform scale-95 animate-fadeIn">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-xl font-bold text-slate-600 dark:text-slate-200"
            >
              ✕
            </button>

            {/* Title */}
            <h2 className="text-2xl font-bold mb-4 dark:text-slate-200">
              {selectedProject.title}
            </h2>

            {/* Description */}
            <p className="mb-6 text-slate-600 dark:text-slate-300">
              {selectedProject.desc}
            </p>

            {/* Tech Stack */}
            <div className="mb-6">
              <h4 className="font-semibold mb-2 dark:text-slate-200">
                Technologies Used:
              </h4>
              <div className="flex gap-2 flex-wrap">
                {selectedProject.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-slate-200 dark:bg-slate-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedProject.images.map((img, index) =>
                img ? (
                  <img key={index} src={img} className="rounded-lg" />
                ) : (
                  <div
                    key={index}
                    className="h-40 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center text-slate-400"
                  >
                    Screenshot
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      )}

      {/* Contact */}
      <section id="contact" className="pt-20 mx-10 lg:mx-20 mb-10">
        <h5 className="text-2xl text-slate-700 mb-5 dark:text-slate-200">
          ------- Get in Touch
        </h5>
        <p className="mb-5 dark:text-slate-300">
          Let's connect and collaborate! Feel free to reach out through any of
          the platforms below.
        </p>
        <div className="flex gap-3 flex-wrap">
          <a
            href="https://www.instagram.com/zahrinsavanaa/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex border border-slate-800 p-2 rounded-lg hover:bg-slate-300 dark:text-slate-300 dark:hover:bg-slate-500 items-center"
          >
            <span className="w-5 mr-2 inline-block">📸</span>Instagram
          </a>
          <a
            href="https://x.com/zahrinnaa/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex border border-slate-800 p-2 rounded-lg hover:bg-slate-300 dark:text-slate-300 dark:hover:bg-slate-500 items-center"
          >
            <span className="w-5 mr-2 inline-block">🐦</span>Twitter
          </a>
          <a
            href="https://github.com/Zahrins"
            target="_blank"
            rel="noopener noreferrer"
            className="flex border border-slate-800 p-2 rounded-lg hover:bg-slate-300 dark:text-slate-300 dark:hover:bg-slate-500 items-center"
          >
            <span className="w-5 mr-2 inline-block">💻</span>GitHub
          </a>
        </div>
      </section>

      {/* Footer */}
      <div className="mt-7 bg-white py-1 flex justify-center items-center dark:bg-slate-700">
        <div className="text-center text-gray-700 dark:text-gray-200">
          &copy; 2025 Zahrin Savana. All Rights Reserved.
        </div>
      </div>

      {/* Scroll to top */}
      <div className="scroll-smooth w-10 h-10 bg-[#F3D7CA] rounded-full flex fixed bottom-5 right-5 -translate-x-1/2 cursor-pointer">
        <a href="#home" className="text-xl m-auto">
          ↑
        </a>
      </div>

      <style>
        {`
        @keyframes float {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        @keyframes scaleIn {
          0% { opacity:0; transform:scale(0.9); }
          100% { opacity:1; transform:scale(1); }
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}
      </style>
    </div>
  );
}

export default App;
