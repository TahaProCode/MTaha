"use client";
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaNode } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { motion } from "framer-motion";

export const SkillsSection = () => {
  return (
    <section className="relative min-h-screen min-w-screen bg-[#210636] py-20">
      {/* Ambient gradients matching theme */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 -left-28 h-80 w-80 rounded-full bg-[#4b0082]/30 blur-3xl"></div>
        <div className="absolute -bottom-28 -right-28 h-96 w-96 rounded-full bg-[#6a0dad]/30 blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.h2
          className="mb-3 text-center text-4xl font-extrabold text-white md:text-5xl"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-gradient-to-r from-white via-[#cbb6ff] to-white bg-clip-text text-transparent">
            My Work Skills
          </span>
        </motion.h2>
        <motion.p
          className="mx-auto mb-10 max-w-3xl text-center text-[#A6A9B0]"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Here is my Skills Rack elaborating my expertise across front‑end and
          back‑end technologies.
        </motion.p>
        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {/* Skill 1: HTML */}
          <motion.div
            className="group relative flex flex-col items-center overflow-hidden rounded-2xl p-[2px]"
            variants={{
              hidden: { y: 50, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 -z-10 animate-[spin_12s_linear_infinite] rounded-2xl bg-[conic-gradient(from_0deg,rgba(75,0,130,0.25),rgba(106,13,173,0.25),rgba(75,0,130,0.25))]"></div>
            <div className="relative z-10 flex w-full flex-col items-center rounded-2xl bg-[#16072c]/80 p-6 ring-1 ring-white/10 backdrop-blur">
              <FaHtml5 size={50} color="#F5D5E0" />
              <h3 className="mb-2 text-lg font-semibold text-white">HTML</h3>
              <div className="h-2.5 w-full rounded-full bg-white/10">
                <div
                  className="h-2.5 rounded-full bg-gradient-to-r from-[#4b0082] to-[#6a0dad]"
                  style={{ width: "90%" }}
                ></div>
              </div>
              <p className="mt-2 text-[#E9D1FF]">90%</p>
            </div>
          </motion.div>

          {/* Skill 2: Tailwind CSS */}
          <motion.div
            className="group relative flex flex-col items-center overflow-hidden rounded-2xl p-[2px]"
            variants={{
              hidden: { y: 50, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 -z-10 animate-[spin_12s_linear_infinite] rounded-2xl bg-[conic-gradient(from_0deg,rgba(75,0,130,0.25),rgba(106,13,173,0.25),rgba(75,0,130,0.25))]"></div>
            <div className="relative z-10 flex w-full flex-col items-center rounded-2xl bg-[#16072c]/80 p-6 ring-1 ring-white/10 backdrop-blur">
              <RiTailwindCssFill size={50} color="#F5D5E0" />
              <h3 className="mb-2 text-lg font-semibold text-white">
                Tailwind Css
              </h3>
              <div className="h-2.5 w-full rounded-full bg-white/10">
                <div
                  className="h-2.5 rounded-full bg-gradient-to-r from-[#4b0082] to-[#6a0dad]"
                  style={{ width: "85%" }}
                ></div>
              </div>
              <p className="mt-2 text-[#E9D1FF]">85%</p>
            </div>
          </motion.div>

          {/* Skill 3: JavaScript */}
          <motion.div
            className="group relative flex flex-col items-center overflow-hidden rounded-2xl p-[2px]"
            variants={{
              hidden: { y: 50, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 -z-10 animate-[spin_12s_linear_infinite] rounded-2xl bg-[conic-gradient(from_0deg,rgba(75,0,130,0.25),rgba(106,13,173,0.25),rgba(75,0,130,0.25))]"></div>
            <div className="relative z-10 flex w-full flex-col items-center rounded-2xl bg-[#16072c]/80 p-6 ring-1 ring-white/10 backdrop-blur">
              <IoLogoJavascript size={50} color="#F5D5E0" />
              <h3 className="mb-2 text-lg font-semibold text-white">
                JavaScript
              </h3>
              <div className="h-2.5 w-full rounded-full bg-white/10">
                <div
                  className="h-2.5 rounded-full bg-gradient-to-r from-[#4b0082] to-[#6a0dad]"
                  style={{ width: "70%" }}
                ></div>
              </div>
              <p className="mt-2 text-[#E9D1FF]">70%</p>
            </div>
          </motion.div>

          {/* Skill 4: React */}
          <motion.div
            className="group relative flex flex-col items-center overflow-hidden rounded-2xl p-[2px]"
            variants={{
              hidden: { y: 50, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 -z-10 animate-[spin_12s_linear_infinite] rounded-2xl bg-[conic-gradient(from_0deg,rgba(75,0,130,0.25),rgba(106,13,173,0.25),rgba(75,0,130,0.25))]"></div>
            <div className="relative z-10 flex w-full flex-col items-center rounded-2xl bg-[#16072c]/80 p-6 ring-1 ring-white/10 backdrop-blur">
              <FaReact size={50} color="#F5D5E0" />
              <h3 className="mb-2 text-lg font-semibold text-white">React</h3>
              <div className="h-2.5 w-full rounded-full bg-white/10">
                <div
                  className="h-2.5 rounded-full bg-gradient-to-r from-[#4b0082] to-[#6a0dad]"
                  style={{ width: "60%" }}
                ></div>
              </div>
              <p className="mt-2 text-[#E9D1FF]">60%</p>
            </div>
          </motion.div>

          {/* Skill 5: Express */}
          <motion.div
            className="group relative flex flex-col items-center overflow-hidden rounded-2xl p-[2px]"
            variants={{
              hidden: { y: 50, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 -z-10 animate-[spin_12s_linear_infinite] rounded-2xl bg-[conic-gradient(from_0deg,rgba(75,0,130,0.25),rgba(106,13,173,0.25),rgba(75,0,130,0.25))]"></div>
            <div className="relative z-10 flex w-full flex-col items-center rounded-2xl bg-[#16072c]/80 p-6 ring-1 ring-white/10 backdrop-blur">
              <SiExpress size={50} color="#F5D5E0" />
              <h3 className="mb-2 text-lg font-semibold text-white">Express</h3>
              <div className="h-2.5 w-full rounded-full bg-white/10">
                <div
                  className="h-2.5 rounded-full bg-gradient-to-r from-[#4b0082] to-[#6a0dad]"
                  style={{ width: "45%" }}
                ></div>
              </div>
              <p className="mt-2 text-[#E9D1FF]">45%</p>
            </div>
          </motion.div>

          {/* Skill 6: NodeJS */}
          <motion.div
            className="group relative flex flex-col items-center overflow-hidden rounded-2xl p-[2px]"
            variants={{
              hidden: { y: 50, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 -z-10 animate-[spin_12s_linear_infinite] rounded-2xl bg-[conic-gradient(from_0deg,rgba(75,0,130,0.25),rgba(106,13,173,0.25),rgba(75,0,130,0.25))]"></div>
            <div className="relative z-10 flex w-full flex-col items-center rounded-2xl bg-[#16072c]/80 p-6 ring-1 ring-white/10 backdrop-blur">
              <FaNode size={50} color="#F5D5E0" />
              <h3 className="mb-2 text-lg font-semibold text-white">NodeJS</h3>
              <div className="h-2.5 w-full rounded-full bg-white/10">
                <div
                  className="h-2.5 rounded-full bg-gradient-to-r from-[#4b0082] to-[#6a0dad]"
                  style={{ width: "50%" }}
                ></div>
              </div>
              <p className="mt-2 text-[#E9D1FF]">50%</p>
            </div>
          </motion.div>

          {/* Skill 7: MongoDB */}
          <motion.div
            className="group relative flex flex-col items-center overflow-hidden rounded-2xl p-[2px]"
            variants={{
              hidden: { y: 50, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 -z-10 animate-[spin_12s_linear_infinite] rounded-2xl bg-[conic-gradient(from_0deg,rgba(75,0,130,0.25),rgba(106,13,173,0.25),rgba(75,0,130,0.25))]"></div>
            <div className="relative z-10 flex w-full flex-col items-center rounded-2xl bg-[#16072c]/80 p-6 ring-1 ring-white/10 backdrop-blur">
              <DiMongodb size={50} color="#F5D5E0" />
              <h3 className="mb-2 text-lg font-semibold text-white">MongoDb</h3>
              <div className="h-2.5 w-full rounded-full bg-white/10">
                <div
                  className="h-2.5 rounded-full bg-gradient-to-r from-[#4b0082] to-[#6a0dad]"
                  style={{ width: "30%" }}
                ></div>
              </div>
              <p className="mt-2 text-[#E9D1FF]">30%</p>
            </div>
          </motion.div>

          {/* Skill 8: NextJs */}
          <motion.div
            className="group relative flex flex-col items-center overflow-hidden rounded-2xl p-[2px]"
            variants={{
              hidden: { y: 50, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 -z-10 animate-[spin_12s_linear_infinite] rounded-2xl bg-[conic-gradient(from_0deg,rgba(75,0,130,0.25),rgba(106,13,173,0.25),rgba(75,0,130,0.25))]"></div>
            <div className="relative z-10 flex w-full flex-col items-center rounded-2xl bg-[#16072c]/80 p-6 ring-1 ring-white/10 backdrop-blur">
              <RiNextjsFill size={50} color="#F5D5E0" />
              <h3 className="mb-2 text-lg font-semibold text-white">NextJs</h3>
              <div className="h-2.5 w-full rounded-full bg-white/10">
                <div
                  className="h-2.5 rounded-full bg-gradient-to-r from-[#4b0082] to-[#6a0dad]"
                  style={{ width: "40%" }}
                ></div>
              </div>
              <p className="mt-2 text-[#E9D1FF]">40%</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
