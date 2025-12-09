

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import Title from "../Titile/Title";
import ArrowButton from "../ArrowButton/ArrowButton";
import projects from "./royalProjects";

export default function Royal() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const handleNext = () => swiperInstance?.slideNext();
  const handlePrev = () => swiperInstance?.slidePrev();

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.realIndex);
  };

  const currentProject = projects[currentSlide];

  return (
    <div className="w-full bg-gray-50 flex flex-col lg:flex-row pb-3">
      {/* Left Side */}
      <div className="md:w-1/2 bg-gray-50 flex flex-col mt-6">
        <div className="md:px-8 lg:px-16 px-2">
          <Title className="text-3xl" text={"EXPERIENCE ROYAL GRANDEUR"} />
          <h2 className="text-xl lg:text-2xl font-semibold text-gray-800 transition-all duration-500">
            {currentProject.name}
          </h2>

          <p className="text-md text-gray-600 mb-3 transition-all duration-500">
            {currentProject.type} • {currentProject.series} • {currentProject.location}
          </p>

          <div className="flex gap-6 my-3">
            <ArrowButton direction="left" onClick={handlePrev} />
            <ArrowButton direction="right" onClick={handleNext} />
          </div>
        </div>
      </div>



      {/* Right Side - Swiper */}
      <div   className="
    md:w-1/2 w-full relative overflow-visible flex items-center py-0 
    px-4 sm:px-6 md:px-0
  "
     style={{ height: "520px" }}>
        <Swiper
          modules={[Navigation, EffectCoverflow, Autoplay]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={false}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 0,
            stretch: -100,
            depth: 200,
            modifier: 1.5,
            slideShadows: false,
            spaceBetween: -80,
          }}
          speed={700}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          onSwiper={setSwiperInstance}
          onSlideChange={handleSlideChange}
          className="w-full h-full"
          breakpoints={{
            320: { slidesPerView: 1.5 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 2.1 },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              {({ isActive, isNext }) => (
                <div
                  className={`relative overflow-hidden transition-all duration-700 ${
                    isActive
                      ? "opacity-100 z-20"
                      : isNext
                      ? "scale-90 opacity-100 z-10 -mt-4"
                      : "scale-90 opacity-80 z-0"
                  }`}
                  style={{
                    width: isActive ? "460px" : "300px",
                    height: isActive ? "520px" : "420px",
                    
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover hover:scale-110 transition-all duration-700"
                  />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}




