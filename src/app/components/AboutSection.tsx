"use client";
import Image from "next/image";
import { useEffect } from "react";
// Importing AOS
import AOS from "aos";

import "aos/dist/aos.css";

function AboutSection() {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="text-gray-200 body-font py-6 px-6 md:px-10 bg-gray-800 border-t-2 border-b-4 border-indigo-500 mb-0">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-end">
        {/* Left Text Section */}
        <div
          className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mb-12 md:mb-0"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h2 className="sm:text-4xl text-3xl font-extrabold text-gray-100 mb-4">
            About Me
          </h2>
          <p className="leading-relaxed mb-6 text-lg text-gray-300">
            Hi! I&apos;m Arsalan Meo, a passionate front-end developer with a knack for creating interactive and visually appealing websites. With 1+ years of experience in the field, I specialize in HTML, CSS, JavaScript, React, and Tailwind CSS. I enjoy solving problems and constantly learning new technologies to enhance my skills.
          </p>
          <p className="leading-relaxed mb-6 text-lg text-gray-300">
            When I am not coding, you can find me exploring the latest tech trends, building side projects, or enjoying a cup of coffee. I am always eager to take on new challenges and contribute to meaningful projects.
          </p>
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-md text-lg transition duration-300">
            Get in Touch
          </button>
        </div>

        {/* Right Image Section */}
        <div
          className="md:w-1/2 flex justify-center md:px-10"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <Image
            className="object-cover object-center rounded-full shadow-lg border-4 border-indigo-500 transform hover:scale-105 transition duration-300"
            alt="Arsalan Meo"
            src="/albert-dera-ILip77SbmOE-unsplash.jpg"
            width={300}
            height={300}
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
