import React, { useState, useEffect } from "react";

export default function VerticalScroll() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;

      const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
      setScrollPercentage(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed right-6 top-[15vh] h-[70vh] z-50 hidden md:flex flex-col items-center">
      {/* Track / Jalur Latar Belakang */}
      <div className="relative w-1.5 h-full bg-[#EBE8E3] rounded-full shadow-inner border border-[#D1CCC5]">
        {/* Garis Progress yang Terisi */}
        <div
          className="absolute top-0 left-0 w-full bg-[#7A7571] rounded-full transition-all duration-100 ease-out"
          style={{ height: `${scrollPercentage}%` }}
        ></div>

        <div
          className="absolute left-1/2 -translate-x-1/2 transition-all duration-100 ease-out flex flex-col items-center group"
          style={{
            top: `${scrollPercentage}%`,
            marginTop: "-16px",
          }}
        >
          {/* Efek Glow/Pulse di belakang ikon */}
          <div className="absolute w-8 h-8 bg-[#D1CCC5] rounded-full opacity-30 animate-ping"></div>

          <div className="relative text-2xl transform rotate-90 drop-shadow-md cursor-pointer hover:scale-110 transition-transform">
            🦋
          </div>

          {/* Tooltip lucu saat di-hover (opsional) */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 w-max px-2 py-1 bg-[#3B3735] text-[#EBE8E3] text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            {Math.round(scrollPercentage)}% Journey
          </div>
        </div>
      </div>
    </div>
  );
}
