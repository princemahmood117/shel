
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import slides from "./legacyData";
import Title from "../Titile/Title";
import Testimonial from "./Testimonial";
import InsightSection from "./InsightSection/InsightSection";
import ArrowButton from "../ArrowButton/ArrowButton";



const LegacySlides = () => {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  const changeSlide = (newIndex) => {
    // Start fade-out
    setAnimate(false);

    setTimeout(() => {
      setIndex(newIndex);
      // Fade-in
      setAnimate(true);
    }, 250); // Animation timing
  };

  const nextSlide = () => {
    changeSlide((index + 1) % slides.length);
  };

  const prevSlide = () => {
    changeSlide((index - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full bg-[#E4E6E8] md:py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-12 items-center">

        {/* LEFT SIDE ICON */}
        <div className="flex justify-center items-center min-h-[420px] md:min-h-[500px]">
          <img
            key={slides[index].icon} // triggers re-render → animation works
            src={slides[index].icon}
            alt="legacy icon"
            className={`w-96 md:w-[400px] h-auto transition-all duration-500 ease-out invert             
            ${animate ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            />
              
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="space-y-2 md:space-y-8 min-h-[420px] md:min-h-[500px] flex flex-col justify-start">

          <Title text={"AN INHERENT LEGACY OF EXCELLENCE"} />

          {/* BUTTONS */}
          <div className="flex items-center gap-4">
            <ArrowButton onClick={prevSlide} direction="left"></ArrowButton>
            <ArrowButton onClick={nextSlide} direction="right"></ArrowButton>
          </div>

          <hr className="border-gray-400 mt-2" />

          {/* TEXTS WITH ANIMATION */}
          <div
            key={slides[index].id}
            className={`
              transition-all duration-500 ease-out
              ${animate ? "opacity-100 translate-x-0" : "opacity-0 translate-x-3"}
            `}>
            <h2 className="text-2xl font-medium text-[#11153A] mb-3">
              {slides[index].title}
            </h2>

            <p className="text-gray-600 leading-relaxed max-w-lg">
              {slides[index].description}
            </p>
          </div>
        </div>

      </div>

      <Testimonial></Testimonial>

      <InsightSection></InsightSection>
    </div>
  );
};

export default LegacySlides;
