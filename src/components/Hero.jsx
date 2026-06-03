import React from "react";
import { animasizahrinImg } from "../data/constants";

export default function Hero() {
  return (
    <section id="home" className="lg:pt-36 pt-5 lg:mx-40 mt-10 lg:mt-0">
      <div className="container flex px-10">
        <div className="flex-wrap w-full gap-10 lg:flex">
          <div className="lg:w-1/2">
            <h1 className="text-base font-semibold text-[#7A7571] md:text-xl lg:text-2xl dark:text-[#7A7571]">
              Helloooo, I'm
              <span className="block mt-4 font-bold text-[#3B3735] text-3xl lg:text-5xl dark:text-slate-200">
                Zahrin Savana
              </span>
            </h1>
            <h2 className="font-medium text-[#56504d] lg:text-xl text-lg mb-5">
              frontend developer
            </h2>
            <p className="leading-relaxed dark:text-slate-300">
              Welcome to my personal corner of the web – where creativity meets
              passion. Take a look around and enjoy the journey!!
            </p>
            <div className="flex flex-row gap-4 mt-5">
              <div className="bg-[#EBE8E3] px-4 py-2 rounded-3xl w-max mt-5 text-sm">
                Web
              </div>
              <div className="bg-[#EBE8E3] px-4 py-2 rounded-3xl w-max mt-5 text-sm">
                UI/UX
              </div>
            </div>
            <div className="bg-[#F3D7CA] border border-neutral-400 hover:bg-[#f1cbb9] transform transition-colors cursor-pointer px-6 py-2 rounded-3xl w-max mt-5 text-sm">
              View My Work
            </div>
          </div>
          <div className="relative mt-10 lg:m-5 lg:bottom-0 lg:left-10 lg:w-2/5">
            <img
              src={animasizahrinImg}
              alt="Zahrin"
              className="mx-auto rounded-full w-100 animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
