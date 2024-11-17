"use client";

// import React, { useState } from "react";

// const SliderComponent = () => {
//   const slides = [
//     "Slide 1",
//     "Slide 2",
//     "Slide 3",
//     "Slide 4",
//     "Slide 5",
//     "Slide 6",
//     "Slide 7",
//     "Slide 8",
//     "Slide 9",
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? slides.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="relative w-full max-w-lg mx-auto">
//       <div className="overflow-hidden">
//         <div
//           className="flex transition-transform duration-500"
//           style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//         >
//           {slides.map((slide, index) => (
//             <div
//               key={index}
//               className="min-w-full flex justify-center items-center bg-gray-200 h-64"
//             >
//               {slide}
//             </div>
//           ))}
//         </div>
//       </div>
//       <button
//         onClick={prevSlide}
//         className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
//       >
//         Prev
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
//       >
//         Next
//       </button>
//     </div>
//   );
// };

// export default SliderComponent;

import { useState, useEffect } from "react";

const Features = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight * 0.75) {
          element.classList.add("animate");
        } else {
          element.classList.remove("animate");
        }
      });
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const features = [
    { text: "Faster Research Process.", img: "./check.png" },
    { text: "Improved Organization", img: "./check.png" },
    { text: "Effortless Drafting", img: "./check.png" },
    { text: "Increased Productivity", img: "./check.png" },
  ];

  return (
    <section className="p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 bg-white text-center max-w-7xl mx-auto">
      <div
        className={`flex ${
          isMobile ? "flex-col" : "flex-row"
        } justify-between items-center gap-8 md:gap-12`}
      >
        {/* Image container - conditionally ordered based on isMobile */}
        <div className={`w-full ${isMobile ? "order-2" : "w-1/2 order-1"}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="./img.jpg"
            alt="Features"
            className={`w-full h-auto object-contain mx-auto
                       ${
                         isMobile
                           ? "max-w-[370px]"
                           : "md:max-w-[400px] lg:max-w-[536px] xl:max-w-[600px]"
                       }`}
          />
        </div>

        {/* Text container */}
        <div
          className={`w-full ${
            isMobile ? "order-1" : "w-1/2 order-2"
          } text-left space-y-6`}
        >
          <h2
            className={`font-bold text-gray-800 leading-tight 
                         ${isMobile ? "text-xl" : "md:text-2xl lg:text-3xl"}`}
          >
            Discover a range of tools designed to enhance your writing
            experience
          </h2>

          <p
            className={`text-gray-500 leading-relaxed max-w-[480px]
                        ${isMobile ? "text-sm" : "text-base"}`}
          >
            Our features are designed to support every stage of your writing
            journey. Discover tools that make research faster, more organized,
            and more productive.
          </p>

          {/* Features list */}
          <div className="space-y-4 mt-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center hover:transform hover:translate-x-2 transition-transform duration-300"
              >
                <img src={feature.img} alt="Check" className="w-5 h-5 mr-3" />
                <p
                  className={`text-gray-900 font-bold ${
                    isMobile ? "text-sm" : "text-base"
                  }`}
                >
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
