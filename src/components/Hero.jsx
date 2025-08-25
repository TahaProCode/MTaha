import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import pic from "./image2.png";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#210636]">
      {/* Radiant background gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-[#4b0082]/40 blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[#6a0dad]/40 blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(33,6,54,0.0),rgba(26,26,46,0.9))]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 md:py-32">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left: Text */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 shadow-sm backdrop-blur">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#6a0dad]"></span>
              <span>Available for work</span>
            </div>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white md:text-6xl">
              Hi I am
              <span className="block bg-gradient-to-r from-white via-[#cbb6ff] to-white bg-clip-text text-transparent">
                Muhammad Taha
              </span>
            </h1>

            <p className="mt-4 text-xl font-semibold text-[#cdb4ff] md:text-2xl">
              Junior Full Stack Developer
            </p>

            <p className="mt-5 max-w-2xl text-sm leading-6 text-[#A6A9B0] md:text-base">
              Hi, I'm a passionate self-taught Full Stack Web Developer with
              expertise in HTML, CSS, JavaScript, and the MERN stack.
              <br /> Fueled by curiosity and YouTube tutorials, I'm on a mission
              to master web development and build innovative, user-friendly
              applications.
            </p>

            <div className="mt-8 flex flex-col items-center gap-5 md:flex-row md:items-center">
              <Link to="/More" className="group inline-flex">
                <motion.span
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative inline-flex items-center justify-center overflow-hidden rounded-full p-[2px]"
                >
                  <span className="absolute inset-0 -z-10 animate-[spin_6s_linear_infinite] rounded-full bg-[conic-gradient(from_0deg,rgba(75,0,130,0.6),rgba(106,13,173,0.6),rgba(75,0,130,0.6))]"></span>
                  <span className="relative rounded-full bg-[#120626] px-6 py-2 text-sm font-semibold text-white shadow-lg ring-1 ring-white/10 transition-colors group-hover:bg-[#1b0a33]">
                    More About Me
                  </span>
                </motion.span>
              </Link>

              <div className="flex items-center gap-3">
                <motion.a
                  whileHover={{ y: -2, scale: 1.05 }}
                  href="https://www.facebook.com/taha.bhai.940098"
                  target="top"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white shadow ring-1 ring-white/10 transition hover:bg-white/10"
                >
                  <FaFacebook size={18} />
                </motion.a>
                <motion.a
                  whileHover={{ y: -2, scale: 1.05 }}
                  target="top"
                  href="https://www.instagram.com/mohammad_tahaa101/?utm_source=qr&igsh=MTFjczE0MWo2cTc5NA%3D%3D#"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white shadow ring-1 ring-white/10 transition hover:bg-white/10"
                >
                  <FaInstagram size={18} />
                </motion.a>
                <motion.a
                  whileHover={{ y: -2, scale: 1.05 }}
                  target="top"
                  href="https://www.linkedin.com/in/muhammad-taha-attique-3102b736b/?trk=opento_sprofile_topcard"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white shadow ring-1 ring-white/10 transition hover:bg-white/10"
                >
                  <FaLinkedin size={18} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="relative rounded-2xl p-[2px]">
              <div className="absolute inset-0 -z-10 animate-[spin_12s_linear_infinite] rounded-2xl bg-[conic-gradient(from_0deg,rgba(75,0,130,0.35),rgba(106,13,173,0.35),rgba(75,0,130,0.35))]"></div>
              <div className="relative rounded-2xl bg-[#14072a]/70 p-2 backdrop-blur-lg ring-1 ring-white/10 shadow-2xl">
                <img
                  src={pic}
                  alt="Muhammad Taha"
                  className="mx-auto h-auto w-full rounded-xl object-cover shadow-lg"
                />
              </div>
            </div>

            {/* Glowing orbs */}
            <div className="pointer-events-none absolute -left-6 -top-6 h-24 w-24 rounded-full bg-[#4b0082]/40 blur-2xl"></div>
            <div className="pointer-events-none absolute -bottom-8 -right-6 h-24 w-24 rounded-full bg-[#6a0dad]/40 blur-2xl"></div>
          </motion.div>
        </div>
      </div>

      {/* Vertical watermark text */}
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 0.5 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 text-7xl font-black tracking-tight text-[#4b0082]/20 md:text-[10rem]"
      >
        DREAMER
      </motion.div>
    </section>
  );
};
