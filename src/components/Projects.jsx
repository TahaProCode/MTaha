import { motion } from "framer-motion";
import { useState } from "react";

import Docsmini from "./docsmini.png";
import lightSaasLandingPage from "./hms cs.png";
import aiStartupLandingPage from "./lazarev.png";
import GrocerApp from "./grocer.png";

// Define the base projects
const baseProjects = [
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
];

// Create 9 projects by tripling the base projects
const projects = [
  ...baseProjects,
  ...baseProjects.map((project, index) => ({
    ...project,
    title: `${project.title} (v2)`,
    company: `${project.company} - Variant 2`,
    link: `${project.link}?variant=2-${index}`,
  })),
  ...baseProjects.map((project, index) => ({
    ...project,
    title: `${project.title} (v3)`,
    company: `${project.company} - Variant 3`,
    link: `${project.link}?variant=3-${index}`,
  })),
];

export const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section className="relative min-w-screen bg-[#210636] py-20 md:py-24">
      {/* Ambient gradients matching hero */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#4b0082]/30 blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-[#6a0dad]/30 blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.h2
          className="mb-12 md:mb-14 text-center text-5xl font-extrabold text-white md:text-6xl"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Best Ever Projects
        </motion.h2>

        {/* Grid Container */}
        <div className="relative">
          {/* Glow ring */}
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-gradient-to-r from-[#4b0082]/20 via-transparent to-[#6a0dad]/20 blur-xl"></div>

          {/* Grid wrapper with styling */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur">
            <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {visibleProjects.map((project, index) => (
                <motion.a
                  key={index}
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative w-full overflow-hidden rounded-2xl"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Animated gradient border */}
                  <div className="absolute inset-0 -z-10 rounded-2xl p-[2px]">
                    <div className="absolute inset-0 -z-10 animate-[spin_10s_linear_infinite] rounded-2xl bg-[conic-gradient(from_0deg,rgba(75,0,130,0.35),rgba(106,13,173,0.35),rgba(75,0,130,0.35))]"></div>
                  </div>
                  <div className="relative rounded-2xl bg-[#16072c]/80 ring-1 ring-white/10">
                    <div className="relative h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden">
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
            </div>
          </div>

          {/* Show More Button */}
          {!showAll && (
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => setShowAll(true)}
                className="relative inline-flex items-center gap-2 rounded-full bg-[#120626] px-6 py-3 text-lg font-semibold text-black ring-1 ring-white/10 transition-colors hover:bg-[#1b0a33]"
              >
                Show more
              </button>
            </div>
          )}
          {showAll && (
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => setShowAll(false)}
                className="relative inline-flex items-center gap-2 rounded-full bg-[#120626] px-6 py-3 text-lg font-semibold text-black ring-1 ring-white/10 transition-colors hover:bg-[#1b0a33]"
              >
                Show Less
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
