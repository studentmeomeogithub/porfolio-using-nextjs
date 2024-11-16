"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" }); // Reset form after submission
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="text-gray-600 border-indigo-500 border-t-4 border-b-4 body-font py-16 bg-gray-800">
      <div className="container mx-auto px-6 md:px-24 text-center">
        <h2
          className="sm:text-4xl text-3xl font-extrabold text-white mb-8"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Get in Touch
        </h2>

        <div className="flex flex-col items-center">
          <form
            className="w-full md:w-2/3 lg:w-1/2 space-y-6"
            onSubmit={handleSubmit}
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-white text-lg font-medium"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-6 py-3 mt-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-white text-lg font-medium"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-6 py-3 mt-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your Email"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-white text-lg font-medium"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-6 py-3 mt-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your Message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white text-lg rounded-lg hover:bg-indigo-700 transition duration-300"
            >
              Send Message
            </button>
          </form>

          {isSubmitted && (
            <p className="mt-4 text-white text-lg">
              Thank you for reaching out! I’ll get back to you soon.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
