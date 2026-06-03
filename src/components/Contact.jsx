import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="pt-20 mx-10 lg:mx-20 mb-10">
      <h5 className="text-2xl text-slate-700 mb-5 dark:text-slate-200">------- Get in Touch</h5>
      <p className="mb-5 dark:text-slate-300">Let's connect and collaborate! Feel free to reach out through any of the platforms below.</p>
      <div className="flex gap-3 flex-wrap">
        <a href="https://www.instagram.com/zahrinsavanaa/" target="_blank" rel="noopener noreferrer" className="flex border border-slate-800 p-2 rounded-lg hover:bg-slate-300 dark:text-slate-300 dark:hover:bg-slate-500 items-center">
          <span className="w-5 mr-2 inline-block">📸</span>Instagram
        </a>
        <a href="https://x.com/zahrinnaa/" target="_blank" rel="noopener noreferrer" className="flex border border-slate-800 p-2 rounded-lg hover:bg-slate-300 dark:text-slate-300 dark:hover:bg-slate-500 items-center">
          <span className="w-5 mr-2 inline-block">🐦</span>Twitter
        </a>
        <a href="https://github.com/Zahrins" target="_blank" rel="noopener noreferrer" className="flex border border-slate-800 p-2 rounded-lg hover:bg-slate-300 dark:text-slate-300 dark:hover:bg-slate-500 items-center">
          <span className="w-5 mr-2 inline-block">💻</span>GitHub
        </a>
      </div>
    </section>
  );
}
