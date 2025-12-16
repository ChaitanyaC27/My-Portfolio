import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import "./App.css";
import Home from "./Components/Home";

function App() {
  return (
    <>
      {/* Particle background must be before everything so it's behind */}
      

      {/* Navbar (fixed-top) */}
      <Router>
        <Navbar />

        {/* main-content reserves space under the fixed navbar and keeps footer at bottom */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home/>}/>
            
          </Routes>
        </main>

        <Footer />
      </Router>
    </>
  );
}

export default App;
