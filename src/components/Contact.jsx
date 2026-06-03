import React from "react";

import linkedinLogo from "../img/linkedIn.svg";
import instagramLogo from "../img/instagram.png";
import xLogo from "../img/X.avif";
import githubLogo from "../img/github.jpg";

export default function Contact() {
  return (
    <section id="contact" className="pt-20 mx-10 lg:mx-20 mb-10">
      <div className="mb-20 flex flex-col items-start">
        <span className="bg-[#EBE8E3] text-[#3B3735] px-4 py-1.5 rounded-full text-sm font-bold mb-4 shadow-sm">
          Contact
        </span>

        <h2 className="text-4xl md:text-5xl font-bold text-[#3B3735] dark:text-white tracking-tight">
          Let's work together
        </h2>

        <div className="w-3/4 h-1.5 bg-[#F3D7CA] rounded-full mt-4"></div>
      </div>
      <p className="mb-5 dark:text-[#EBE8E3]">
        Let's connect and collaborate! Feel free to reach out through any of the
        platforms below.
      </p>
      <div className="flex gap-3 flex-wrap">
        <a
          href="https://github.com/Zahrins"
          target="_blank"
          rel="noopener noreferrer"
          className="flex border border-[#EBE8E3] text-[#3B3735] px-5 py-2 rounded-lg cursor-pointer transform transition-all duration-300 hover:bg-[#EBE8E3] dark:text-[#EBE8E3] dark:hover:bg-[#7A7571] items-center"
        >
          <img src={githubLogo} alt="GitHub" className="w-5 mr-2" />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/zahrin-savana-khadijah-9b0776321"
          target="_blank"
          rel="noopener noreferrer"
          className="flex border border-[#EBE8E3] text-[#3B3735] px-5 py-2 rounded-lg cursor-pointer transform transition-all duration-300 hover:bg-[#EBE8E3] dark:text-[#EBE8E3] dark:hover:bg-[#7A7571] items-center"
        >
          <img src={linkedinLogo} alt="LinkedIn" className="w-5 mr-2" />
          LinkedIn
        </a>
        <a
          href="https://www.instagram.com/zahrinsavanaa/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex border border-[#EBE8E3] text-[#3B3735] px-5 py-2 rounded-lg cursor-pointer transform transition-all duration-300 hover:bg-[#EBE8E3] dark:text-[#EBE8E3] dark:hover:bg-[#7A7571] items-center"
        >
          <img src={instagramLogo} alt="Instagram" className="w-5 mr-2" />
          Instagram
        </a>
        <a
          href="https://x.com/zahrinnaa/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex border border-[#EBE8E3] text-[#3B3735] px-5 py-2 rounded-lg cursor-pointer transform transition-all duration-300 hover:bg-[#EBE8E3] dark:text-[#EBE8E3] dark:hover:bg-[#7A7571] items-center"
        >
          <img src={xLogo} alt="X" className="w-5 mr-2" />X
        </a>
      </div>
    </section>
  );
}
