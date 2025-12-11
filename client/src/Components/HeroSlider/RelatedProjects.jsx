// RelatedProjects.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Title from "../Titile/Title";
import ArrowButton from "../ArrowButton/ArrowButton";
import { useState } from "react";

const RelatedProjects = ({ currentProjectId, projectType, allProjects }) => {
  const navigate = useNavigate();
    const [swiperInstance, setSwiperInstance] = useState(null);
  
  
    const handleNext = () => {
      if (swiperInstance) {
        swiperInstance.slideNext();
      }
    };
  
    const handlePrev = () => {
      if (swiperInstance) {
        swiperInstance.slidePrev();
      }
    };

  // Filter related projects (same type, exclude current project)
  const relatedProjects = allProjects.filter(
    (project) => project.type === projectType && project.id !== currentProjectId
  );

  if (relatedProjects.length === 0) {
    return null;
  }

  const handleProjectClick = (projectId) => {
    navigate(`/project/${projectId}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        {/* <div className="mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-800 mb-4 tracking-wide">
            RELATED PROJECTS
          </h2>
        </div> */}
        <div className="md:flex justify-between items-center md:mb-6 ">
          <div>
            <Title className="uppercase text-3xl" text="RELATED PROJECTS" />
          </div>

          {/* buttons */}
          <div className="flex items-center gap-8 pb-6">
            <ArrowButton direction="left" onClick={handlePrev}></ArrowButton>
            <ArrowButton direction="right" onClick={handleNext}></ArrowButton>

            <div className="flex justify-center items-center gap-3">
              View All
              <ArrowButton direction="right"></ArrowButton>
            </div>
          </div>
        </div>

        {/* Slider Container */}
        <div className="relative px-1">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            onSwiper={setSwiperInstance}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: ".related-prev-btn",
              nextEl: ".related-next-btn",
            }}
            modules={[Pagination, Navigation, Autoplay]}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 28,
              },
            }}
            className="relatedProjectsSwiper">
            {relatedProjects.map((project) => (
              <SwiperSlide key={project.id}>
                <div
                  onClick={() => handleProjectClick(project.id)}
                  
                  className="relative group overflow-hidden cursor-pointer h-[550px] shadow-lg hover:shadow-2xl transition-all duration-300 mb-2"
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-1200 group-hover:scale-105"
                  />
                  <div className="absolute bottom-4 bg-black/50 left-0 right-0 p-6 text-white bg-linear-to-t from-black/70 to-transparent group-hover:bg-blue-900/80 transition-all duration-500">
                    <h3 className="text-xl font-semibold mb-2">
                      {project?.title}
                    </h3>

                    <div className=" items-center gap-3">
                      <h3 className="text-xl font-bold mb-2 transition-all duration-300">
                        {project.name}
                      </h3>
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
      </div>
    </div>
  );
};

export default RelatedProjects;
