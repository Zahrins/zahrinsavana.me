import React, { useState } from "react";
import { projectsData } from "../data/constants";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section id="project" className="pt-20 mx-10 lg:mx-20">
        <div className="mb-20 flex flex-col items-start">
          <span className="bg-[#EBE8E3] text-[#3B3735] px-4 py-1.5 rounded-full text-sm font-bold mb-4 shadow-sm">
            Projects
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#3B3735] dark:text-white tracking-tight">
            Things I've made
          </h2>

          <div className="w-3/4 h-1.5 bg-[#F3D7CA] rounded-full mt-4"></div>
        </div>
        <div className="container mx-auto px-6 flex flex-wrap gap-6 justify-center">
          {projectsData.map((project) => {
            const getTechColor = (tech) => {
              const colors = {
                HTML: "text-red-600 dark:text-red-500",
                CSS: "text-emerald-600 dark:text-emerald-500",
                "Chart.js": "text-amber-600 dark:text-amber-600",
                Javascript: "text-amber-500",
                React: "text-indigo-600 dark:text-indigo-500",
                "TypeScript": "text-sky-600 dark:text-sky-400",
                "ASP.NET": "text-green-700 dark:text-green-500",
                "JWT Auth": "text-purple-600 dark:text-purple-400",
                PHP: "text-teal-600 dark:text-teal-600",
                "Tailwind CSS": "text-green-600 dark:text-green-600",
                MySQL: "text-blue-600 dark:text-blue-600",
                Laravel: "text-red-600 dark:text-red-600",
                "REST API Integration": "text-cyan-600 dark:text-cyan-400",
              };
              return colors[tech] || "text-slate-700 dark:text-slate-600";
            };

            return (
              <div
                key={project.title}
                onClick={() => setSelectedProject(project)}
                className="group w-80 rounded-2xl overflow-hidden mb-10 flex flex-col cursor-pointer transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-white dark:bg-[#3B3735] border border-[#EBE8E3] dark:border-[#D1CCC5]"
              >
                {/* Bagian Atas (Gambar Project) */}
                <div className="h-48 overflow-hidden relative bg-slate-100 dark:bg-[#3B3735]">
                  {project.img && project.img[0] ? (
                    <img
                      src={project.img[0]}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400 transition-transform duration-700 group-hover:scale-110">
                      No Image
                    </div>
                  )}
                </div>

                {/* Bagian Bawah (Konten & Tech Stack) */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold text-xl text-[#3B3735] dark:text-[#EBE8E3] mb-2 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-[#7A7571] dark:text-[#EBE8E3] text-sm mb-5 line-clamp-2">
                    {project.desc}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className={`px-3 py-1 bg-[#F9F8F6] dark:bg-[#EBE8E3] rounded-full text-xs font-semibold shadow-sm ${getTechColor(t)}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Pendorong elemen ke bawah */}
                  <div className="mt-auto"></div>

                  {/* Garis Pembatas & Teks View Project */}
                  <div className="border-t border-[#EBE8E3] dark:border-[#D1CCC5] pt-4 flex justify-between items-center">
                    <span className="text-sm font-semibold text-[#7A7571] dark:text-[#EBE8E3] group-hover:text-[#3B3735] dark:group-hover:text-[#EBE8E3] transition-colors">
                      View project
                    </span>
                    {/* Panah Atas-Kanan */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-[#D1CCC5] dark:text-[#D1CCC5] group-hover:text-[#3B3735] dark:group-hover:text-[#EBE8E3] transform transition-all group-hover:translate-x-1 group-hover:-translate-y-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-5">
          <div className="bg-white dark:bg-[#3B3735] rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-8 relative shadow-2xl transform scale-95 animate-fadeIn">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-xl font-bold text-slate-600 dark:text-[#EBE8E3]"
            >
              ✕
            </button>

            <h2 className="text-2xl text-[#3B3735] font-bold mb-4 dark:text-[#EBE8E3]">
              {selectedProject.title}
            </h2>

            <p className="mb-6 text-[#5e5c5a] dark:text-[#EBE8E3]">
              {selectedProject.desc}
            </p>

            <div className="mb-6">
              <h4 className="font-semibold mb-2 dark:text-[#EBE8E3]">
                Technologies Used:
              </h4>
              <div className="flex gap-2 flex-wrap">
                {selectedProject.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-[#EBE8E3] dark:bg-slate-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedProject.images.map((img, index) =>
                img ? (
                  <img key={index} src={img} className="rounded-lg" />
                ) : (
                  <div
                    key={index}
                    className="h-40 bg-[#EBE8E3] dark:bg-[#3B3735] rounded-lg flex items-center justify-center text-slate-400"
                  >
                    Screenshot
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
