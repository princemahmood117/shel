
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import slides, { categories } from "./heroSliderData";

export default function HeroSlider() {
  const [showText, setShowText] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleSlideChange = (swiper) => {
    setCurrentSlideIndex(swiper.realIndex);
    setShowText(false);
    setTimeout(() => setShowText(true), 1000);
  };

  return (
    <div className="w-screen h-screen relative overflow-hidden m-0 p-0">
      <Swiper
        autoplay={{
          delay: 5000,
        }}
        modules={[Navigation, EffectFade, Autoplay]}
        effect="slide"
        speed={700}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        onSlideChange={handleSlideChange}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* Image, Video, or Vimeo */}
              {slide.type === "vimeo" ? (
                <iframe
                  src={`https://player.vimeo.com/video/${slide.videoId}?autoplay=1&loop=1&muted=1&background=1&controls=0`}
                  className="w-full h-full object-cover"
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                />
              ) : slide.type === "video" ? (
                <video
                  src={slide.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={slide.src}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              )}

              {/* Text Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center mx-auto text-white z-10">
                <h1
                  style={{
                    fontFamily: "'Spectral', Arial, Helvetica, sans-serif",
                    lineHeight: "1",
                  }}
                  className={`md:text-[90px] text-[40px] text-center tracking-tight transition-all duration-1000 ${
                    showText && currentSlideIndex === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  {slide.title}
                </h1>

                <h2
                  style={{
                    fontFamily: "'Spectral', Arial, Helvetica, sans-serif",
                  }}
                  className={`md:text-[45px] text-[30px] text-center tracking-tight transition-all duration-1000 delay-300 ${
                    showText && currentSlideIndex === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  {slide.subtitle}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Fixed Category Cards at Bottom */}
      <div className="absolute bottom-0 right-0 left-0 z-30 flex justify-center items-center pointer-events-none">
        <div className="flex w-full items-center justify-center pointer-events-auto">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={category.link}
              className="category-card group relative overflow-hidden"
            >
              {/* Animated Border - Top (left to right) */}
              <div className="animated-border-top"></div>
              
              {/* Animated Border - Right (top to bottom) */}
              <div className="animated-border-right"></div>
              
              {/* Animated Border - Bottom (left to right) */}
              <div className="animated-border-bottom"></div>
              
              {/* Animated Border - Left (top to bottom) */}
              <div className="animated-border-left"></div>

              {/* Card Content */}
              <div className="card-content relative bg-white/10 backdrop-blur-md border border-white/20 py-6 md:px-14 px-8 transition-all duration-500 group-hover:bg-white group-hover:border-white">
                <div className="flex flex-col items-center text-center">
                  {/* Icon */}
                  <div className="text-white transition-colors duration-500 group-hover:text-gray-800 mb-4">
                    {category.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-sm md:text-2xl font-semibold text-white transition-colors duration-500 group-hover:text-gray-800">
                    {category.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Custom Navigation - Invisible Click Areas */}
      <div className="swiper-button-prev-custom absolute left-0 top-0 w-1/2 h-full z-20 cursor-pointer" />
      <div className="swiper-button-next-custom absolute right-0 top-0 w-1/2 h-full z-20 cursor-pointer" />

      {/* Custom Styles */}
      <style jsx>{`
        .category-card {
          position: relative;
        }

        /* Animated Border - Top */
        .animated-border-top {
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: white;
          z-index: 10;
        }

        /* Animated Border - Right */
        .animated-border-right {
          position: absolute;
          top: 0;
          right: 0;
          width: 2px;
          height: 0;
          background: white;
          z-index: 10;
        }

        /* Animated Border - Bottom */
        .animated-border-bottom {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 0;
          height: 2px;
          background: white;
          z-index: 10;
        }

        /* Animated Border - Left */
        .animated-border-left {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 2px;
          height: 0;
          background: white;
          z-index: 10;
        }

        /* Hover Animations */
        .category-card:hover .animated-border-top {
          animation: borderTopAnimation 0.3s ease-out forwards;
        }

        .category-card:hover .animated-border-right {
          animation: borderRightAnimation 0.3s ease-out 0.3s forwards;
        }

        .category-card:hover .animated-border-bottom {
          animation: borderBottomAnimation 0.3s ease-out 0.6s forwards;
        }

        .category-card:hover .animated-border-left {
          animation: borderLeftAnimation 0.3s ease-out 0.9s forwards;
        }

        @keyframes borderTopAnimation {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes borderRightAnimation {
          from {
            height: 0;
          }
          to {
            height: 100%;
          }
        }

        @keyframes borderBottomAnimation {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes borderLeftAnimation {
          from {
            height: 0;
          }
          to {
            height: 100%;
          }
        }

        .card-content {
          position: relative;
          z-index: 2;
        }
      `}</style>
    </div>
  );
}










