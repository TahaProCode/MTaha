import { motion } from "framer-motion";

export const MoreInfoSection = () => {
  return (
    <section className="py-16 bg-[#210636] relative overflow-hidden min-h-screen min-w-screen">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4b0082]/30 via-[#210636]/80 to-[#1a1a2e] z-0"></div>

      <motion.div
        className="container mx-auto px-4 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="text-4xl font-bold text-[#F5D5E0] text-center mb-12"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          More Info About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education & Experience */}
          <motion.div
            className="bg-[#420D4B] p-6 rounded-lg shadow-lg"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-[#F5D5E0] mb-4">
              Education & Experience
            </h3>
            <p className="text-[#7B837E]">
              <strong>Education:</strong> Intermediate in Computer Science,
              Punjab College, 2023-2025
              <br />
              Learning Web Development.
            </p>
            <p className="text-[#7B837E] mt-4">
              <strong>Experience:</strong> Self Learning Expiernce from Youtube
              <br />
              Developed and maintained responsive websites
              <br />
              Completed 10+ projects for self learning, enhancing user
              experience by 40%.
            </p>
          </motion.div>

          {/* Strengths & Skills */}
          <motion.div
            className="bg-[#420D4B] p-6 rounded-lg shadow-lg"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-[#F5D5E0] mb-4">
              Strengths & Skills
            </h3>
            <ul className="text-[#7B837E] list-disc list-inside">
              <li>Proficient in HTML, JavaScript, and CSS</li>
              <li>Strong problem-solving and debugging skills</li>
              <li>Excellent communication and collaboration abilities</li>
            </ul>
            <p className="text-[#7B837E] mt-4">
              <strong>Certifications:</strong> Certified Web Developer, 2025
              <br />
              Apna College
            </p>
          </motion.div>
        </div>

        {/* Additional Information */}
        <motion.div
          className="mt-8 bg-[#420D4B] p-6 rounded-lg shadow-lg"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-[#F5D5E0] mb-4">
            Additional Info
          </h3>
          <p className="text-[#7B837E]">
            I enjoy exploring new technologies and contributing to open-source
            projects in my free time. My hobbies include Book reading and
            playing videogames, which help sharpen my creative and strategic
            thinking.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MoreInfoSection;
