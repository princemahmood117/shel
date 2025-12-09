
// import { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import { Play, X } from "lucide-react";

// import "swiper/css";
// import "swiper/css/navigation";
// import { testimonials } from "./legacyData";
// import Title from "../Titile/Title";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// const Testimonial = () => {
//   const [swiperInstance, setSwiperInstance] = useState(null);
//   const [playingVideo, setPlayingVideo] = useState(null);

//   const handleNext = () => {
//     if (swiperInstance) {
//       swiperInstance.slideNext();
//     }
//     setPlayingVideo(null); // Close video when changing slides
//   };

//   const handlePrev = () => {
//     if (swiperInstance) {
//       swiperInstance.slidePrev();
//     }
//     setPlayingVideo(null); // Close video when changing slides
//   };

//   const handlePlayVideo = (id) => {
//     setPlayingVideo(id);
//   };

//   const handleCloseVideo = () => {
//     setPlayingVideo(null);
//   };

//   return (
//     <div className="w-full py-16 px-4 bg-gray-200">
//       <div className="max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div className="flex items-center mb-12">
//           {/* Title */}
//           <Title className="uppercase" text={"Glimpse of Inspiration"}></Title>

//           {/* Navigation Buttons */}
//           <div className="flex items-center justify-center gap-4 pb-8 ml-8">
//             <div className="flex items-center justify-center gap-4">
//               <button
//                 onClick={handlePrev}
//                 className="relative inline-flex items-center w-10 h-10 justify-center overflow-hidden font-medium transition duration-300  border border-gray-800 rounded-full shadow-md group bg-white cursor-pointer">
//                 <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[rgb(33,33,88)] group-hover:translate-x-0">
//                   <FaArrowLeft className="w-4 h-6" />
//                 </span>

//                 <span className="absolute flex items-center justify-center w-full h-full text-gray-800 transition-all duration-300 transform group-hover:translate-x-full ease">
//                   <FaArrowLeft className="w-4 h-6" />
//                 </span>

//                 <span className="relative invisible">
//                   <FaArrowLeft className="w-4 h-6" />
//                 </span>
//               </button>

//               <button
//                 onClick={handleNext}
//                 className="relative inline-flex items-center w-10 h-10 justify-center overflow-hidden font-medium transition duration-300 ease-out border border-gray-800 rounded-full shadow-md group bg-white cursor-pointer">
//                 <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[rgb(33,33,88)] group-hover:translate-x-0 ease">
//                   <FaArrowRight className="w-4 h-6" />
//                 </span>

//                 <span className="absolute flex items-center justify-center w-full h-full text-gray-800 transition-all duration-300 transform group-hover:translate-x-full ease">
//                   <FaArrowRight className="w-4 h-6" />
//                 </span>

//                 <span className="relative invisible">
//                   <FaArrowRight className="w-4 h-6" />
//                 </span>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Swiper Slider */}
//         <Swiper
//           modules={[Navigation]}
//           spaceBetween={30}
//           slidesPerView={1}
//           onSwiper={setSwiperInstance}
//           onSlideChange={() => setPlayingVideo(null)} // Close video on slide change
//           className="testimonialSwiper"
//         >
//           {testimonials.map((testimonial) => (
//             <SwiperSlide key={testimonial.id}>
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//                 {/* Left Side - Video */}
//                 <div className="relative group">
//                   <div className="relative overflow-hidden rounded-lg aspect-video bg-black">
//                     {playingVideo === testimonial.id ? (
//                       // YouTube iframe when playing
//                       <iframe
//                         src={`https://www.youtube.com/embed/${testimonial.youtubeId}?autoplay=1&rel=0`}
//                         title={testimonial.name}
//                         frameBorder="0"
//                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                         allowFullScreen
//                         className="w-full h-full"
//                       />
//                     ) : (
//                       // Thumbnail when not playing
//                       <>
//                         <img
//                           src={testimonial.videoThumbnail}
//                           alt={testimonial.name}
//                           className="w-full h-full object-cover"
//                         />

//                         {/* Overlay */}
//                         <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300" />

//                         {/* Play Button */}
//                         {testimonial.youtubeId && (
//                           <div
//                             className="absolute inset-0 flex items-center justify-center cursor-pointer"
//                             onClick={() => handlePlayVideo(testimonial.id)}
//                           >
//                             <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
//                               <Play
//                                 className="w-8 h-8 text-gray-800 ml-1"
//                                 fill="currentColor"
//                               />
//                             </div>
//                           </div>
//                         )}
//                       </>
//                     )}
//                   </div>

