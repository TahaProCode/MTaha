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
    <div className="bg-[#210635] text-[#F5D5E0] py-12 min-h-screen min-w-screen flex flex-col items-center justify-center">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          My Work Skills
        </motion.h2>
        <motion.p
          className="text-[#7B837E] text-center mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Here is my Skills Rack Elaborates my skills and expertise in web
          development, including front-end and back-end technologies.
        </motion.p>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
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
            className="bg-[#420D4B] p-6 rounded-lg flex flex-col items-center shadow-lg"
            variants={{
              hidden: { y: 50, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <FaHtml5 size={50} color="#F5D5E0" />
            <h3 className="text-lg font-semibold mb-2">HTML</h3>
            <div className="w-full bg-[#6667AB] rounded-full h-2.5">
              <div
                className="bg-[#F5D5E0] h-2.5 rounded-full"
                style={{ width: "90%" }}
              ></div>
            </div>
            <p className="text-[#F5D5E0] mt-2">90%</p>
          </motion.div>

          {/* Skill 2: Tailwind CSS */}
          <motion.div
            className="bg-[#420D4B] p-6 rounded-lg flex flex-col items-center shadow-lg"
            variants={{
              hidden: { y: 50, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <RiTailwindCssFill size={50} color="#F5D5E0" />
            <h3 className="text-lg font-semibold mb-2">Tailwind Css</h3>
            <div className="w-full bg-[#6667AB] rounded-full h-2.5">
              <div
                className="bg-[#F5D5E0] h-2.5 rounded-full"
                style={{ width: "85%" }}
              ></div>
            </div>
            <p className="text-[#F5D5E0] mt-2">85%</p>
          </motion.div>

          {/* Skill 3: JavaScript */}
          <motion.div
            className="bg-[#420D4B] p-6 rounded-lg flex flex-col items-center shadow-lg"
            variants={{
              hidden: { y: 50, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <IoLogoJavascript size={50} color="#F5D5E0" />
            <h3 className="text-lg font-semibold mb-2">JavaScript</h3>
            <div className="w-full bg-[#6667AB] rounded-full h-2.5">
              <div
                className="bg-[#F5D5E0] h-2.5 rounded-full"
                style={{ width: "70%" }}
              ></div>
            </div>
            <p className="text-[#F5D5E0] mt-2">70%</p>
          </motion.div>

          {/* Skill 4: React */}
          <motion.div
            className="bg-[#420D4B] p-6 rounded-lg flex flex-col items-center shadow-lg"
            variants={{
              hidden: { y: 50, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <FaReact size={50} color="#F5D5E0" />
            <h3 className="text-lg font-semibold mb-2">React</h3>
            <div className="w-full bg-[#6667AB] rounded-full h-2.5">
              <div
                className="bg-[#F5D5E0] h-2.5 rounded-full"
                style={{ width: "60%" }}
              ></div>
            </div>
            <p className="text-[#F5D5E0] mt-2">60%</p>
          </motion.div>

          {/* Skill 5: Express */}
          <motion.div
            className="bg-[#420D4B] p-6 rounded-lg flex flex-col items-center shadow-lg"
            variants={{
              hidden: { y: 50, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <SiExpress size={50} color="#F5D5E0" />
            <h3 className="text-lg font-semibold mb-2">Express</h3>
            <div className="w-full bg-[#6667AB] rounded-full h-2.5">
              <div
                className="bg-[#F5D5E0] h-2.5 rounded-full"
                style={{ width: "45%" }}
              ></div>
            </div>
            <p className="text-[#F5D5E0] mt-2">45%</p>
          </motion.div>

          {/* Skill 6: NodeJS */}
          <motion.div
            className="bg-[#420D4B] p-6 rounded-lg flex flex-col items-center shadow-lg"
            variants={{
              hidden: { y: 50, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <FaNode size={50} color="#F5D5E0" />
            <h3 className="text-lg font-semibold mb-2">NodeJS</h3>
            <div className="w-full bg-[#6667AB] rounded-full h-2.5">
              <div
                className="bg-[#F5D5E0] h-2.5 rounded-full"
                style={{ width: "50%" }}
              ></div>
            </div>
            <p className="text-[#F5D5E0] mt-2">50%</p>
          </motion.div>

          {/* Skill 7: MongoDB */}
          <motion.div
            className="bg-[#420D4B] p-6 rounded-lg flex flex-col items-center shadow-lg"
            variants={{
              hidden: { y: 50, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <DiMongodb size={50} color="#F5D5E0" />
            <h3 className="text-lg font-semibold mb-2">MongoDb</h3>
            <div className="w-full bg-[#6667AB] rounded-full h-2.5">
              <div
                className="bg-[#F5D5E0] h-2.5 rounded-full"
                style={{ width: "30%" }}
              ></div>
            </div>
            <p className="text-[#F5D5E0] mt-2">30%</p>
          </motion.div>

          {/* Skill 8: NextJs */}
          <motion.div
            className="bg-[#420D4B] p-6 rounded-lg flex flex-col items-center shadow-lg"
            variants={{
              hidden: { y: 50, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <RiNextjsFill size={50} color="#F5D5E0" />
            <h3 className="text-lg font-semibold mb-2">NextJs</h3>
            <div className="w-full bg-[#6667AB] rounded-full h-2.5">
              <div
                className="bg-[#F5D5E0] h-2.5 rounded-full"
                style={{ width: "40%" }}
              ></div>
            </div>
            <p className="text-[#F5D5E0] mt-2">40%</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsSection;
