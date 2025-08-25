import { motion } from "framer-motion";
import pic from "./image2.png";

export const MoreInfoSection = () => {
  return (
    <section
      className="relative overflow-hidden min-h-screen min-w-screen flex items-center justify-center px-4 py-20"
      style={{ background: `#210636` }}
    >
      {/* background layers */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#4b0082]/30 via-[#210636]/80 to-[#1a1a2e]"></div>
      <div className="pointer-events-none absolute -top-40 -left-40 w-[36rem] h-[36rem] rounded-full bg-[#6a0dad]/30 blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-48 -right-48 w-[36rem] h-[36rem] rounded-full bg-[#4b0082]/20 blur-3xl"></div>

      <motion.div
        className="container mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* content column */}
        <div className="space-y-8">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#F5D5E0]"
            initial={{ y: -16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            More Info About Me
          </motion.h2>

          {/* cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-[#6a0dad] via-transparent to-[#4b0082]"
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="rounded-2xl h-full bg-[#420D4B]/70 backdrop-blur-md p-6 shadow-xl transition-transform duration-300 group-hover:-translate-y-1">
                <h3 className="text-xl font-semibold text-[#F5D5E0] mb-3">
                  Education & Experience
                </h3>
                <p className="text-[#F5D5E0]/90">
                  <span className="font-semibold">Education:</span> Intermediate
                  in Computer Science, Punjab College, 2023-2025
                  <br />
                  Learning Web Development.
                </p>
                <p className="text-[#F5D5E0] mt-4">
                  <span className="font-semibold">Experience:</span> Self
                  Learning Expiernce from Youtube
                  <br />
                  Developed and maintained responsive websites
                  <br />
                  Completed 10+ projects for self learning, enhancing user
                  experience by 40%.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-[#6a0dad] via-transparent to-[#4b0082]"
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="rounded-2xl h-full bg-[#420D4B]/70 backdrop-blur-md p-6 shadow-xl transition-transform duration-300 group-hover:-translate-y-1">
                <h3 className="text-xl font-semibold text-[#F5D5E0] mb-3">
                  Strengths & Skills
                </h3>
                <ul className="text-[#F5D5E0] list-disc list-inside space-y-1">
                  <li>Proficient in HTML, JavaScript, and CSS</li>
                  <li>Strong problem-solving and debugging skills</li>
                  <li>Excellent communication and collaboration abilities</li>
                </ul>
                <p className="text-[#F5D5E0] mt-4">
                  <span className="font-semibold">Certifications:</span>{" "}
                  Certified Web Developer, 2025
                  <br />
                  Apna College
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-[#6a0dad] via-transparent to-[#4b0082]"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="rounded-2xl bg-[#420D4B]/70 backdrop-blur-md p-6 shadow-xl">
              <h3 className="text-xl font-semibold text-[#F5D5E0] mb-3">
                Additional Info
              </h3>
              <p className="text-[#F5D5E0]">
                I enjoy exploring new technologies and contributing to
                open-source projects in my free time. My hobbies include Book
                reading and playing videogames, which help sharpen my creative
                and strategic thinking.
              </p>
            </div>
          </motion.div>
        </div>

        {/* image / visual column */}
        <motion.div
          className="relative flex items-center justify-center"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-[#4b0082] via-[#6a0dad] to-[#4b0082] blur-xl opacity-60 animate-pulse"></div>
            <div className="relative rounded-[2rem] p-2 bg-[#210636]/60 backdrop-blur-md ring-1 ring-white/10 shadow-2xl">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={pic}
                  alt="Muhammad Taha"
                  className="w-[22rem] md:w-[26rem] h-auto object-cover rounded-2xl"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#210636]/50 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>

          {/* floating particles */}
          <motion.span
            className="hidden md:block absolute -top-8 -right-6 w-28 h-28 rounded-full bg-[#6a0dad]/40 blur-xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.span
            className="hidden md:block absolute bottom-10 -left-6 w-20 h-20 rounded-full bg-[#4b0082]/40 blur-xl"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 7, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MoreInfoSection;
