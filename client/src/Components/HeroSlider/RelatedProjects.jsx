
// RelatedProjects.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const RelatedProjects = ({ currentProjectId, projectType, allProjects }) => {
  const navigate = useNavigate();

  // Filter related projects (same type, exclude current project)
  const relatedProjects = allProjects.filter(
    (project) => project.type === projectType && project.id !== currentProjectId
  );

  // If no related projects, don't render the component
  if (relatedProjects.length === 0) {
    return null;
  }

  const handleProjectClick = (projectId) => {
    navigate(`/project/${projectId}`);
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-800 mb-4 tracking-wide">
            RELATED PROJECTS
          </h2>
        </div>

        {/* Slider Container */}
        <div className="relative px-1">
          {/* Navigation Buttons */}
          <button className="related-prev-btn absolute md:left-0 left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-10 md:h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
            <IoIosArrowRoundBack className="w-6 h-6 md:w-8 md:h-8 text-gray-800" />
          </button>

          <button className="related-next-btn absolute md:right-0 right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-10 md:h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
            <IoIosArrowRoundForward className="w-6 h-6 md:w-8 md:h-8 text-gray-800" />
          </button>

          {/* Swiper Slider */}
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
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
            className="relatedProjectsSwiper"
          >
            {relatedProjects.map((project) => (
              <SwiperSlide key={project.id}>
                <div
                  onClick={() => handleProjectClick(project.id)}
                  className="relative group overflow-hidden cursor-pointer h-[550px] shadow-lg hover:shadow-2xl transition-all duration-300 mb-2"
                >
                  {/* Project Image */}
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-1200 group-hover:scale-105"
                  />

                  {/* Gradient Overlay */}
                  {/* <div className="absolute  inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div> */}

                  {/* Bottom Info - Always visible but enhanced on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white transition-all duration-500">
                     {/* <div className="absolute  inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div> */}
                    <h3 className="text-xl font-bold mb-2 group-hover:mb-3 transition-all duration-300">
                      {project.name}
                    </h3>

                    {/* Location & Type */}
                    <div className="flex items-center gap-2 mb-2">
                      <svg
                        className="w-4 h-4 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p className="text-sm font-medium">{project.location}</p>
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