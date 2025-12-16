import React, { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Swal from "sweetalert2";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // ✅ Google Apps Script URL
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwA2UGhooNf7edb4KJ2NUdzYuIUfqSjVm7GTDHDgRx0_AFsPmvywVRqYMVHOTQl45Fv/exec";

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch(scriptURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });

      Swal.fire({
        icon: "success",
        title: "Message Sent!",
        text: "Thank you for contacting me. I’ll get back to you soon 😊",
        confirmButtonColor: "#0d6efd",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Something went wrong. Please try again later.",
        confirmButtonColor: "#dc3545",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      style={{
        paddingTop: "120px",
        paddingBottom: "80px",
        scrollMarginTop: "100px",
      }}
    >
      <div className="container">
        <div className="text-center">
          <motion.h2
            className="section-title mb-5"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get In Touch
          </motion.h2>
        </div>

        <div className="row g-5 justify-content-center">
          {/* Contact Info */}
          <motion.div
            className="col-md-5"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="glass-card p-4 h-100 shadow-card">
              <h3 className="h4 mb-4 text-center">Contact Info</h3>
              <ul className="list-unstyled">
                <li className="mb-4 d-flex align-items-center">
                  <div className="bg-light bg-opacity-25 p-3 rounded-circle me-3">
                    <FaPhone className="text-success" />
                  </div>
                  <div>
                    <small className="fw-bold">Phone</small>
                    <div>+91 9552504016</div>
                  </div>
                </li>

                <li className="mb-4 d-flex align-items-center">
                  <div className="bg-light bg-opacity-25 p-3 rounded-circle me-3">
                    <FaEnvelope className="text-info" />
                  </div>
                  <div>
                    <small className="fw-bold">Email</small>
                    <div>chaitanyapotbhare27@gmail.com</div>
                  </div>
                </li>

                <li className="d-flex align-items-center">
                  <div className="bg-light bg-opacity-25 p-3 rounded-circle me-3">
                    <FaMapMarkerAlt className="text-danger" />
                  </div>
                  <div>
                    <small className="fw-bold">Location</small>
                    <div>Nagpur, Maharashtra</div>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="col-md-7"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="glass-card p-4 shadow-card contact-form-card">
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-12">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="4"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-primary w-100 py-2"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : (
                        <>
                          <FaPaperPlane className="me-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