//                   {/* Close button when video is playing */}
//                   {playingVideo === testimonial.id && (
//                     <button
//                       onClick={handleCloseVideo}
//                       className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg z-10 transition-all"
//                     >
//                       <X className="w-6 h-6 text-gray-800" />
//                     </button>
//                   )}
//                 </div>

//                 {/* Right Side - Content */}
//                 <div className="space-y-6">
//                   {/* Title */}
//                   <h3 className="text-3xl md:text-3xl text-[#11153A] font-semibold">
//                     {testimonial.title}
//                   </h3>

//                   {/* Quote */}
//                   <p className="text-lg text-[#546e7a] leading-relaxed">
//                     {testimonial.quote}
//                   </p>

//                   {/* Author Info */}
//                   <div className="">
//                     <p className="text-xl font-medium text-[#2c3e50] mb-1">
//                       {testimonial.name}
//                     </p>
//                     <p className="text-base text-gray-600">
//                       {testimonial.designation}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>


//     </div>
//   );
// };

// export default Testimonial;
















import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { X } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import { testimonials } from "./legacyData";
import Title from "../Titile/Title";
import { FaArrowLeft, FaArrowRight, FaPlay } from "react-icons/fa";
import ArrowButton from "../ArrowButton/ArrowButton";

const Testimonial = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [playingVideo, setPlayingVideo] = useState(null);

  const handleNext = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
    setPlayingVideo(null);
  };

  const handlePrev = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
    setPlayingVideo(null);
  };

  const handlePlayVideo = (id) => {
    setPlayingVideo(id);
  };

  const handleCloseVideo = () => {
    setPlayingVideo(null);
  };

  return (
    <div className="w-full py-16 px-4 bg-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex items-center mb-12">
          {/* Title */}
          <Title className="uppercase" text={"Glimpse of Inspiration"}></Title>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 pb-8 ml-8">
            <div className="flex items-center justify-center gap-4">
              <ArrowButton direction="left" onClick={handlePrev} ></ArrowButton>
              <ArrowButton direction="right" onClick={handleNext} ></ArrowButton>
            </div>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          onSwiper={setSwiperInstance}
          onSlideChange={() => setPlayingVideo(null)}
          className="testimonialSwiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                {/* Left Side - Video */}
                <div className="relative group w-full">
                  <div className="relative overflow-hidden aspect-video bg-black w-full">
                    {playingVideo === testimonial.id ? (
                      // YouTube iframe when playing
                      <iframe
                        src={`https://www.youtube.com/embed/${testimonial.youtubeId}?autoplay=1&rel=0`}
                        title={testimonial.name}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    ) : (
                      // Thumbnail when not playing
                      <>
                        <img
                          src={testimonial.videoThumbnail}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300" />

                        {/* Play Button */}
                        {testimonial.youtubeId && (
                          <div
                            className="absolute inset-0 flex items-center justify-center cursor-pointer"
                            onClick={() => handlePlayVideo(testimonial.id)}>
                            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                              <FaPlay 
                                className="w-8 h-8 text-gray-800 ml-1"
                                fill="currentColor"
                              />
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </div>

                  {/* Close button when video is playing */}
                  {playingVideo === testimonial.id && (
                    <button
                      onClick={handleCloseVideo}
                      className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg z-10 transition-all"
                    >
                      <X className="w-6 h-6 text-gray-800" />
                    </button>
                  )}
                </div>

                {/* right side content */}
                <div className="flex flex-col justify-start space-y-4 lg:space-y-6">
                  {/* author title */}
                  <h3 className="text-2xl md:text-3xl lg:text-3xl text-[#11153A] font-semibold leading-tight">
                    {testimonial.title}
                  </h3>

                  {/* quote */}
                  <p className="text-[15px] lg:text-lg text-[#546e7a] leading-relaxed">
                    {testimonial.quote}
                  </p>

                  {/* author Info */}
                  <div className="pt-2">
                    <p className="text-lg lg:text-xl font-medium text-[#2c3e50] mb-1">
                      {testimonial.name}
                    </p>
                    <p className="text-sm lg:text-base text-gray-600">
                      {testimonial.designation}
                    </p>
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

export default Testimonial;