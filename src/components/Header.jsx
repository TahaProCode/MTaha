import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
// Export a functional component called Header
export const Header = () => {
  return (
    <motion.div
      className="fixed top-4 w-full z-50 flex justify-between items-center px-6 text-white"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex items-center gap-2 px-4 py-2">
        <span className="text-lg font-bold">Taha.is.coding</span>
      </div>
      <nav className="flex gap-4 px-4 py-2">
        <Link to="/Home">
          <motion.a
            className="relative px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-white/20 hover:text-white"
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            HOME
          </motion.a>
        </Link>
        <Link to="/About">
          <motion.a
            className="relative px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-white/20 hover:text-white"
            href="#About"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ABOUT
          </motion.a>
        </Link>
        <Link to="/Skills">
          <motion.a
            className="relative px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-white/20 hover:text-white"
            href="#Portfolio"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Skills
          </motion.a>
        </Link>
        <Link to="/Projects">
          <motion.a
            className="relative px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-white/20 hover:text-white"
            href="#Services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Projects
          </motion.a>
        </Link>
        <Link to="/Contact">
          <motion.a
            className="relative px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-white/20 hover:text-white"
            href="#Contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            CONTACT
          </motion.a>
        </Link>
      </nav>
    </motion.div>
  );
};

export default Header;
