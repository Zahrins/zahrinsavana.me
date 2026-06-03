import React from "react";
import { zahrinpinkImg } from "../data/constants";

export default function About() {
  return (
    <section id="about" className="pt-20 mx-10 lg:mx-20">
      <div className="mb-20 flex flex-col items-start">
        <span className="bg-[#EBE8E3] text-[#3B3735] px-4 py-1.5 rounded-full text-sm font-bold mb-4 shadow-sm">
          About
        </span>

        <h2 className="text-4xl md:text-5xl font-bold text-[#3B3735] dark:text-[#EBE8E3] tracking-tight">
          Get to know me
        </h2>

        <div className="w-3/4 h-1.5 bg-[#F3D7CA] rounded-full mt-4"></div>
      </div>
      <div className="w-full lg:flex justify-center items-center gap-20">
        {/* KOLOM KIRI: Foto & Badge */}
        <div className="relative w-full max-w-[200px] lg:max-w-[280px] shrink-0">
          <img
            src={zahrinpinkImg}
            alt="Zahrin Savana"
            className="w-full aspect-square object-cover rounded-[2rem] bg-[#f1cbb9] shadow-lg"
          />
          {/* Badge Web Developer */}
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-[#EBE8E3] text-[#3B3735] px-8 py-2.5 rounded-full font-semibold text-sm shadow-xl whitespace-nowrap">
            Web Developer
          </div>
        </div>

        {/* KOLOM KANAN: Teks & Statistik */}
        <div className="w-full flex-1 mt-8 lg:mt-0">
          <p className="text-[#7A7571] text-sm font-bold tracking-[0.2em] uppercase mb-3">
            Who I Am
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#3B3735] dark:text-white mb-5">
            Zahrin Savana
          </h2>

          <p className="text-lg lg:text-xl font-semibold text-slate-700 dark:text-[#EBE8E3] mb-4 leading-relaxed">
            19-year-old Informatics Engineering student passionate about web
            development & design.
          </p>

          <p className="text-base text-slate-600 dark:text-[#EBE8E3] mb-10 leading-relaxed max-w-2xl">
            Building digital experiences from simple to complex — from design to
            deployment. Open to collaborate!
          </p>

          {/* Container Kartu Statistik */}
          <div className="flex flex-wrap gap-4">
            {/* Kartu 1 */}
            <div className="border border-[#D1CCC5] dark:border-[#D1CCC5]/30 dark:bg-[#3B3735] rounded-2xl py-4 px-6 flex flex-col items-center justify-center flex-1 min-w-[110px] max-w-[140px] hover:border-[#3B3735]/50 transition-colors">
              <span className="text-[#3B3735] dark:text-[#EBE8E3] text-2xl font-bold mb-1">5+</span>
              <span className="text-xs lg:text-sm text-slate-600 dark:text-[#EBE8E3] font-medium text-center">
                Projects
              </span>
            </div>

            {/* Kartu 2 */}
            <div className="border border-[#D1CCC5] dark:border-[#D1CCC5]/30 dark:bg-[#3B3735] rounded-2xl py-4 px-6 flex flex-col items-center justify-center flex-1 min-w-[110px] max-w-[140px] hover:border-[#3B3735]/50 transition-colors">
              <span className="text-[#3B3735] dark:text-[#EBE8E3] text-2xl font-bold mb-1">2+</span>
              <span className="text-xs lg:text-sm text-slate-600 dark:text-[#EBE8E3] font-medium text-center">
                Years coding
              </span>
            </div>

            {/* Kartu 3 */}
            <div className="border border-[#D1CCC5] dark:border-[#D1CCC5]/30 dark:bg-[#3B3735] rounded-2xl py-4 px-6 flex flex-col items-center justify-center flex-1 min-w-[110px] max-w-[140px] hover:border-[#3B3735]/50 transition-colors">
              <span className="text-[#3B3735] dark:text-[#EBE8E3] text-2xl font-bold mb-1">7</span>
              <span className="text-xs lg:text-sm text-slate-600 dark:text-[#EBE8E3] font-medium text-center">
                Skills
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll Down Indicator */}
      <div className="w-full flex justify-center mt-20">
        <a
          href="#skill"
          className="w-12 h-12 rounded-full border border-[#D1CCC5] dark:border-[#D1CCC5]/30 flex items-center justify-center text-[#3B3735] dark:text-[#EBE8E3]/80 hover:text-[#3B3735] dark:hover:text-[#EBE8E3] hover:border-[#3B3735] dark:hover:border-[#D1CCC5] transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
