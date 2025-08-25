"use client";
import { motion } from "framer-motion";
import pic from "./myimage.png";

export const AboutSection = () => {
  return (
    <section className="relative min-h-screen min-w-full bg-[#210636] py-20">
      {/* Ambient gradients matching hero */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 -left-28 h-80 w-80 rounded-full bg-[#4b0082]/30 blur-3xl"></div>
        <div className="absolute -bottom-28 -right-28 h-96 w-96 rounded-full bg-[#6a0dad]/30 blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        {/* Left: Glowing framed image */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="relative rounded-3xl p-[3px]">
            <div className="absolute inset-0 -z-10 animate-[spin_12s_linear_infinite] rounded-3xl bg-[conic-gradient(from_0deg,rgba(75,0,130,0.35),rgba(106,13,173,0.35),rgba(75,0,130,0.35))]"></div>
            <div className="relative rounded-3xl bg-[#15072b]/70 p-3 ring-1 ring-white/10 backdrop-blur-lg shadow-2xl">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={pic}
                  alt="Muhammad Taha"
                  className="h-auto w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Decorative orbs */}
          <div className="pointer-events-none absolute -left-6 -top-6 h-24 w-24 rounded-full bg-[#4b0082]/30 blur-2xl"></div>
          <div className="pointer-events-none absolute -bottom-8 -right-6 h-24 w-24 rounded-full bg-[#6a0dad]/30 blur-2xl"></div>
        </motion.div>

        {/* Right: Text content and buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center md:text-left"
        >
          <h2 className="text-4xl font-extrabold leading-tight text-white md:text-5xl">
            <span className="block bg-gradient-to-r from-white via-[#cbb6ff] to-white bg-clip-text text-transparent">
              Muhammad Taha
            </span>
          </h2>
          <p className="mt-2 text-lg font-semibold text-[#cdb4ff] md:text-xl">
            A Bit About Me
          </p>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-[#E9D1FF]/90 md:text-base">
            I’m Muhammad Taha Attique, a passionate self-taught web developer
            with 1.5 years of experience, specializing in both frontend and
            backend development. I’ve honed my skills through platforms like
            YouTube and a comprehensive paid course from Apna College, focusing
            on the MERN stack to build dynamic and responsive web applications
            from scratch. I thrive on transforming ideas into functional,
            user-friendly solutions, blending creativity with technical
            precision. My journey reflects a relentless drive for learning and
            innovation, making me a versatile developer ready to tackle diverse
            projects with confidence.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-col items-center gap-4 md:flex-row md:items-center"
          >
            <a href="Taha Resume.pdf" download className="group inline-flex">
              <span className="relative inline-flex items-center justify-center overflow-hidden rounded-full p-[2px]">
                <span className="absolute inset-0 -z-10 animate-[spin_6s_linear_infinite] rounded-full bg-[conic-gradient(from_0deg,rgba(75,0,130,0.6),rgba(106,13,173,0.6),rgba(75,0,130,0.6))]"></span>
                <span className="relative rounded-full bg-[#120626] px-6 py-2 text-sm font-semibold text-white shadow-lg ring-1 ring-white/10 transition-colors group-hover:bg-[#1b0a33]">
                  Download Resume
                </span>
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
