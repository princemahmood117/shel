

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/pagination';
import { essenceCategories } from './essenceCategories';

const EssenceHero = () => {


  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://www.sheltech-bd.com/cms/admin/uploads/page/landowner/1733655333TrO4s.jpg"
          alt="About Sheltech"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Cards Slider at Bottom */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
     z-30 pointer-events-none w-full max-w-7xl px-4">
        <div className="pointer-events-auto">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
  
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
            className="essence-swiper"
          >
            {essenceCategories.map((category, index) => (
              <SwiperSlide key={index}>
                <Link
                  className="category-card group relative overflow-hidden block">       
                  <div className="animated-border-top"></div>                            
                  <div className="animated-border-right"></div>                 
                  <div className="animated-border-bottom"></div>           
                  <div className="animated-border-left"></div>

                  {/* Card Content */}
                  <div className="card-content relative bg-white/10 backdrop-blur-md border border-white/20 py-8 px-6 md:px-8 transition-all duration-500 group-hover:bg-white group-hover:border-white lg:min-h-[280px] min-h-[400px] flex  justify-center">
                    <div className="flex flex-col items-center justify-around text-center">
                      {/* Icon */}
                      <div className="text-white transition-colors duration-500 group-hover:text-gray-800 mb-4">
                        {category.icon}
                      </div>
                      {/* Title */}
                      <h3 className="text-base md:text-xl font-semibold text-white transition-colors duration-500 group-hover:text-gray-800">
                        {category.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .category-card {
          position: relative;
        }

        .animated-border-top {
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: white;
          z-index: 10;
        }

        .animated-border-right {
          position: absolute;
          top: 0;
          right: 0;
          width: 2px;
          height: 0;
          background: white;
          z-index: 10;
        }

        .animated-border-bottom {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 0;
          height: 2px;
          background: white;
          z-index: 10;
        }

        .animated-border-left {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 2px;
          height: 0;
          background: white;
          z-index: 10;
        }

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
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes borderRightAnimation {
          from { height: 0; }
          to { height: 100%; }
        }

        @keyframes borderBottomAnimation {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes borderLeftAnimation {
          from { height: 0; }
          to { height: 100%; }
        }

        .card-content {
          position: relative;
          z-index: 2;
        }

        :global(.essence-swiper) {
          padding-bottom: 50px;
        }

        :global(.essence-swiper .swiper-pagination-bullet) {
          width: 10px;
          height: 10px;
          background: white;
          opacity: 0.5;
        }

        :global(.essence-swiper .swiper-pagination-bullet-active) {
          opacity: 1;
          width: 30px;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
};

export default EssenceHero;