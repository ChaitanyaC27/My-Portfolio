import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-site py-4 text-center">
      <div className="container">
        <p className="mb-0 text-white">
          Chaitanya Potbhare © {new Date().getFullYear()} Portfolio
        </p>
      </div>
    </footer>
  );
};

export default Footer;