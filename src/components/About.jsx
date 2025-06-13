"use client";
import { motion } from "framer-motion";
import pic from "./myimage.png";
export const AboutSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-6 bg-[#210636] min-w-screen">
      {/* Left Side - Image Placeholder */}
      <motion.div
        className="w-74 h-74 mb-6 md:mb-0 md:mr-8"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-full h-full rounded-full bg-[#6667AB] animate-pulse">
          <img src={pic} alt="pic" />
        </div>
      </motion.div>

      {/* Right Side - Text and Buttons */}
      <motion.div
        className="text-center md:text-left"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#F5D5E0]">
          Muhammad Taha
        </h1>
        <h2 className="text-lg md:text-xl font-semibold mb-6 text-[#F5D5E0]">
          A Bit About Me
        </h2>
        <p className="text-base md:text-lg mb-8 max-w-md text-[#F5D5E0]">
          I’m Muhammad Taha Attique, a passionate self-taught web developer with
          1.5 years of experience, specializing in both frontend and backend
          development. I’ve honed my skills through platforms like YouTube and a
          comprehensive paid course from Apna College, focusing on the MERN
          stack to build dynamic and responsive web applications from scratch. I
          thrive on transforming ideas into functional, user-friendly solutions,
          blending creativity with technical precision. My journey reflects a
          relentless drive for learning and innovation, making me a versatile
          developer ready to tackle diverse projects with confidence.
        </p>
        <motion.div
          className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center md:justify-start"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button className="bg-[#F5D5E0] text-[#6667AB] rounded-full py-2 px-6 hover:bg-[#420D4B] transition duration-300">
            <a href="Taha Resume.pdf" download>
              Resume
            </a>
          </button>
          <button className="bg-[#F5D5E0] text-[#6667AB] rounded-full py-2 px-6 hover:bg-[#420D4B] transition duration-300">
            Research
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};
