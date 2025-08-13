import { useState } from "react";
import { Home, FolderKanban, User, Mail } from "lucide-react";
import { useSwipeable } from "react-swipeable";
import { motion, AnimatePresence } from "framer-motion";
import portrait from "./assets/portrait.png";
import "./App.css"; 
import resume from "./assets/resume.pdf";
import { HashRouter as Router, Routes, Route, NavLink } from "react-router-dom"; 

function Header() {
  return (
    
    <header className="w-full p-4 flex flex-wrap justify-between items-center border-b border-gray-300 dark:border-gray-700 font-title gap-y-2">
      <h1 className="text-2xl font-bold mr-4 font-mono">
      <span className="inline-block overflow-hidden">&gt;</span><span className="inline-block overflow-hidden border-r-2 border-white animate-typewriter">nathan-portfolio</span>
      </h1>
      <nav className="flex flex-wrap gap-2 items-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-6 py-3 rounded-lg text-l font-medium flex items-center gap-2 transition ${
              isActive ? "px-8 py-4 bg-emerald-500 !text-white" : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
            }`
          }
        >
          <Home className="w-6 h-6" /> Home
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `px-6 py-3 rounded-lg text-l font-medium flex items-center gap-2 transition ${
              isActive ? "px-8 py-4 bg-emerald-500 !text-white" : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
            }`
          }
        >
          <FolderKanban className="w-6 h-6" /> Projects
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `px-6 py-3 rounded-lg text-l font-medium flex items-center gap-2 transition ${
              isActive ? "px-8 py-4 bg-emerald-500 !text-white" : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
            }`
          }
        >
          <User className="w-6 h-6" /> About
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `px-6 py-3 rounded-lg text-l font-medium flex items-center gap-2 transition ${
              isActive ? "px-8 py-4 bg-emerald-500 !text-white": "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
            }`
          }
        >
          <Mail className="w-6 h-6" /> Contact
        </NavLink>
      </nav>
    </header>
  );
}

function Home1() {
  return (
    <section className="flex-grow px-8 py-16 font-body w-full max-w-6xl mx-auto">
      <div className="flex justify-center items-center mt-8">
        <img
          src={portrait}
          alt="Nathan Garity"
          className="w-70 h-70 object-cover rounded-full shadow-lg animate-portrait-fade"
        />
      </div>
      <br></br>
      <h2 className="text-5xl font-bold text-center">Hi, I'm Nathan Garrity</h2>
      <br></br><br></br><br></br>
      <div className="w-full mt-12 flex flex-col gap-8 text-4xl font-bold">
        <div className="relative overflow-hidden h-16">
          <p className="absolute whitespace-nowrap animate-left-slide-1 left-20">Full-Stack Developer.</p>
        </div>
        <div className="relative overflow-hidden h-16 text-right">
          <p className="absolute whitespace-nowrap animate-right-slide right-20">Problem Solver.</p>
        </div>
        <div className="relative overflow-hidden h-16">
          <p className="absolute whitespace-nowrap animate-left-slide-2 left-20">Collaborator.</p>
        </div>
      </div>
    </section>
  );
}

import EzShiftzLogin from './assets/EzShiftzLogin.png';
import DiabeticRetinopathyDiagnosis from './assets/DiabeticRetinopathyDiagnosis.png';

function Projects() {
  return (
    <section className="flex-grow space-y-4 px-8 py-16 font-body w-full max-w-7xl mx-auto">
      <h2 className="text-5xl font-bold text-center">Projects</h2><br></br>
      <p>Work in progress... adding projects completed over school years to this page, along with GitHub links</p><br></br><br></br>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border rounded-xl p-6 shadow-lg hover:scale-105 transition-transform bg-white dark:bg-gray-800">
          <img
            src={EzShiftzLogin}
            alt="Project 1 Screenshot"
            className="rounded-lg w-full h-100 object-cover mb-4"
          />
          <h3 className="text-2xl font-semibold">EzShifts</h3>
          <p className="text-xl text-gray-600 dark:text-gray-400">Capstone project #1, EzShiftz was developed as an employee scheduling application that focused on ease-of-use and reliability. With EzShiftz, companies with employees who have varrying work hours are able to quickly set-up a workforce management system. This gives the ability to assign employees roles, develop and edit schedules, and manage time-off requests.<br></br><br></br>The backend was written n C#, using asp.net, and was developed in multiple sprints, we used Bitbucket as our version control software, along with jira to keep organization with tasks.</p>
          <a href="https://bitbucket.org/workspaceforschool/ctrlaltdeleteelite/src/master/" className="text-blue-500 mt-2 inline-block">View on Bitbucket</a>
        </div>
        <div className="border rounded-xl p-6 shadow-lg hover:scale-105 transition-transform bg-white dark:bg-gray-800">
          <img
            src={DiabeticRetinopathyDiagnosis}
            alt="Project 2 Screenshot"
            className="rounded-lg w-full h-100 object-cover mb-4"
          />
          <h3 className="text-2xl font-semibold">Automated Diabetic Retinopathy (DR) Screening System</h3>
          <p className="text-xl text-gray-600 dark:text-gray-400">Capstone project #2, provides an automated, screening system for diabetic retinopathy (DR) using deep learning, making early eye disease detection accessible in clinics without eye specialists. We used a CNN-based model, which analyzes high-resolution fundus images and patient data to classify DR severity and generate actionable reports. The platform allows clinicians to upload images, review AI-generated results, and receive recommendations through a secure web interface. <br></br><br></br>Ultimately, the goal is to support clinitions with early diagnosis, streamline patient referrals, and improve care for diabetic patients in areas where eye specialists aren't available.</p>
          <a href="#" className="text-blue-500 mt-2 inline-block">View on GitHub</a>
        </div>
        <div className="border rounded-xl p-6 shadow-lg hover:scale-105 transition-transform bg-white dark:bg-gray-800">
          <img
            src="/images/project3.jpg"
            alt="Project 3 Screenshot"
            className="rounded-lg w-full h-48 object-cover mb-4"
          />
          <h3 className="text-xl font-semibold">Project 3</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Project description placeholder.</p>
          <a href="#" className="text-blue-500 mt-2 inline-block">View on GitHub</a>
        </div>
        <div className="border rounded-xl p-6 shadow-lg hover:scale-105 transition-transform bg-white dark:bg-gray-800">
          <img
            src="/images/project4.jpg"
            alt="Project 4 Screenshot"
            className="rounded-lg w-full h-48 object-cover mb-4"
          />
          <h3 className="text-xl font-semibold">Project 4</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Project description placeholder.</p>
          <a href="#" className="text-blue-500 mt-2 inline-block">View on GitHub</a>
        </div>
      </div>
    </section>
  );
}

import hiking from './assets/hiking.jpg';
import hiking2 from './assets/hiking2.jpg';
import hiking3 from './assets/hiking3.jpg';
import hiking4 from './assets/hiking4.jpg';
import snowboarding from './assets/snowboarding.jpg';
import snowboarding2 from './assets/snowboarding2.jpg';
import snowboarding3 from './assets/snowboarding3.jpg';
import golf from './assets/golf.png';
import golf2 from './assets/golf2.png';
import hockey from './assets/hockey.png';
import hockey2 from './assets/hockey2.png';
import hockey3 from './assets/hockey3.png';
import hockey4 from './assets/hockey4.png';

const adventures = [
  {
    images: [hiking, hiking2, hiking3, hiking4],
    title: "Hiking Killarney Park",
    desc: "Over a weekend I went wilderness camping with friends, cooked our own food over a makeshift fire, and went kayaking on Lake George.",
    imgLeft: true,
  },
  {
    images: [snowboarding, snowboarding2, snowboarding3],
    title: "Snowboarding",
    desc: "Always has been one of my favourite things to do, this past winter I went up to Blue Mountain to get away from some of the more local spots.",
    imgLeft: false,
  },
  {
    images: [golf, golf2, hockey, hockey2, hockey3, hockey4],
    title: "Golf & Hockey",
    desc: "I love playing and watching golf, and also hockey when it gets cooler out. It's a perfect way to socialize and is engaging feeling the ups and downs of a round/game.",
    imgLeft: true,
  },
];

function AdventureCard({ images, title, desc, imgLeft }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handlePrev = () => {
    setDirection(-1);
    setIndex((idx) => (idx - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setDirection(1);
    setIndex((idx) => (idx + 1) % images.length);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    trackMouse: true,
  });

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      position: "absolute",
    }),
    center: { x: 0, opacity: 1, position: "static" },
    exit: (dir) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      position: "absolute",
    }),
  };

  return (
    <div className={`flex flex-col md:flex-row items-center md:justify-between gap-8 ${imgLeft ? "" : "md:flex-row-reverse"}`}>
      <div
        {...swipeHandlers}
        className="relative w-full md:w-2/5 h-134 flex justify-center items-center select-none overflow-hidden"
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={index}
            src={images[index]}
            alt={`${title} ${index + 1}`}
            className="rounded-2xl shadow-lg object-cover w-full h-120"
            draggable="false"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 400, damping: 35 },
              opacity: { duration: 0.2 },
            }}
          />
        </AnimatePresence>

        {/* Prev Button */}
        <button
          onClick={handlePrev}
          disabled={images.length <= 1}
          className="absolute left-2 top-1/2 -translate-y-1/2 !rounded-full w-14 h-14 text-white flex items-center justify-center z-10 transition hover:bg-opacity-40 disabled:opacity-30"
          style={{ background: "rgba(0, 0, 0, 0.3)" }}
          aria-label="Previous image"
        >
          <span className="opacity-90">{"<"}</span>
        </button>
        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={images.length <= 1}
          className="absolute right-2 top-1/2 -translate-y-1/2 !rounded-full w-14 h-14 text-white flex items-center justify-center z-10 transition hover:bg-opacity-40 disabled:opacity-30"
          style={{ background: "rgba(0, 0, 0, 0.3)" }}
          aria-label="Next image"
        >
          <span className="opacity-90">{">"}</span>
        </button>
        {/* Dots */}
        {images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`w-2 h-2 rounded-full inline-block ${idx === index ? "bg-emerald-500" : "bg-gray-300 dark:bg-gray-600"}`}
              />
            ))}
          </div>
        )}
      </div>
      {/* Text */}
      <div className="w-full md:w-3/5 text-left">
        <h4 className="text-3xl font-bold mb-2">{title}</h4>
        <p className="text-2xl text-gray-700 dark:text-gray-300">{desc}</p>
      </div>
    </div>
  );
}



function About() {
  
  const [activeTab, setActiveTab] = useState("professional");
  // Array used track the current image index per "activity"
  return (
    <section className="flex-grow px-8 py-16 font-body w-full max-w-7xl mx-auto">
      <h2 className="text-5xl font-bold text-center mb-8">About Me</h2>

      <div className="flex justify-center mb-6 space-x-4">
        <button
          onClick={() => setActiveTab("professional")}
          className={`px-6 py-2 rounded-lg font-semibold transition ${
            activeTab === "professional"
              ? "bg-emerald-500 text-white"
              : "bg-gray-200 dark:bg-gray-700"
          }`}
        >
          Professional
        </button>
        <button
          onClick={() => setActiveTab("personal")}
          className={`px-6 py-2 rounded-lg font-semibold transition ${
            activeTab === "personal"
              ? "bg-emerald-500 text-white"
              : "bg-gray-200 dark:bg-gray-700"
          }`}
        >
          Personal
        </button>
      </div>

      <div className="transition-all duration-300 ease-in-out">
        {activeTab === "professional" ? (
          <div className="text-2xl space-y-4 text-center">
            <p>
              I'm a software developer with interests in full-stack development and machine learning. I recently graduated from Conestoga College with a focus on building scalable applications and collaborating in Agile teams.
            </p>
            <p>
              I've built REST APIs, worked with React, and explored AI tools in projects. I enjoy turning complex problems into efficient solutions.
            </p>
          </div>
        ) : (
          <div className="text-2xl space-y-4 text-center">
            <p>
              When I'm not coding, I'll typically recharge by hiking, snowboarding, or just trying to be active with other physical activities.
            </p>
            <p>
              When I'm home, I love keeping up with emerging tech, and enjoy unwinding by reading tech blogs, or just watching how people use dev content in general.
            </p><br></br>
            <h3 className="text-3xl font-semibold text-center mb-8">Some Adventures</h3>
            {adventures.map((adventure, i) => (
              <AdventureCard key={i} {...adventure} />
            ))}
          </div>
        )}
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-2 text-center">Resume Preview:</h3>
        <iframe
          src={resume}
          title="Resume"
          className="w-full h-[1400px] border rounded-lg shadow-lg"
        ></iframe>
        <a
          href={resume}
          download
          className="inline-block mt-4 px-6 py-2 rounded dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="flex-grow space-y-4 px-8 py-16 font-body w-full max-w-2xl mx-auto text-center">
      <h2 className="text-3xl font-bold">Contact</h2>
      <form className="space-y-4 text-left">
        <input type="text" placeholder="Name" className="w-full p-2 rounded border dark:bg-gray-700" />
        <input type="email" placeholder="Email" className="w-full p-2 rounded border dark:bg-gray-700" />
        <textarea placeholder="Message" className="w-full p-2 rounded border dark:bg-gray-700" />
        <button className="px-4 py-2 bg-blue-500 text-white rounded">Send</button>
      </form>
      <div className="text-sm">
        <p>Email: nathan.w.garrity@outlook.com</p>
        <p>LinkedIn | GitHub</p>
      </div>
    </section>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <Router>
      <div className={`w-full min-h-screen flex flex-col ${darkMode ? "dark bg-gray-900 text-white" : "bg-white text-black"}`}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
