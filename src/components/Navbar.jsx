import React, { useState, useEffect, useRef } from "react";

export default function Navbar({ scrolled, darkMode, setDarkMode, activeSection }) {
  const items = ["home", "about", "skill", "project", "contact"];

  // 1. STATE & LOGIKA UNTUK ANIMASI MATA IKUT KURSOR
  const mascotRef = useRef(null);
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!mascotRef.current) return;

      const rect = mascotRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const theta = Math.atan2(dy, dx);

      // maxDist dikecilkan menjadi 2 pixel agar pupil hitam tidak keluar dari mata putih
      const maxDist = 2;

      const nextX = Math.cos(theta) * maxDist;
      const nextY = Math.sin(theta) * maxDist;

      setEyePosition({ x: nextX, y: nextY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // 2. STATE & LOGIKA UNTUK EASTER EGG (SPEECH BUBBLE)
  const [clickCount, setClickCount] = useState(0);
  const [speechBubbleText, setSpeechBubbleText] = useState("");
  const bubbleTimeout = useRef(null);

  const funMessages = ["helloo000ooo call me loopy 😜", "Welcome to my portfolio! 😎"];

  const handleMascotClick = () => {
    const nextCount = clickCount + 1;
    setClickCount(nextCount);

    const randomMessage = funMessages[Math.floor(Math.random() * funMessages.length)];
    setSpeechBubbleText(randomMessage);

    if (bubbleTimeout.current) {
      clearTimeout(bubbleTimeout.current);
    }

    bubbleTimeout.current = setTimeout(() => {
      setSpeechBubbleText("");
    }, 3500);
  };

  return (
    <header
      className={`navbar-fixed py-4 px-10 flex justify-between items-center z-50 transition-colors ${
        scrolled ? "bg-slate-100 shadow-md dark:bg-slate-900" : "bg-transparent"
      }`}
    >
      <nav className="fixed top-0 left-0 w-full bg-[#EBE8E3] bg-transparent dark:bg-transparent backdrop-blur-md dark:bg-[#3B3735] dark:border-b dark:border-[#D1CCC5]/20 shadow-md z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between lg:px-6 px-2 gap-2 py-4">
          <div className="flex items-center gap-3">
            <a className="hidden lg:block text-[#3B3735] text-xl font-medium hover:text-slate-700 dark:text-[#EBE8E3] dark:hover:text-white capitalize cursor-pointer transition-colors">
              Zahrin
            </a>
            <div className="hidden lg:block relative group flex-shrink-0" ref={mascotRef}>
              <div
                className="relative rounded-full w-12 h-12 bg-[#7A7571] dark:bg-[#3B3735] border-2 border-[#D1CCC5] dark:border-[#D1CCC5] shadow-sm cursor-pointer hover:scale-105 transition-transform"
                onClick={handleMascotClick}
              >
                <div
                  className="absolute w-3 h-3 bg-white rounded-full flex items-center justify-center overflow-hidden"
                  style={{ left: "25%", top: "35%" }}
                >
                  <div
                    className="w-1.5 h-1.5 bg-[#373636] rounded-full transition-transform duration-75 ease-out"
                    style={{
                      transform: `translate(${eyePosition.x}px, ${eyePosition.y}px)`,
                    }}
                  />
                </div>

                <div
                  className="absolute w-3 h-3 bg-white rounded-full flex items-center justify-center overflow-hidden"
                  style={{ right: "25%", top: "35%" }}
                >
                  <div
                    className="w-1.5 h-1.5 bg-slate-900 rounded-full transition-transform duration-75 ease-out"
                    style={{
                      transform: `translate(${eyePosition.x}px, ${eyePosition.y}px)`,
                    }}
                  />
                </div>

                <div
                  className="absolute w-4 h-2 border-b-2 border-slate-500 dark:border-[#D1CCC5] rounded-full left-1/2 -translate-x-1/2"
                  style={{ bottom: "25%" }}
                ></div>
              </div>

              {speechBubbleText && (
                <div className="absolute bottom-[-70px] left-[-20px] w-[200px] bg-[#3B3735] text-white p-3 rounded-xl shadow-lg border border-[#7A7571] z-[60]">
                  <p className="text-xs font-normal">{speechBubbleText}</p>
                  <div className="absolute top-[-10px] left-[30px] w-0 h-0 border-l-[10px] border-l-transparent border-t-[10px] border-t-[#3B3735] border-r-[10px] border-r-transparent"></div>
                </div>
              )}
            </div>
          </div>

          <ul className="flex lg:space-x-12 space-x-2 items-center absolute left-1/2 -translate-x-1/2">
            {items.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className={`transform transition-all hover:border-b-2 dark:hover:border-b-[#EBE8E3] capitalize font-medium ${
                    activeSection === item
                      ? "text-[#3B3735] border-b-2 border-[#7A7571] dark:text-[#EBE8E3] dark:border-b-[#EBE8E3]"
                      : "text-[#3B3735] hover:text-slate-900 dark:text-[#D1CCC5] dark:hover:text-[#EBE8E3] hover:border-b-[#7A7571] dark:hover:border-b-[#D1CCC5]"
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <span
              className={`hidden lg:block text-sm font-medium transition-colors duration-300 ${
                !darkMode ? "text-[#3B3735] dark:text-[#D1CCC5]" : "text-[#7A7571] dark:text-[#D1CCC5]"
              }`}
            >
              Light
            </span>

            <label className="relative flex items-center cursor-pointer group">
              <input
                type="checkbox"
                className="hidden"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />

              <div
                className={`w-14 h-8 rounded-full border-2 transition-all duration-300 ease-in-out shadow-inner ${
                  darkMode
                    ? "bg-[#3B3735] border-[#3B3735]" 
                    : "bg-[#EBE8E3] border-[#D1CCC5]" 
                }`}
              ></div>

              <div
                className={`absolute left-1 top-1 w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 ease-in-out shadow-sm ${
                  darkMode
                    ? "translate-x-6 bg-[#EBE8E3]" 
                    : "translate-x-0 bg-[#3B3735]" 
                }`}
              >
                {darkMode ? (
                  <svg
                    className="w-3.5 h-3.5 text-[#3B3735]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                  </svg>
                ) : (
          
                  <svg
                    className="w-4 h-4 text-[#EBE8E3]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.22 2.366a1 1 0 011.415 0l.708.708a1 1 0 01-1.414 1.414l-.708-.708a1 1 0 010-1.414zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zm-2.366 4.22a1 1 0 010 1.415l-.708.708a1 1 0 01-1.414-1.414l.708-.708a1 1 0 011.414 0zM10 16a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm-4.22-2.366a1 1 0 01-1.415 0l-.708-.708a1 1 0 011.414-1.414l.708.708a1 1 0 010 1.414zM2 10a1 1 0 011-1h1a1 1 0 110 2H3a1 1 0 01-1-1zm2.366-4.22a1 1 0 010-1.415l.708-.708a1 1 0 011.414 1.414l-.708.708a1 1 0 01-1.414 0zM10 5a5 5 0 100 10 5 5 0 000-10z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                )}
              </div>
            </label>

            <span
              className={`hidden lg:block text-sm font-medium transition-colors duration-300 ${
                darkMode ? "text-[#EBE8E3]" : "text-[#7A7571]"
              }`}
            >
              Dark
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
}
