"use client";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <div className="bg-[#210635] py-8 flex flex-col items-center justify-center">
      {/* Copyright and Agency */}
      <motion.div
        className="text-center mb-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-[#F5D5E0] text-sm">
          @2025 Pakistan All rights reserved. Developed by {"Muhammad Taha"}
        </p>
      </motion.div>

      {/* Payment Icons */}
      <motion.div
        className="flex space-x-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.a
          className="text-[#F5D5E0] hover:text-[#6667AB] transition duration-300"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaLinkedinIn size={20} />
        </motion.a>
        <motion.a
          className="text-[#F5D5E0] hover:text-[#6667AB] transition duration-300"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaGithub size={20} />
        </motion.a>
        <motion.a
          className="text-[#F5D5E0] hover:text-[#6667AB] transition duration-300"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
        >
          <MdOutlinePayment size={20} />
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Footer;
