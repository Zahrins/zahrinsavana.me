import React from "react";
import { skillsData } from "../data/constants";

export default function Skills() {
  return (
    <section id="skill" className="pt-20 mx-10 lg:mx-20 mb-20">
      <div className="mb-20 flex flex-col items-start">
        <span className="bg-[#EBE8E3] text-[#3B3735] px-4 py-1.5 rounded-full text-sm font-bold mb-4 shadow-sm">
          Skills
        </span>

        <h2 className="text-4xl md:text-5xl font-bold text-[#3B3735] dark:text-[#EBE8E3] tracking-tight">
          What I can do
        </h2>

        <div className="w-3/4 h-1.5 bg-[#F3D7CA] rounded-full mt-4 dark:bg-[#D1CCC5]/30"></div>
      </div>
      <div className="flex flex-col gap-5">
        {/* Card Frontend */}
        <div className="border border-slate-300 dark:border-[#D1CCC5]/30 bg-white dark:bg-[#3B3735] rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-bold text-slate-700 dark:text-[#EBE8E3] mb-4">
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
              JavaScript
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
        <div className="border border-slate-300 dark:border-[#D1CCC5]/30 bg-white dark:bg-[#3B3735] rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-bold text-slate-700 dark:text-[#EBE8E3] mb-4">
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

        <div className="border border-slate-300 dark:border-[#D1CCC5]/30 bg-white dark:bg-[#3B3735] rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-bold text-slate-700 dark:text-[#EBE8E3] mb-4">
            Backend & Database
          </h3>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-red-100 text-red-600 dark:text-red-600 dark:bg-pink-500/20">
              Laravel
            </span>
            <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-blue-100 text-blue-600 dark:text-blue-600 dark:bg-fuchsia-500/20">
              MySQL
            </span>
            <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-teal-100 text-teal-600 dark:text-teal-600 dark:bg-rose-500/20">
              PHP
            </span>
            <span>
              <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-green-100 text-green-600 dark:text-green-600 dark:bg-green-500/20">
                ASP.NET
              </span>
            </span>
            <span>
              <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-purple-100 text-purple-600 dark:text-purple-600 dark:bg-purple-500/20">
                JWT Auth
              </span>
            </span>
            <span>
              <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-cyan-100 text-cyan-600 dark:text-cyan-400 dark:bg-cyan-500/20">
                REST API
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
