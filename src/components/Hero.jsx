import React from "react";
import { animasizahrinImg } from "../data/constants";

export default function Hero() {
  return (
    <section
      id="home"
      className="lg:pt-36 pt-10 lg:mx-40 mt-10 lg:mt-0 mb-10 lg:mb-0"
    >
      <div className="container flex px-4 sm:px-10 lg:px-0">
        <div className="flex-wrap w-full gap-10 lg:flex">
          <div className="lg:w-1/2">
            <h1 className="text-base font-semibold text-[#7A7571] md:text-xl lg:text-2xl dark:text-[#D1CCC5]">
              Helloooo, I'm
              <span className="block mt-4 font-bold text-[#3B3735] text-3xl md:text-4xl lg:text-5xl dark:text-[#EBE8E3]">
                Zahrin Savana
              </span>
            </h1>
            <h2 className="font-medium text-[#56504d] lg:text-xl text-lg mb-5 dark:text-[#D1CCC5]">
              Software Developer
            </h2>
            <p className="leading-relaxed dark:text-[#EBE8E3]">
              Welcome to my personal corner of the web – where creativity meets
              passion. Take a look around and enjoy the journey!!
            </p>
            <div className="flex flex-row gap-4 mt-5 flex-wrap">
              <div className="bg-[#EBE8E3] dark:bg-[#7A7571] dark:text-[#EBE8E3] px-4 py-2 rounded-3xl w-max mt-5 text-sm text-[#3B3735]">
                Web
              </div>
              <div className="bg-[#EBE8E3] dark:bg-[#7A7571] dark:text-[#EBE8E3] px-4 py-2 rounded-3xl w-max mt-5 text-sm text-[#3B3735]">
                UI/UX
              </div>
            </div>
            <a
              href="#project"
              className="bg-[#F3D7CA] dark:bg-[#D1CCC5] dark:hover:bg-[#EBE8E3] dark:text-[#3B3735] border border-neutral-400 dark:border-[#D1CCC5] hover:bg-[#f1cbb9] transform transition-colors cursor-pointer px-6 py-2 rounded-3xl w-max mt-5 text-sm inline-block"
            >
              View My Work
            </a>
          </div>
          <div className="relative mt-10 lg:m-5 lg:bottom-0 lg:left-10 lg:w-2/5 w-full flex justify-center">
            <img
              src={animasizahrinImg}
              alt="Zahrin"
              className="mx-auto rounded-full w-64 sm:w-80 lg:w-auto animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
