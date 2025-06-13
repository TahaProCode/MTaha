import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

// Export a functional component called Header
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.div
      className="fixed top-4 w-full z-50 flex justify-between items-center px-6 text-[#F5D5E0]"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex items-center gap-2 px-4 py-2">
        <span className="text-lg font-bold text-[#F5D5E0]">Taha.is.coding</span>
      </div>
      {/* Hamburger Menu Button for Mobile */}
      <button
        className="md:hidden flex items-center px-4 py-2 focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <motion.div
          className="w-6 h-6 flex flex-col justify-between"
          animate={{
            rotate: isMenuOpen ? 90 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <span
            className={`w-full h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          ></span>
          <span
            className={`w-full h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-full h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          ></span>
        </motion.div>
      </button>
      {/* Navigation Menu */}
      <nav
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row gap-4 px-4 py-2 absolute md:static top-16 left-0 w-full md:w-auto bg-[#210636]/90 md:bg-transparent transition-all duration-300`}
      >
        <Link to="/Home">
          <motion.a
            className="relative px-4 py-2 text-sm font-medium text-[#F5D5E0] transition-all duration-300 hover:bg-[#6667AB]/20 hover:text-[#F5D5E0]"
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(false)}
          >
            HOME
          </motion.a>
        </Link>
        <Link to="/About">
          <motion.a
            className="relative px-4 py-2 text-sm font-medium text-[#F5D5E0] transition-all duration-300 hover:bg-[#6667AB]/20 hover:text-[#F5D5E0]"
            href="#About"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(false)}
          >
            ABOUT
          </motion.a>
        </Link>
        <Link to="/Skills">
          <motion.a
            className="relative px-4 py-2 text-sm font-medium text-[#F5D5E0] transition-all duration-300 hover:bg-[#6667AB]/20 hover:text-[#F5D5E0]"
            href="#Portfolio"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(false)}
          >
            Skills
          </motion.a>
        </Link>
        <Link to="/Projects">
          <motion.a
            className="relative px-4 py-2 text-sm font-medium text-[#F5D5E0] transition-all duration-300 hover:bg-[#6667AB]/20 hover:text-[#F5D5E0]"
            href="#Services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </motion.a>
        </Link>
        <Link to="/Contact">
          <motion.a
            className="relative px-4 py-2 text-sm font-medium text-[#F5D5E0] transition-all duration-300 hover:bg-[#6667AB]/20 hover:text-[#F5D5E0]"
            href="#Contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(false)}
          >
            CONTACT
          </motion.a>
        </Link>
      </nav>
    </motion.div>
  );
};

export default Header;
