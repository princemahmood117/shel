import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen";
import ArrowButton from "../../Components/ArrowButton/ArrowButton";
import Title from "../../Components/Titile/Title";
import "swiper/css";
import "swiper/css/navigation";
import awardsData from "./awardsData";
import AwardModal from "./AwardModal";


const Awards = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [selectedAward, setSelectedAward] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const handlePrev = () => swiperInstance?.slidePrev();
  const handleNext = () => swiperInstance?.slideNext();

  const openModal = (award) => {
    setSelectedAward(award);
    setIsModalOpen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAward(null);
    // Re-enable body scroll
    document.body.style.overflow = 'unset';
  };

  return (
    <div>
      <Helmet>
        <title>Sheltech Awards - Recognized Excellence in Real Estate</title>
      </Helmet>

      {isLoading && (
        <LoadingScreen handleLoadingComplete={handleLoadingComplete} />
      )}

      {!isLoading && (
        <>
          {/* Hero Section */}
          <div className="relative w-full lg:h-[650px] md:h-[480px] h-[380px]">
            <img
              src="https://www.sheltech-bd.com/cms/admin/uploads/page/awards/1720595579xCTjF.jpg"
              alt="About Sheltech"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
              <h1
                style={{ fontFamily: "sangbelu" }}
                className="text-3xl md:text-4xl lg:text-6xl font-light text-white uppercase tracking-wider text-center px-4"
              >
                awards & accolades
              </h1>
            </div>
          </div>

          {/* Awards Slider Section */}
          <div className="bg-gray-300 py-16 md:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Header with Title and Buttons */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12">
                {/* Title */}
                <div className="mb-6 md:mb-0">
                  <Title className="uppercase text-3xl md:text-4xl" text="AWARDS & ACCOLADES" />
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center gap-6">
                  <ArrowButton className="p-5" direction="left" onClick={handlePrev} />
                  <ArrowButton className="p-5" direction="right" onClick={handleNext} />
                </div>
              </div>

              {/* Swiper Slider */}
              <div className="relative">
                <Swiper
                  modules={[Navigation, Autoplay]}
                  slidesPerView={1}
                  spaceBetween={24}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  onSwiper={setSwiperInstance}
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
                      slidesPerView: 4,
                      spaceBetween: 28,
                    },
                  }}
                  className="awardsSwiper pb-4">
                  {awardsData.map((award) => (
                    <SwiperSlide key={award.id}>
                      <div
                        onClick={() => openModal(award)}
                        className="overflow-hidden cursor-pointer group h-full">
                        {/* Award Image */}
                        <div className="relative h-64 overflow-hidden">
                          <img
                            src={award.image}
                            alt={award.title}
                            className="w-full h-full object-cover duration-500 border-16 border-gray-100"
                          />
                        </div>

                        {/* Award Title */}
                        <div className="p-6">
                          <h3 className="text-lg font-semibold text-gray-800 line-clamp-3  transition-colors duration-300">
                            {award.title}
                          </h3>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
          {/* Modal */}
          <AwardModal selectedAward={selectedAward} closeModal={closeModal} isModalOpen={isModalOpen}></AwardModal>
        </>
      )}

      {/* Add animation styles */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        /* Custom scrollbar for modal */
        .overflow-y-auto::-webkit-scrollbar {
          width: 8px;
        }

        .overflow-y-auto::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 10px;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
      `}</style>
    </div>
  );
};

export default Awards;