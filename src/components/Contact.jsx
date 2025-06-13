"use client";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import pic from "./image2.png";
export const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceId = "service_k1n5r2t"; // Replace with your EmailJS Service ID
    const templateId = "template_zzsn285"; // Replace with your EmailJS Template ID
    const userId = "7Lh2kmG0i4uzJyDJu"; // Replace with your EmailJS User ID

    const templateParams = {
      from_name: formData.fullName,
      from_email: formData.email,
      message: formData.message,
      to_email: "tahaattique31@gmail.com", // Your email address
    };

    try {
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: serviceId,
            template_id: templateId,
            user_id: userId,
            template_params: templateParams,
          }),
        }
      );

      if (response.ok) {
        setStatus("Email sent successfully!");
        setFormData({ fullName: "", email: "", message: "" }); // Reset form
      } else {
        setStatus("Failed to send email. Please try again.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-[#210635] p-6 min-w-screen">
      {/* Left Side - Image Placeholder */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center md:justify-end pr-0 md:pr-8 mb-6 md:mb-0"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-100 h-140 bg-[#6667AB] rounded-lg flex items-center justify-center">
          <img src={pic} alt="mypic" />
        </div>
      </motion.div>

      {/* Right Side - Contact Form */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col items-center md:items-start"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-8 text-[#F5D5E0]"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Contact Me
        </motion.h1>

        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="mb-4">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="FULL NAME"
              className="w-full border-b border-[#F5D5E0] bg-transparent py-2 px-3 text-lg focus:outline-none text-[#F5D5E0]"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="E-MAIL"
              className="w-full border-b border-[#F5D5E0] bg-transparent py-2 px-3 text-lg focus:outline-none text-[#F5D5E0]"
              required
            />
          </div>
          <div className="mb-8">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="MESSAGE"
              className="w-full border-b border-[#F5D5E0] bg-transparent py-2 px-3 text-lg focus:outline-none resize-none text-[#F5D5E0]"
              rows="3"
              required
            ></textarea>
          </div>

          <motion.button
            type="submit"
            className="bg-white text-[#210636] rounded-full py-3 px-8 mb-4 border-2 border-[#F5D5E0] hover:bg-[#210636] transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            CONTACT US
          </motion.button>
          {status && (
            <motion.p
              className="text-lg text-[#7B837E]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {status}
            </motion.p>
          )}
        </form>

        {/* Contact Info and Social Icons */}
        <motion.div
          className="flex justify-between w-full max-w-md"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div>
            <p className="text-lg text-[#F5D5E0]">tahaattique31@gmail.com</p>
            <p className="text-lg text-[#7B837E]">Lahore,Pakistan</p>
          </div>
          <div className="flex space-x-4">
            <motion.a
              className="text-lg text-[#F5D5E0] hover:text-[#6667AB] transition duration-300"
              whileHover={{ scale: 1.2 }}
              href="https://www.facebook.com/taha.bhai.940098"
              target="top"
            >
              <FaFacebook size="20px" />
            </motion.a>
            <motion.a
              className="text-lg text-[#F5D5E0] hover:text-[#6667AB] transition duration-300"
              whileHover={{ scale: 1.2 }}
              href="https://github.com/TahaProCode"
              target="top"
            >
              <FaGithub size="20px" />
            </motion.a>
            <motion.a
              className="text-lg text-[#F5D5E0] hover:text-[#6667AB] transition duration-300"
              whileHover={{ scale: 1.2 }}
              target="top"
              href="https://www.instagram.com/mohammad_tahaa101/?utm_source=qr&igsh=MTFjczE0MWo2cTc5NA%3D%3D#"
            >
              <FaInstagram size="20px" />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactSection;
