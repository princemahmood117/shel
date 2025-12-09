// import { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import { useNavigate } from "react-router-dom";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import ArrowButton from "../../../Components/ArrowButton/ArrowButton";
// import Title from "../../../Components/Titile/Title";
// import positiveData from "./positiveData";

// const PositiveChanges = () => {
//   const [swiperInstance, setSwiperInstance] = useState(null);
//   const navigate = useNavigate();

//   const handleNext = () => {
//     if (swiperInstance) {
//       swiperInstance.slideNext();
//     }
//   };

//   const handlePrev = () => {
//     if (swiperInstance) {
//       swiperInstance.slidePrev();
//     }
//   };

//   const handleInsightClick = (slug) => {
//     navigate(`/insights/${slug}`);
//   };

//   return (
//     <div className="w-full py-0 md:py-16 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div className="flex justify-between items-center mb-12">
//           <Title
//             className="uppercase max-w-2xl"
//             text="Facilitating Positive Changes Through CSR"
//           />

//           <div className="flex items-center gap-4">
//             <ArrowButton direction="left" onClick={handlePrev}></ArrowButton>
//             <ArrowButton direction="right" onClick={handleNext}></ArrowButton>
//           </div>
//         </div>

//         {/* Swiper Slider */}
//         <Swiper
//           modules={[Navigation, Pagination]}
//           spaceBetween={30}
//           slidesPerView={1}
//           onSwiper={setSwiperInstance}
//           breakpoints={{
//             640: {
//               slidesPerView: 2,
//               spaceBetween: 20,
//             },
//             1024: {
//               slidesPerView: 3,
//               spaceBetween: 30,
//             },
//           }}
//           className="insightsSwiper"
//         >
//           {positiveData.map((insight) => (
//             <SwiperSlide key={insight.id}>
//               <div
//                 onClick={() => handleInsightClick(insight.slug)}
//                 className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg h-[500px] transition-transform duration-300 hover:scale-105 md:h-[650px]">
//                 <img
//                   src={insight.image}
//                   alt={insight.title}
//                   className="w-full h-full object-cover"
//                 />

//               </div>
              
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default PositiveChanges;









import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ArrowButton from "../../../Components/ArrowButton/ArrowButton";
import Title from "../../../Components/Titile/Title";
import positiveData from "./positiveData";

const PositiveChanges = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const navigate = useNavigate();

  const handleNext = () => swiperInstance?.slideNext();
  const handlePrev = () => swiperInstance?.slidePrev();

  const handleInsightClick = (slug) => {
    navigate(`/insights/${slug}`);
  };

  return (
    <div className="w-full bg-[#E4E6E8] py-20 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-12">
          <Title
            className="uppercase max-w-2xl"
            text="Facilitating Positive Changes Through CSR"
          />

          <div className="flex items-center gap-4">
            <ArrowButton direction="left" onClick={handlePrev} />
            <ArrowButton direction="right" onClick={handleNext} />
          </div>
        </div>

        {/* Swiper Section */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay
          onSwiper={setSwiperInstance}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 30 },
          }}
          className="insightsSwiper"
        >
          {positiveData.map((insight) => (
            <SwiperSlide key={insight.id}>
              <div
                onClick={() => handleInsightClick(insight.slug)}
                className="cursor-pointer group"
              >
                {/* IMAGE */}
                <div className="overflow-hidden rounded-t-md h-[300px] md:h-[600px] bg-gray-100">
                  <img
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* HORIZONTAL LINE */}
                <div className="h-1 bg-gray-300 mt-4 mb-3"></div>

                {/* TEXT */}
                <p className="text-md font-semibold md:text-base text-gray-800 leading-relaxed">
                  {insight?.title}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PositiveChanges;
