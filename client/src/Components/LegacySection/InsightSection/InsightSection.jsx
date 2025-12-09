import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Title from "../../Titile/Title";
import insights from "./insightData";
import ArrowButton from "../../ArrowButton/ArrowButton";

const InsightSection = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const navigate = useNavigate();


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

  const handleInsightClick = (slug) => {
    navigate(`/insights/${slug}`);
  };

  const handleViewAll = () => {
    navigate("/insights");
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="md:flex justify-between items-center md:mb-6 ">
          <div>
            <Title className="uppercase text-3xl" text="Insights" />
          </div>

          {/* buttons */}
          <div className="flex items-center gap-8 pb-6">
            <ArrowButton direction="left" onClick={handlePrev}></ArrowButton>
            <ArrowButton direction="right" onClick={handleNext}></ArrowButton>

            <div className="flex justify-center items-center gap-3">
               View All
               <ArrowButton direction="right" onClick={handleViewAll}></ArrowButton>
            </div>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          onSwiper={setSwiperInstance}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          className="insightsSwiper">
          {insights.map((insight) => (
            <SwiperSlide key={insight.id}>
              <div
                onClick={() => handleInsightClick(insight.slug)}
                className="relative group cursor-pointer overflow-hidden  shadow-lg h-[500px] transition-transform duration-300  md:h-[500px]"
              >
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1300"
                />         

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-6">
                  {/* Title */}
                  <h3 className="text-white text-xl font-semibold leading-tight transition-transform duration-300">
                    {insight.title}
                  </h3>

                  {/* Bottom Info */}
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-white text-lg font-medium">
                        {insight.month} {insight.year}
                      </p>
                    </div>
                    <div>
                      <span className="text-white text-sm font-medium px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">
                        {insight.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default InsightSection;
