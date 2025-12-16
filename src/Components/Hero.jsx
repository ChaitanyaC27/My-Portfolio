import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import Photo from '../assets/My photo.jpg'; // Verify path

const Hero = () => {
  return (
    <section
      className="hero d-flex align-items-center"
      id="home"
      style={{ minHeight: '100vh', paddingTop: '100px', scrollMarginTop: '100px' }}
    >
      <div className="container text-center">
        {/* Animated Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="profile-pic-container mb-4"
        >
          <img
            src={Photo}
            alt="Chaitanya Potbhare"
            className="rounded-circle profile-pic shadow-glow"
            style={{ width: '200px', height: '200px', objectFit: 'cover' }}
          />
        </motion.div>

        {/* Animated Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="display-4 fw-bold mb-3 hero-name-gradient">
            Hi, I'm <span className="hero-name-gradient">Chaitanya Potbhare</span>
          </h1>

          <div className="fs-3 mb-4">
            <span style={{ color: '#6c39aaff', fontWeight: 'bold' }}>
              <TypeAnimation
                sequence={[
                  'Web Developer', 2000,
                  'React', 2000,
                  'Python', 2000,
                  'JavaScript', 2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </div>

          <p className="lead mb-4 mx-auto text-dark" style={{ maxWidth: '650px' }}>
            Building responsive, user-friendly websites with modern technologies. 
            Let's turn ideas into reality.
          </p>

          {/* Action Buttons */}
          <div className="d-flex gap-3 justify-content-center mb-4">
            <a 
              href="#contact" 
              className="btn btn-primary btn-lg rounded-pill px-4 shadow-glow-hover"
            >
              Hire Me
            </a>
            <a 
              href="/assets/Chaitanya Potbhare Resume.pdf" 
              download 
              className="btn btn-outline-dark btn-lg rounded-pill px-4 shadow-glow-hover"
            >
              <FaFileDownload className="me-2" /> Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-3 d-flex justify-content-center gap-4 fs-3">
            <a 
              href="https://github.com/ChaitanyaC27" 
              target="_blank" 
              rel="noreferrer" 
              className="text-dark social-icon"
            >
              <FaGithub />
            </a>
            <a 
              href="https://www.linkedin.com/in/chaitanya-potbhare27" 
              target="_blank" 
              rel="noreferrer" 
              className="text-primary social-icon"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
