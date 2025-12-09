

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { projects } from "./landmarkProjectsInfo";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const LandmarkSliders = () => {
  return (
    <div className="w-full relative px-1 md:px-16 ">
      <button className="landmark-prev-btn absolute md:left-28 left-7 top-1/2 z-10 w-6 h-6 md:w-8 md:h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
        <IoIosArrowRoundBack className="w-6 h-6 md:w-8 md:h-8 text-gray-800"/>
      </button>
      
      <button className="landmark-next-btn absolute md:right-28 right-7 top-1/2 z-10 w-6 h-6 md:w-8 md:h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
        <IoIosArrowRoundForward className="w-6 h-6 md:w-8 md:h-8 text-gray-800"/>
      </button>


      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: ".landmark-prev-btn",
          nextEl: ".landmark-next-btn",
        }}
        modules={[Pagination, Navigation, Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        className="landmarkSwiper">

        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <div className="relative group overflow-hidden cursor-pointer h-[450px] mb-2">
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-1300 group-hover:scale-110"
              />

              
              {(project.comingSoon || project.soldOut) && (
                <div className="absolute inset-0 bg-white/90 flex items-center justify-center">
                  <span className="text-3xl font-bold text-gray-400 tracking-wider">
                    {project.soldOut ? "SOLD OUT" : "COMING SOON"}
                  </span>
                </div>
              )}

              {/* Bottom Info */}
              <div className="absolute bottom-4 bg-black/50 left-0 right-0 p-2 text-white bg-linear-to-t from-black/70 to-transparent group-hover:bg-blue-900/80 transition-all duration-500">
                <h3 className="text-xl font-semibold mb-2">
                  {project?.title}
                </h3>

                <div className="flex items-center gap-3">
                  <p className="text-sm font-medium">
                    {project.status} • {project?.location}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LandmarkSliders;


