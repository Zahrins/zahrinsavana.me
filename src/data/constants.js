// Centralized assets and data for the app
import animasizahrin from "../img/animasi_zahrin2-removebg-preview (1).png";
import zahrinpink from "../img/zahrinpink.jpg";

import htmlLogo from "../img/html.png";
import cssLogo from "../img/css-3.png";
import jsLogo from "../img/js.png";
import tsLogo from "../img/typescript.png";
import reactLogo from "../img/physics.png";
import figmaLogo from "../img/figma.png";
import tailwindLogo from "../img/tailwindcss-icon.svg";

import walkingTracker1 from "../img/walking-tracker-1.png";
import walkingTracker2 from "../img/walking-tracker-2.png";
import walkingTracker3 from "../img/walking-tracker-3.png";

import counter3 from "../img/counter-3.png";

import library1 from "../img/library1.png";
import library2 from "../img/library2.png";
import library3 from "../img/library3.png";
import library4 from "../img/library4.png";

import fleurskin1 from "../img/fleurskin1.png";
import fleurskin3 from "../img/fleurskin3.png";
import fleurskin4 from "../img/fleurskin4.png";
import fleurskin5 from "../img/fleurskin5.png";
import fleurskin6 from "../img/fleurskin6.png";
import fleurskin7 from "../img/fleurskin7.png";
import fleurskin8 from "../img/fleurskin8.png";

import pegawaiweb1 from "../img/pegawaiweb1.png";
import pegawaiweb2 from "../img/pegawaiweb2.png";
import pegawaiweb3 from "../img/pegawaiweb3.png";
import pegawaiweb4 from "../img/pegawaiweb4.png";

export const animasizahrinImg = animasizahrin;
export const zahrinpinkImg = zahrinpink;

export const skillsData = [
  { name: "HTML", logo: htmlLogo },
  { name: "CSS", logo: cssLogo },
  { name: "JavaScript", logo: jsLogo },
  { name: "Typescript", logo: tsLogo },
  { name: "React", logo: reactLogo },
  { name: "Figma", logo: figmaLogo },
  { name: "Tailwind", logo: tailwindLogo },
];

export const projectsData = [
  {
    title: "Walking Tracker Web App",
    desc: "Simple web application to monitor daily step counts for a week. Built using HTML, CSS, and Chart.js to display data visualizations in the form of a responsive line chart.",
    img: [walkingTracker1],
    images: [walkingTracker1, walkingTracker2, walkingTracker3],
    tech: ["HTML", "CSS", "Chart.js", "Javascript"],
  },
  {
    title: "Tap Battle Counter (React Mini Game)",
    desc: "A simple React-based mini-game where two images compete against each other. The user must tap/click the images as quickly as possible to increase their score. The first one to reach the highest score wins.",
    img: [counter3],
    images: [counter3],
    tech: ["React", "Javascript", "CSS"],
  },
  {
    title: "Library Management System (Team Project)",
    desc: "A web-based library management system built with PHP, Tailwind CSS, and MySQL. The system provides separate roles for Admin and User. Admin can perform full CRUD operations (Create, Read, Update, Delete) on books, manage data, and control the library collection. Users can browse, search, and view available books in the system. The application implements authentication, role-based access control, and database integration for dynamic data management.",
    img: [library1],
    images: [library1, library2, library3, library4],
    tech: ["PHP", "Tailwind CSS", "MySQL", "Javascript"],
  },
  {
    title: "Fleur Skin Care Management System",
    desc: "A web-based skin care management system built with PHP, Tailwind CSS, and MySQL. The application allows users to schedule daily, weekly, or monthly skincare routines such as salon visits, masking sessions, and treatments. It also includes a product library to manage skincare products and a beauty notes feature to record personal skincare experiences. The system implements CRUD functionality for schedules, products, and notes with dynamic database integration.",
    img: [fleurskin1],
    images: [fleurskin1, fleurskin3, fleurskin4, fleurskin5, fleurskin6, fleurskin7, fleurskin8],
    tech: ["PHP", "Tailwind CSS", "MySQL", "Javascript"],
  },
  {
    title: "Employee Management Web App",
    desc: "A full-featured employee management system built with Laravel, Tailwind CSS, and MySQL. The application supports full CRUD operations (Create, Read, Update, Delete) for employee records and includes secure file upload functionality for storing documents such as ID cards (KTP), family cards (KK), and other supporting files. The system implements server-side validation, database integration, and organized file storage management.",
    img: [pegawaiweb1],
    images: [pegawaiweb1, pegawaiweb2, pegawaiweb3, pegawaiweb4],
    tech: ["Laravel", "Tailwind CSS", "MySQL", "Javascript"],
  },
];

export default {
  skillsData,
  projectsData,
};
