import React from "react";

import linkedinLogo from "../img/linkedIn.svg";
import instagramLogo from "../img/instagram.png";
import emailLogo from "../img/email.png";
import githubLogo from "../img/github.png";

export default function Contact() {
  return (
    <section id="contact" className="pt-20 mx-10 lg:mx-20 mb-10">
      <div className="mb-10 flex flex-col items-start">
        <span className="bg-[#EBE8E3] text-[#3B3735] px-4 py-1.5 rounded-full text-sm font-bold mb-4 shadow-sm dark:bg-[#7A7571] dark:text-[#EBE8E3]">
          Contact
        </span>

        <h2 className="text-4xl md:text-5xl font-bold text-[#3B3735] dark:text-[#EBE8E3] tracking-tight">
          Let's work together
        </h2>

        <div className="w-3/4 h-1.5 bg-[#F3D7CA] rounded-full mt-4 dark:bg-[#D1CCC5]/30"></div>
      </div>
      <p className="mb-5 text-[#7A7571] dark:text-[#EBE8E3]">
        Let's connect and collaborate! Feel free to reach out through any of the
        platforms below.
      </p>
      <div className="flex flex-col lg:flex-row items-start gap-10">
        <div className="w-full lg:w-2/3 bg-white dark:bg-[#3B3735] border border-slate-200 dark:border-[#D1CCC5]/20 rounded-3xl p-8 md:p-10 shadow-2xl">
          <h3 className="text-2xl font-bold text-[#3B3735] dark:text-[#EBE8E3] mb-8">
            Send Me a Message
          </h3>
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="flex flex-col gap-6"
          >
            <input
              type="hidden"
              name="access_key"
              value="454820a7-232c-456c-85ed-c3d04ab3e1fe"
            ></input>

            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              style={{ display: "none" }}
            />

            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-sm font-semibold text-[#3B3735] dark:text-[#EBE8E3]"
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Your full name"
                className="bg-[#F9F8F6] border border-[#EBE8E3] dark:bg-[#2A2A2A] dark:border-[#D1CCC5]/30 text-slate-900 dark:text-[#EBE8E3] px-4 py-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D45D3C] dark:focus:ring-[#D45D3C]/50 transition-all placeholder:text-[#7b7a77] dark:placeholder:text-[#7A7571]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-[#3B3735] dark:text-[#EBE8E3]"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="your.email@example.com"
                className="bg-[#F9F8F6] border border-[#EBE8E3] dark:bg-[#2A2A2A] dark:border-[#D1CCC5]/30 text-slate-900 dark:text-[#EBE8E3] px-4 py-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D45D3C] dark:focus:ring-[#D45D3C]/50 transition-all placeholder:text-[#7b7a77] dark:placeholder:text-[#7A7571]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="subject"
                className="text-sm font-semibold text-[#3B3735] dark:text-[#EBE8E3]"
              >
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                placeholder="What's this about?"
                className="bg-[#F9F8F6] border border-[#EBE8E3] dark:bg-[#2A2A2A] dark:border-[#D1CCC5]/30 text-slate-900 dark:text-[#EBE8E3] px-4 py-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D45D3C] dark:focus:ring-[#D45D3C]/50 transition-all placeholder:text-[#7b7a77] dark:placeholder:text-[#7A7571]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-sm font-semibold text-[#3B3735] dark:text-[#EBE8E3]"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                placeholder="Tell me about your project or opportunity..."
                className="bg-[#F9F8F6] border border-[#EBE8E3] dark:bg-[#2A2A2A] dark:border-[#D1CCC5]/30 text-slate-900 dark:text-[#EBE8E3] px-4 py-3.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D45D3C] dark:focus:ring-[#D45D3C]/50 transition-all placeholder:text-[#7b7a77] dark:placeholder:text-[#7A7571] resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-4 w-full bg-[#f1cbb9] hover:bg-[#cfae9f] dark:bg-[#D1CCC5] dark:hover:bg-[#EBE8E3] text-[#3B3735] dark:text-[#3B3735] font-bold text-lg py-4 rounded-xl transition-colors shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="w-full lg:w-1/3 bg-white dark:bg-[#3B3735] border border-slate-200 dark:border-[#D1CCC5]/20 rounded-3xl p-8 shadow-xl mt-10 lg:mt-0">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-[#3B3735] dark:text-[#EBE8E3]">
              Follow Me
            </h3>
            <p className="text-sm text-slate-600 dark:text-[#D1CCC5]/70 mt-2">
              Let's connect and build a network together!
            </p>
          </div>

          <div className="flex gap-4 flex-wrap justify-center">
            <a
              href="https://github.com/Zahrins"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 min-w-[100px] justify-center border border-[#EBE8E3] dark:border-[#D1CCC5]/30 text-[#3B3735] dark:text-[#EBE8E3] px-5 py-3 rounded-xl cursor-pointer transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-[#EBE8E3] dark:hover:bg-[#2A2A2A] items-center font-medium"
            >
              <img src={githubLogo} alt="GitHub" className="w-5 mr-2" />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/zahrin-savana-khadijah-9b0776321"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 min-w-[100px] justify-center border border-[#EBE8E3] dark:border-[#D1CCC5]/30 text-[#3B3735] dark:text-[#EBE8E3] px-5 py-3 rounded-xl cursor-pointer transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-[#EBE8E3] dark:hover:bg-[#2A2A2A] items-center font-medium"
            >
              <img src={linkedinLogo} alt="LinkedIn" className="w-5 mr-2" />
              LinkedIn
            </a>

            <a
              href="mailto:khadijahzahrinsavana@gmail.com"
              className="flex flex-1 min-w-[100px] justify-center border border-[#EBE8E3] dark:border-[#D1CCC5]/30 text-[#3B3735] dark:text-[#EBE8E3] px-5 py-3 rounded-xl cursor-pointer transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-[#EBE8E3] dark:hover:bg-[#2A2A2A] items-center font-medium"
            >
              <img src={emailLogo} alt="Email" className="w-5 mr-2" />
              Email
            </a>

            <a
              href="https://www.instagram.com/zahrinsavanaa/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 min-w-[100px] justify-center border border-[#EBE8E3] dark:border-[#D1CCC5]/30 text-[#3B3735] dark:text-[#EBE8E3] px-5 py-3 rounded-xl cursor-pointer transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-[#EBE8E3] dark:hover:bg-[#2A2A2A] items-center font-medium"
            >
              <img src={instagramLogo} alt="Instagram" className="w-5 mr-2" />
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
