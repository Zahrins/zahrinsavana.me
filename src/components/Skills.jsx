import React from "react";
import { skillsData } from "../data/constants";

export default function Skills() {
  return (
    <section id="skill" className="pt-20 mx-10 lg:mx-20 mb-20">
      <h5 className="text-2xl text-slate-700 mb-5 dark:text-slate-200">
        ------- Skills
      </h5>
      <div className="flex flex-col gap-5">
        {/* Card Frontend */}
        <div className="border border-slate-300 dark:border-white/10 bg-white dark:bg-[#2A2A2A] rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-bold text-slate-700 dark:text-slate-200 mb-4">
            Frontend
          </h3>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-300">
              HTML
            </span>
            <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300">
              CSS
            </span>
            <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300">
              JS
            </span>
            <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300">
              TypeScript
            </span>
            <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300">
              React
            </span>
            <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-teal-100 text-teal-700 dark:bg-teal-500/20 dark:text-teal-300">
              Tailwind
            </span>
          </div>
        </div>

        {/* Card Design */}
        <div className="border border-slate-300 dark:border-white/10 bg-white dark:bg-[#2A2A2A] rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-bold text-slate-700 dark:text-slate-200 mb-4">
            Design
          </h3>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-pink-100 text-pink-700 dark:bg-pink-500/20 dark:text-pink-300">
              Figma
            </span>
            <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-500/20 dark:text-fuchsia-300">
              UI/UX
            </span>
            <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-rose-100 text-rose-700 dark:bg-rose-500/20 dark:text-rose-300">
              Prototyping
            </span>
          </div>
        </div>

        {/* Card Pengalaman Belajar */}
        <div className="border border-slate-300 dark:border-white/10 bg-white dark:bg-[#2A2A2A] rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-bold text-slate-700 dark:text-slate-200 mb-4">
            Pengalaman belajar
          </h3>
          <div className="flex items-center gap-4 mb-2">
            {/* Progress Bar Track */}
            <div className="w-full bg-slate-200 dark:bg-[#1A1A1A] h-2.5 rounded-full overflow-hidden">
              {/* Progress Bar Fill */}
              <div
                className="bg-[#D45D3C] h-full rounded-full transition-all duration-1000 ease-out"
                style={{ width: "85%" }}
              ></div>
            </div>
            {/* Percentage Text */}
            <span className="text-slate-700 dark:text-slate-200 font-bold text-sm">
              85%
            </span>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mt-2">
            HTML / CSS proficiency
          </p>
        </div>
      </div>
    </section>
  );
}
