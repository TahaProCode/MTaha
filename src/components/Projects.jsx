import { motion, useAnimation } from "framer-motion";
import { FaPlay, FaPause, FaRedo } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

import Docsmini from "./docsmini.png";
import lightSaasLandingPage from "./hms cs.png";
import aiStartupLandingPage from "./lazarev.png";
import Docsdark from "./ai.png";
import GrocerApp from "./grocerapp.png";

const projects = [
  {
    company: "Learning Purpose",
    year: "2024",
    title: "Docs-mini App",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: Docsmini,
  },
  {
    company: "Lazarev Animated Website",
    year: "2024",
    title: "Lazarev Animated Website",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
  {
    company: "Hospitals Management System",
    year: "2025",
    title: "HMS Admin Panel",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://hmshospitalmanagementsystem.netlify.app/",
    image: lightSaasLandingPage,
  },

  {
    company: "Grocer App E-commerce store",
    year: "2023",
    title: "Mern Stack E-commerce Store",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://grocerapp.netlify.app/",
    image: GrocerApp,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

// Extend to 9 by repeating the first three items
const extendedProjects = [...projects, ...projects.slice(0, 3)];

export const ProjectsSection = () => {
  const controls = useAnimation();
  const trackRef = useRef(null);
  const [maxX, setMaxX] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const containerWidth = el.parentElement?.offsetWidth || 0;
    const contentWidth = el.scrollWidth || 0;
    const delta = Math.max(0, contentWidth - containerWidth);
    setMaxX(delta);
  }, [trackRef]);

  useEffect(() => {
    if (!maxX) return;
    controls.start({
      x: [0, -maxX],
      transition: {
        duration: Math.max(12, maxX / 100),
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [controls, maxX]);

  useEffect(() => {
    if (isHovering) {
      controls.stop();
    } else if (maxX) {
      controls.start({
        x: [0, -maxX],
        transition: {
          duration: Math.max(12, maxX / 100),
          ease: "linear",
          repeat: Infinity,
        },
      });
    }
  }, [isHovering, controls, maxX]);

  return (
    <section className="relative min-w-screen bg-[#210636] py-24">
      {/* Ambient gradients matching hero */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#4b0082]/30 blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-[#6a0dad]/30 blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.h2
          className="mb-14 text-center text-5xl font-extrabold text-white md:text-6xl"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Best Ever Projects
        </motion.h2>

        {/* Slider Shell */}
        <div className="relative">
          {/* Glow ring */}
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-r from-[#4b0082]/20 via-transparent to-[#6a0dad]/20 blur-xl"></div>

          {/* Masked overflow container */}
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <motion.div
              ref={trackRef}
              className="flex select-none gap-8"
              drag="x"
              dragConstraints={{ left: -maxX, right: 0 }}
              dragTransition={{ bounceStiffness: 200, bounceDamping: 20 }}
              animate={controls}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {extendedProjects.map((project, index) => (
                <motion.a
                  key={index}
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative w-[380px] shrink-0 overflow-hidden rounded-2xl"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Animated gradient border */}
                  <div className="absolute inset-0 -z-10 rounded-2xl p-[2px]">
                    <div className="absolute inset-0 -z-10 animate-[spin_10s_linear_infinite] rounded-2xl bg-[conic-gradient(from_0deg,rgba(75,0,130,0.35),rgba(106,13,173,0.35),rgba(75,0,130,0.35))]"></div>
                  </div>
                  <div className="relative rounded-2xl bg-[#16072c]/80 ring-1 ring-white/10">
                    <div className="relative h-72 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70"></div>
                      <motion.div
                        className="absolute inset-0 grid place-items-center bg-[#6667AB]/60 opacity-0 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.25 }}
                      >
                        <span className="rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-[#F5D5E0] ring-1 ring-white/20">
                          View Project
                        </span>
                      </motion.div>
                    </div>
                    <div className="space-y-3 p-5">
                      <h3 className="text-xl font-bold text-white">
                        {project.title}
                      </h3>
                      <p className="text-sm text-[#A6A9B0]">
                        {project.company} - {project.year}
                      </p>
                      <ul className="mt-2 space-y-1">
                        {project.results.map((result, idx) => (
                          <li key={idx} className="text-sm text-[#E9D1FF]">
                            {result.title}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <span
              onClick={() => controls.start({ x: 0 })}
              className="relative inline-flex items-center gap-2 rounded-full text-white bg-[#120626] px-5 py-2.5 ring-1 ring-white/10 transition-colors group-hover:bg-[#1b0a33]"
            >
              <FaRedo className="opacity-90" />
              Reset
            </span>

            <span
              onClick={() => controls.stop()}
              className="relative inline-flex items-center gap-2 rounded-full text-white bg-[#120626] px-5 py-2.5 ring-1 ring-white/10 transition-colors group-hover:bg-[#1b0a33]"
            >
              <FaPause className="opacity-90" />
              Pause
            </span>

            <span
              onClick={() => {
                if (!maxX) return;
                controls.start({
                  x: [0, -maxX],
                  transition: {
                    duration: Math.max(12, maxX / 100),
                    ease: "linear",
                    repeat: Infinity,
                  },
                });
              }}
              className="relative inline-flex items-center gap-2 rounded-full text-white bg-[#120626] px-5 py-2.5 ring-1 ring-white/10 transition-colors group-hover:bg-[#1b0a33]"
            >
              <FaPlay className="opacity-90" />
              Play
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
