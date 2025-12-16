import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      style={{
        paddingTop: "120px", // ensures section starts below navbar
        paddingBottom: "80px",
        scrollMarginTop: "100px", // smooth scroll fix
      }}
    >
      <div className="container">

        {/* Section Title */}
        <div className='text-center'>
        <motion.h2
          className="section-title text-center mb-5"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ fontSize: "2.5rem", fontWeight: "700", letterSpacing: "1px" }}
        >
          About Me
        </motion.h2>
        </div>

        {/* Glass Card */}
        <motion.div
          className="glass-card p-5 rounded-4 shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          style={{
            backdropFilter: "blur(12px)",
            background: "white",
            border: "1px solid rgba(255,255,255,0.2)",
            transition: "0.3s ease",
          }}
        >
          <motion.p
            className="lead text-dark mb-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ lineHeight: "1.8", fontSize: "1.2rem" }}
          >
            Hi! I'm <span className="fw-bold">Chaitanya Potbhare</span>, a passionate Web Developer from Nagpur, Maharashtra. With a <strong>Bachelor of Engineering in IT</strong>, I specialize in building responsive, engaging, and user-friendly digital experiences.
          </motion.p>

          <motion.p
            className="lead text-dark mb-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            style={{ lineHeight: "1.8", fontSize: "1.2rem" }}
          >
            I have hands-on experience with <span className="fw-bold">HTML</span>, <span className="fw-bold">CSS</span>, <span className="fw-bold">Bootstrap</span>, <span className="fw-bold">JavaScript</span>, <span className="fw-bold">React</span>, <span className="fw-bold">Python</span> and <span className="fw-bold">SQL</span>. My internships in Web Developments have given me practical skills in building projects that are both functional and visually appealing.
          </motion.p>

          <motion.p
            className="lead text-dark"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            style={{ lineHeight: "1.8", fontSize: "1.2rem" }}
          >
            Besides coding, I value leadership, time management, and continuous learning. I am always excited to explore new technologies and take on challenges that enhance my skills and creativity.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
