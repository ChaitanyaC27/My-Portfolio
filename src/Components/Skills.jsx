import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaReact, FaPython, FaDatabase } from 'react-icons/fa'; 

const skillsData = [
  { icon: FaHtml5, title: 'HTML5', color: '#e34c26' },
  { icon: FaCss3Alt, title: 'CSS3', color: '#264de4' },
  { icon: FaBootstrap, title: 'Bootstrap', color: '#563d7c' },
  { icon: FaJs, title: 'JavaScript', color: '#f0db4f' },
  { icon: FaReact, title: 'React.js', color: '#61dafb' },
  { icon: FaPython, title: 'Python', color: '#3776ab' },
  { icon: FaDatabase, title: 'SQL', color: '#003b57' },
];

const Skills = () => {
  return (
    <section
      id="skills"
      style={{
        paddingTop: '120px', // prevent hiding under navbar
        paddingBottom: '80px',
        scrollMarginTop: '100px',
      }}
    >
      <div className="container text-center">
        <motion.h2
          className="section-title mb-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }} // instant animation
          transition={{ duration: 0.5 }}
        >
          Technical Skills
        </motion.h2>

        <div className='crd'>

        <div className="row g-4 justify-content-center">
          {skillsData.map((skill, index) => (
            <div className="col-6 col-md-4 col-lg-3" key={index}>
              <motion.div
  className="skill-card p-4 h-100 d-flex flex-column align-items-center justify-content-center"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
  whileHover={{ scale: 1.05 }}
>

                <motion.div
                  className="skill-icon-box mb-3"
                  style={{ color: skill.color, fontSize: '3rem' }}
                  whileHover={{ scale: 1.3, rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <skill.icon />
                </motion.div>
                <h5 className="fw-bold text-dark">{skill.title}</h5>
              </motion.div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
