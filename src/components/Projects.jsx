import React, { useState } from "react";
import { projectsData } from "../data/constants";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section id="project" className="pt-20 mx-10 lg:mx-20">
        <h5 className="text-2xl text-slate-700 mb-5 dark:text-slate-200">------- Past Project Experience</h5>
        <p className="text-slate-500 mb-5">Explore the projects I've worked on so far</p>
        <div className="container mx-auto px-6 flex flex-wrap gap-5">
          {projectsData.map((project) => (
            <div
              key={project.title}
              onClick={() => setSelectedProject(project)}
              className="group rounded-2xl shadow-md overflow-hidden mb-10 w-80 
             bg-white dark:bg-slate-800
             transform transition-all duration-500 ease-out
             hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02] 
             cursor-pointer"
            >
              {project.img && project.img[0] ? (
                <img src={project.img[0]} className="w-full" />
              ) : (
                <div className="w-full transition-transform duration-700 group-hover:scale-110">No Image</div>
              )}
              <div className="px-6 py-4">
                <div className="font-semibold leading-relaxed text-xl mb-2 text-slate-700 dark:text-slate-200">{project.title}</div>
                <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-3">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-5">
          <div className="bg-white dark:bg-slate-800 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-8 relative shadow-2xl transform scale-95 animate-fadeIn">
            <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 text-xl font-bold text-slate-600 dark:text-slate-200">✕</button>

            <h2 className="text-2xl font-bold mb-4 dark:text-slate-200">{selectedProject.title}</h2>

            <p className="mb-6 text-slate-600 dark:text-slate-300">{selectedProject.desc}</p>

            <div className="mb-6">
              <h4 className="font-semibold mb-2 dark:text-slate-200">Technologies Used:</h4>
              <div className="flex gap-2 flex-wrap">
                {selectedProject.tech.map((tech) => (
                  <span key={tech} className="bg-slate-200 dark:bg-slate-300 px-3 py-1 rounded-full text-sm">{tech}</span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedProject.images.map((img, index) =>
                img ? (
                  <img key={index} src={img} className="rounded-lg" />
                ) : (
                  <div key={index} className="h-40 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center text-slate-400">Screenshot</div>
                ),
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
