import React from 'react';
import {
  FaGraduationCap,
  FaBriefcase,
  FaDownload,
  FaCertificate,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import ResumePDF from '../assets/Chaitanya_Potbhare Resume.pdf';

const Resume = () => {
  const education = [
    {
      title: "B.E. in Information Technology",
      place: "Sipna College Of Engineering & Technology, Amravati",
      year: "2021 – 2025",
    },
    {
      title: "HSC",
      place: "Lalbahadur Shastri Vidyalay And Jr College Babulwada, Nagpur",
      year: "2019 – 2021",
    },
    {
      title: "SSC",
      place: "Kesarimal Paliwal Vidyalaya, Parshivni, Nagpur",
      year: "2018 – 2019",
    },
  ];

  const experience = [
    {
      title: "React Developer Intern",
      place: "Quiesta Technologies Pvt. Ltd",
      year: "June 2025 – Nov 2025",
      description:
        "Assisted in building responsive web pages using HTML, CSS, JavaScript, React and modern UI frameworks. Collaborated with developers to improve website layout, performance, and user experience.",
    },
    {
      title: "Web Developer Intern",
      place: "Oasis Infobyte",
      year: "Jan 2024 – Feb 2024",
      description:
        "I learned to build responsive and user friendly websites using HTML, CSS, JavaScript and React. The internship enhanced my skills in Web Development and creating modern, visually appealing layouts.",
    },
  ];

  const certificates = [
    "Google Cloud Computing Foundations & Gen AI",
    "National Level Tech Fest (Vidyotan 2024)",
    "Microsoft Career Essentials in Data Analysis",
    "LinkedIn Full-Stack Web Developer",
  ];

  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }),
  };

  return (
    <section
      id="resume"
      style={{
        paddingTop: '120px',
        paddingBottom: '80px',
        scrollMarginTop: '100px',
      }}
    >
      <div className="container">
        {/* Heading */}
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">My Journey</h2>
        </motion.div>

        {/* Download Button */}
        <div className="text-center mb-5">
          <a
            href={ResumePDF}
            download
            className="btn btn-primary"
          >
            <FaDownload className="me-2" /> Download Resume
          </a>
        </div>

        {/* Education & Experience */}
        <div className="row g-4">
          {/* Education */}
          <div className="col-md-6">
            <h3 className="h4 text-center mb-4">
              <FaGraduationCap className="me-2 text-warning" /> Education
            </h3>

            {education.map((edu, i) => (
              <motion.div
                key={i}
                className="glass-card p-4 mb-4 rounded-4 shadow-card"
                custom={i}
                initial="hidden"
                animate="visible"
                variants={cardVariant}
              >
                <h5 className="fw-bold text-dark">{edu.title}</h5>
                <p className="mb-1 fw-bold text-dark">{edu.place}</p>
                <span className="badge bg-danger">{edu.year}</span>
              </motion.div>
            ))}
          </div>

          {/* Experience */}
          <div className="col-md-6">
            <h3 className="h4 text-center mb-4">
              <FaBriefcase className="me-2 text-info" /> Experience
            </h3>

            {experience.map((exp, i) => (
              <motion.div
                key={i}
                className="glass-card p-4 mb-4 rounded-4 shadow-card"
                custom={i}
                initial="hidden"
                animate="visible"
                variants={cardVariant}
              >
                <h5 className="fw-bold text-dark">{exp.title}</h5>
                <p className="mb-1 fw-bold text-dark">{exp.place}</p>
                <span className="badge bg-success">{exp.year}</span>
                <p className="mb-1 text-dark">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Centered Certificates */}
        <div className="row justify-content-center mt-5">
          <div className="col-md-8">
            <motion.div
              className="glass-card p-4 rounded-4 shadow-card text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="fw-bold mb-4">
                <FaCertificate className="me-2 text-primary" /> Certifications
              </h4>

              <ul className="list-unstyled mb-0">
                {certificates.map((cert, idx) => (
                  <li key={idx} className="mb-2 fw-bold text-dark">
                    • {cert}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
