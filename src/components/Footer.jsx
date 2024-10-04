import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

 function  Footer () {
  return (
    <footer className="bg-black text-white py-6">
      {/* Social Icons Section */}
      <div className="flex justify-center mb-4 space-x-6">
        <a
          href="https://www.linkedin.com"
          className="text-white hover:text-orange-500 transition duration-300"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://github.com/yaasir65"
          className="text-white hover:text-orange-500 transition duration-300"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.instagram.com/dulqacdi?igsh=YmoyYmFpYXVqZnZz"
          className="text-white hover:text-orange-500 transition duration-300"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://x.com/MaxamedYaa19864"
          className="text-white hover:text-orange-500 transition duration-300"
        >
          <FaTwitter size={24} />
        </a>
      </div>

      {/* Links Section */}
      <div className="flex justify-center space-x-6 mb-4">
        
        <a href="#" className="hover:text-orange-500 transition duration-300">
         Home
        </a>
        <a href="#about" className="hover:text-orange-500 transition duration-300">
          About
        </a>
        <a href="#skills" className="hover:text-orange-500 transition duration-300">
        skills
        </a>
        <a href="#projects" className="hover:text-orange-500 transition duration-300">
          projects
        </a>
        <a href="#contact" className="hover:text-orange-500 transition duration-300">
          Contact
        </a>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-400">
        &copy; 2024 Mohamed | All Rights Reserved
      </div>
    </footer>
  );
};

export default  Footer;