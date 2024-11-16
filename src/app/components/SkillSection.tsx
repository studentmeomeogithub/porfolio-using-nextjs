"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function SkillsSection() {
  useEffect(() => {
    AOS.init({
      once: true,  // Ensure animation happens only once
      offset: 100, // Trigger animation when the element is 100px from the viewport (can be adjusted)
      delay: 0,    // No initial delay
      duration: 1200,  // Duration of the animation
    });

    AOS.refresh(); // Refresh AOS after component mounts
  }, []);

  return (
    <section className="text-gray-600 body-font py-16 bg-gray-800">
      <div className="container mx-auto px-6 md:px-24 flex flex-col items-center">
        <h2
          className="sm:text-4xl text-3xl font-extrabold text-white mb-8 text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          My Skills
        </h2>

        <div className="w-full md:w-3/4 space-y-6">
          {/* Skill 1 */}
          <div data-aos="fade-up" data-aos-duration="1200">
            <div className="flex justify-between mb-2">
              <span className="font-medium text-lg text-white">HTML</span>
              <span className="font-medium text-lg text-white">90%</span>
            </div>
            <div className="w-full bg-gray-500 rounded-full h-2.5">
              <div
                className="bg-indigo-500 h-2.5 rounded-full transition duration-500 ease-in-out"
                style={{ width: "90%" }}
              ></div>
            </div>
          </div>

          {/* Skill 2 */}
          <div data-aos="fade-up" data-aos-duration="1300">
            <div className="flex justify-between mb-2">
              <span className="font-medium text-lg text-white">CSS</span>
              <span className="font-medium text-lg text-white">85%</span>
            </div>
            <div className="w-full bg-gray-500 rounded-full h-2.5">
              <div
                className="bg-indigo-500 h-2.5 rounded-full transition duration-500 ease-in-out"
                style={{ width: "85%" }}
              ></div>
            </div>
          </div>

          {/* Skill 3 */}
          <div data-aos="fade-up" data-aos-duration="1400">
            <div className="flex justify-between mb-2">
              <span className="font-medium text-lg text-white">JavaScript</span>
              <span className="font-medium text-lg text-white">75%</span>
            </div>
            <div className="w-full bg-gray-500 rounded-full h-2.5">
              <div
                className="bg-indigo-500 h-2.5 rounded-full transition duration-500 ease-in-out"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>

          {/* Skill 4 */}
          <div data-aos="fade-up" data-aos-duration="1500">
            <div className="flex justify-between mb-2">
              <span className="font-medium text-lg text-white">React.js</span>
              <span className="font-medium text-lg text-white">80%</span>
            </div>
            <div className="w-full bg-gray-500 rounded-full h-2.5">
              <div
                className="bg-indigo-500 h-2.5 rounded-full transition duration-500 ease-in-out"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>

          {/* Skill 5 */}
          <div data-aos="fade-up" data-aos-duration="1600">
            <div className="flex justify-between mb-2">
              <span className="font-medium text-lg text-white">Tailwind CSS</span>
              <span className="font-medium text-lg text-white">85%</span>
            </div>
            <div className="w-full bg-gray-500 rounded-full h-2.5">
              <div
                className="bg-indigo-500 h-2.5 rounded-full transition duration-500 ease-in-out"
                style={{ width: "85%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
