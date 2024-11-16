import Image from "next/image";

function HeroSection() {
  return (
    <section className="text-gray-200 bg-slate-800 body-font">
      <div className="container mx-auto flex px-6 py-14 md:flex-row flex-col items-center">
        {/* Wrapper to shift content right */}
        <div className="flex flex-col md:flex-row items-center justify-end w-full ml-[10%]">
          {/* Left text section */}
          <div className="lg:flex-grow px-6 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-teal-300">
              Hi, I am Arsalan Meo
              <br className="hidden lg:inline-block" />
              <span className="text-indigo-400">Frontend Developer</span>
            </h1>
            <p className="mb-8 leading-relaxed text-gray-300">
              I&apos;m a passionate Frontend Web Developer with over 1 year of experience in building responsive, interactive websites. Skilled in HTML, CSS, JavaScript, React, and Tailwind CSS, I focus on creating seamless user experiences and continuously improving my technical skills.
            </p>
            <div className="flex justify-center flex-wrap">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mb-4 md:mb-0">
                Hire Me
              </button>
              <button className="ml-4 inline-flex text-gray-800 bg-teal-300 border-0 py-2 px-6 focus:outline-none hover:bg-teal-400 rounded text-lg">
                Download CV
              </button>
            </div>
          </div>

          {/* Right image section */}
          <div className="lg:max-w-lg px-6 lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded border-4 border-teal-500"
              alt="Arsalan Meo - Hero Section"
              src="/albert-dera-ILip77SbmOE-unsplash.jpg"
              width={300}
              height={300}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
