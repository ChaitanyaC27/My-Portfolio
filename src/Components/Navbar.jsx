import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Resume", path: "/resume" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${scrolled ? "scrolled-nav" : ""}`}
      style={{
        transition: "all 0.3s ease",
        background: scrolled ? "rgba(15, 12, 41, 0.9)" : "transparent",
      }}
    >
      <div className="container">
        <NavLink className="navbar-brand fw-bold text-white" to="/">
          Chaitanya Potbhare
        </NavLink>

        <button
          className="navbar-toggler border-0 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto align-items-center">
            {menuItems.map((item) => (
              <li className="nav-item" key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `nav-link px-3 ${isActive ? "active-link" : ""}`
                  }
                  onClick={() => setIsOpen(false)}
                  style={({ isActive }) => ({
                    color: isActive ? "var(--accent-color)" : "white",
                    fontWeight: isActive ? "bold" : "normal",
                  })}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
