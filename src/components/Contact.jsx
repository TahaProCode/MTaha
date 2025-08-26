"use client";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import pic from "./image2.png";
import Interactive3DContact from "./Interactive3DContact";
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
    <section className="relative min-h-screen min-w-screen bg-[#210636] py-20 px-6">
      {/* Ambient gradients to match theme */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 -left-28 h-80 w-80 rounded-full bg-[#4b0082]/30 blur-3xl"></div>
        <div className="absolute -bottom-28 -right-28 h-96 w-96 rounded-full bg-[#6a0dad]/30 blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        {/* Left: Glowing framed image + 3D interactive element */}
        <motion.div
          className="relative mx-auto w-full max-w-md"
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative rounded-3xl p-[3px]">
            <div className="absolute inset-0 -z-10 "></div>
            <div className="relative rounded-3xl">
              <Interactive3DContact height={520} textureSrc={pic} />
            </div>
          </div>
        </motion.div>

        {/* Right: Contact form in glass card */}
        <motion.div
          className="relative"
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <motion.h1
            className="text-center md:text-left text-5xl md:text-6xl font-extrabold mb-6 text-white"
            initial={{ y: -10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Contact Me
          </motion.h1>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
            <form onSubmit={handleSubmit} className="w-full">
              <div className="mb-5">
                <label className="mb-2 block text-sm font-semibold text-[#cdb4ff]">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/10 bg-[#120626] px-4 py-3 text-white placeholder:text-white/50 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-[#6a0dad]"
                  required
                />
              </div>
              <div className="mb-5">
                <label className="mb-2 block text-sm font-semibold text-[#cdb4ff]">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border:white/10 bg-[#120626] px-4 py-3 text-white placeholder:text-white/50 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-[#6a0dad]"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="mb-2 block text-sm font-semibold text-[#cdb4ff]">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="w-full rounded-xl border border-white/10 bg-[#120626] px-4 py-3 text-white placeholder:text-white/50 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-[#6a0dad]"
                  rows="4"
                  required
                ></textarea>
              </div>

              <div className="flex flex-col items-center gap-3 md:flex-row">
                <motion.button
                  type="submit"
                  className="group inline-flex"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span
                    type="submit"
                    className="relative inline-flex items-center justify-center overflow-hidden rounded-full p-[2px]"
                  >
                    <span className="absolute inset-0 -z-10 animate-[spin_6s_linear_infinite] rounded-full bg-[conic-gradient(from_0deg,rgba(75,0,130,0.6),rgba(106,13,173,0.6),rgba(75,0,130,0.6))]"></span>
                    <span className="relative rounded-full bg-[#120626] px-6 py-2 text-sm font-semibold text-white shadow-lg ring-1 ring-white/10 transition-colors group-hover:bg-[#1b0a33]">
                      Send Message
                    </span>
                  </span>
                </motion.button>

                {status && (
                  <motion.p
                    className="text-sm text-[#A6A9B0]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {status}
                  </motion.p>
                )}
              </div>
            </form>
          </div>

          {/* Contact info and socials */}
          <motion.div
            className="mt-6 flex items-center justify-between gap-6"
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div>
              <p className="text-base text-white">tahaattique31@gmail.com</p>
              <p className="text-sm text-[#A6A9B0]">Lahore,Pakistan</p>
            </div>
            <div className="flex items-center gap-3">
              <motion.a
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white ring-1 ring-white/10 transition hover:bg-white/10"
                whileHover={{ y: -2, scale: 1.05 }}
                href="https://www.facebook.com/taha.bhai.940098"
                target="top"
              >
                <FaFacebook size="18px" />
              </motion.a>
              <motion.a
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white ring-1 ring-white/10 transition hover:bg-white/10"
                whileHover={{ y: -2, scale: 1.05 }}
                href="https://github.com/TahaProCode"
                target="top"
              >
                <FaGithub size="18px" />
              </motion.a>
              <motion.a
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg:white/5 text-white ring-1 ring-white/10 transition hover:bg-white/10"
                whileHover={{ y: -2, scale: 1.05 }}
                target="top"
                href="https://www.instagram.com/mohammad_tahaa101/?utm_source=qr&igsh=MTFjczE0MWo2cTc5NA%3D%3D#"
              >
                <FaInstagram size="18px" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
