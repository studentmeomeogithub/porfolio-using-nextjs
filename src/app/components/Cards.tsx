"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Cards() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800, // Set default animation duration
      easing: "ease-out-cubic", // Set easing for animation
    });
  }, []);

  const cardsData = [
    {
      id: 1,
      imageSrc: "/restaurant-interior.jpg",
      title: "RESTAURANT WEBSITE",
      description: "Description of image 1.",
      link: "https://restaurant-website-ecru-pi.vercel.app/",
    },
    {
      id: 2,
      imageSrc: "/e-commerce-web.jpg",
      title: "E-COMMERCE WEBSITE",
      description: "Description of image 2.",
      link: "https://e-comerce-website-iota.vercel.app/",
    },
    {
      id: 3,
      imageSrc: "/doctor-appoimnet.jpg",
      title: "Doctor Appointment Website",
      description: "Description of image 3.",
      link: "https://doctor-app-web-bay.vercel.app/",
    },
    {
      id: 4,
      imageSrc: "/calculator.jpg",
      title: "Colorful Calculator",
      description: "Description of image 4.",
      link: "https://colorful-calculator-chi.vercel.app/",
    },
    {
      id: 5,
      imageSrc: "/color-input.jpg",
      title: "PopUp Input",
      description: "Description of image 5.",
      link: "https://popup-input.vercel.app/",
    },
    {
      id: 6,
      imageSrc: "/cursor-effect.jpg",
      title: "Cursor Follower Effect",
      description: "Description of image 6.",
      link: "https://followerr-effect.vercel.app/",
    },
  ];

  return (
    <div className="grid grid-cols-1 bg-slate-800 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 border border-indigo-500 border-t-4 border-b-4"> {/* Added border to section */}
      {cardsData.map((card) => (
        <div
          key={card.id}
          className="bg-gray-800 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-white" // Added thin white border to each card
          data-aos="fade-up"
        >
          <Image
            src={card.imageSrc}
            alt={card.title}
            width={400}
            height={250}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-teal-300 mb-2">
              {card.title}
            </h3>
            <p className="text-gray-300 mb-4">{card.description}</p>
            <Link href={card.link} passHref>
              <button className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 transition duration-200">
                View Project
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
