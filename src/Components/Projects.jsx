import React from 'react';
import { motion } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: 'Work India',
    modalId: 'projectModal1',
    description: 'Work India is a service platform website designed to connect users with professional workers such as plumbers, electricians, painters, and more. The platform provides a simple, responsive, and modern interface that allows users to easily book trusted service providers based on their needs.',
    details: (
      <>
        <p>Work India is a service platform website designed to connect users with professional workers such as plumbers, 
electricians, painters, and more. The platform provides a simple, responsive, and modern interface where users can 
request services quickly and conveniently.</p>
        <ul>
          <li><strong>Technologies Used:</strong> HTML5, CSS3, JavaScript, React, Bootstrap</li>
          <li><strong>Live Demo:</strong> <a href="https://work-indiaa.vercel.app "target="_blank" rel="noopener noreferrer" className='fw-bold text-success'>Visit Site</a></li>
        </ul>
      </>
    ),
  },
  {
    id: 2,
    title: 'Event Pro',
    modalId: 'projectModal2',
    description: 'A modern, responsive, and user-friendly Event Management platform built using React and JSON-Server. This project helps users easily explore event services, send inquiries, and connect with the service provider.',
    details: (
      <>
        <p>A modern, responsive, and user-friendly Event Management platform built using React and JSON-Server. This 
project helps users easily explore event services, send inquiries, connect with the service provider, and view an 
estimated budget for their selected event. </p>
        <ul>
          <li><strong>Technologies Used:</strong> HTML5, CSS3, JavaScript, Bootstrap, React & JSON</li>
          <li><strong>Live Demo:</strong> <a href="https://event-proo.vercel.app  "  target="_blank" rel="noopener noreferrer" className='fw-bold text-success' >Visit Site</a></li>
        </ul>
      </>
    ),
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      style={{
        paddingTop: '120px', // prevent hiding under navbar
        paddingBottom: '80px',
        scrollMarginTop: '100px',
      }}
    >
      <div className="container">
        <div className='text-center'>
        <motion.h2
          className="section-title text-center mb-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        > 
          Featured Projects
        </motion.h2>
        </div>

        <div className="row g-4 justify-content-center">
          {projectsData.map((project, index) => (
            <div className="col-md-6 col-lg-4" key={project.id}>
              <motion.div
                className="glass-card p-4 h-100 d-flex flex-column shadow-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3 className="h4 fw-bold text-center mb-3 text-dark">{project.title}</h3>
                <p className="flex-grow-1 text-dark-50">{project.description}</p>
                <button
                  className="btn btn-outline-dark w-100 mt-3 rounded-pill"
                  data-bs-toggle="modal"
                  data-bs-target={`#${project.modalId}`}
                >
                  View Details
                </button>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Modals */}
      {projectsData.map((project) => (
        <div key={project.id} className="modal fade" id={project.modalId} tabIndex="-1" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content glass-card border-0 text-dark shadow-card" style={{ background: 'rgba(231, 228, 228, 1)' }}>
              <div className="modal-header border-bottom-0">
                <h5 className="modal-title fw-bold">{project.title}</h5>
                <button type="button" className="btn-close btn-close-dark" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body text-dark">{project.details}</div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
