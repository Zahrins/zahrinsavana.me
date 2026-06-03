import React from "react";

export default function Navbar({ scrolled, darkMode, setDarkMode, activeSection }) {
  const items = ["home", "about", "skill", "project", "contact"];

  return (
    <header
      className={`navbar-fixed py-4 px-10 flex justify-between items-center z-50 transition-colors ${
        scrolled ? "bg-slate-100 shadow-md dark:bg-slate-900" : "bg-transparent"
      }`}
    >
      <nav className="fixed top-0 left-0 w-full bg-white bg-transparent backdrop-blur-md dark:bg-slate-900 shadow-md z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between lg:px-6 px-2 gap-2 py-4">
          <a className="hidden lg:block text-slate-700 text-xl font-medium hover:text-slate-800 dark:text-slate-100 capitalize">
            Zahrin
          </a>

          <ul className="flex lg:space-x-12 space-x-2 items-center absolute left-1/2 -translate-x-1/2">
            {items.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className={`transform transition-all hover:border-b-2 hover:border-b-slate-600 dark:text-slate-100 capitalize ${
                    activeSection === item
                      ? "text-[#3B3735] border-b-2 border-[#7A7571] dark:text-slate-100"
                      : "text-[#3B3735] hover:text-slate-900"
                  }`}
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
                checked={darkMode}
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
  );
}
