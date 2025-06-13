import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import pic from "./image2.png";
import { Link, useNavigate } from "react-router-dom";
export const HeroSection = () => {
  return (
    <div
      className="min-h-screen min-w-screen flex items-center justify-center px-4 relative overflow-hidden"
      style={{
        background: `#210636 url('./texture.png') repeat`,
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4b0082]/30 via-[#210636]/80 to-[#1a1a2e] z-0"></div>

      <motion.div
        className="container mx-auto text-center relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Central Image with Overlay */}
        <motion.div
          className="relative mb-8"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={pic}
            alt="Muhammad Taha"
            className="w-80 h-auto mx-auto rounded-lg shadow-lg z-10 relative"
            style={{ position: "relative", top: "-20px" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-[#4b0082] to-[#6a0dad] rounded-full flex items-center justify-center text-white font-bold text-2xl z-0"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            500+ Clients
          </motion.div>
        </motion.div>

        {/* Greeting and Info */}
        <motion.div
          className="text-white text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mt-2">
            Hi I am Muhammad Taha
          </h1>
          <p className="text-xl md:text-2xl mt-2">Full Stack Web Developer</p>
          <p className="text-sm md:text-base mt-4 text-[#7B837E]">
            Hi, I'm a passionate self-taught Full Stack Web Developer with
            expertise in HTML, CSS, JavaScript, and the MERN stack. Fueled by
            curiosity and YouTube tutorials, I'm on a mission to master web
            development and build innovative, user-friendly applications.
          </p>
        </motion.div>

        {/* Button and Social Icons */}
        <motion.div
          className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link to="/More">
            <motion.button
              className="bg-[#4b0082] text-black rounded-full px-6 py-2 font-semibold hover:bg-[#6a0dad] transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              More About Me
            </motion.button>
          </Link>

          <div className="flex gap-2 mt-2 md:mt-0">
            <motion.a
              whileHover={{ scale: 1.2, color: "#4b0082" }}
              transition={{ duration: 0.3 }}
              href="https://www.facebook.com/taha.bhai.940098"
              target="top"
            >
              <FaFacebook size={20} color="white" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, color: "#4b0082" }}
              transition={{ duration: 0.3 }}
              target="top"
              href="https://www.instagram.com/mohammad_tahaa101/?utm_source=qr&igsh=MTFjczE0MWo2cTc5NA%3D%3D#"
            >
              <FaInstagram size={20} color="white" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, color: "#4b0082" }}
              transition={{ duration: 0.3 }}
              target="top"
              href="https://www.linkedin.com/in/muhammad-taha-attique-3102b736b/?trk=opento_sprofile_topcard"
            >
              <FaLinkedin size={20} color="white" />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      {/* Overlay Text "DREAMER" */}
      <motion.div
        className="absolute top-1/4 left-0 text-[150px] font-bold text-[#4b0082]/20 transform -rotate-90 origin-top-left z-0"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 0.5 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        DREAMER
      </motion.div>
    </div>
  );
};
