"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function FooterSection() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6 md:px-24">
        
        {/* ----------------- Footer Content ----------------- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">

          {/* Brand & Description */}
          <div className="md:w-1/3" data-aos="fade-up" data-aos-duration="1000">
            <h2 className="text-2xl font-bold text-white mb-4">Arsalan Rajput</h2>
            <p className="text-gray-400 text-sm">
              Frontend Developer specializing in modern web technologies. Crafting responsive and <br /> interactive websites to bring ideas to life.
            </p>
          </div>

          {/* ----------------- Quick Links ----------------- */}
          <div className="md:w-1/3 space-y-4" data-aos="fade-up" data-aos-duration="1200">
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/components/about" className="text-gray-400 hover:text-white transition">About Me</a>
              </li>
              <li>
                <a href="/projects" className="text-gray-400 hover:text-white transition">Projects</a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition">Contact</a>
              </li>
              <li>
                <a href="/blog" className="text-gray-400 hover:text-white transition">Blog</a>
              </li>
            </ul>
          </div>

          {/* ----------------- Contact Info & Social Links ----------------- */}
          <div className="md:w-1/3" data-aos="fade-up" data-aos-duration="1400">
            <h3 className="text-xl font-semibold text-white">Contact</h3>
            <p className="text-gray-400 text-sm mb-4">Email: arslanmeo302@gmail.com</p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-500 transition">
                LinkedIn
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-500 transition">
                GitHub
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-500 transition">
                Twitter
              </a>
            </div>
          </div>
          
        </div>
        {/* ----------------- End of Footer Content ----------------- */}

        {/* Bottom Line */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm" data-aos="fade-up" data-aos-duration="1600">
          &copy; {new Date().getFullYear()} Arsalan Rajput. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
