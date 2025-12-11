import React, { useRef, useState, useEffect } from "react";

const Amenities = ({ amenities }) => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Update pagination index based on scroll position
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleScroll = () => {
      const width = slider.offsetWidth;
      const newIndex = Math.round(slider.scrollLeft / width);
      setCurrentIndex(newIndex);
    };

    slider.addEventListener("scroll", handleScroll);
    return () => slider.removeEventListener("scroll", handleScroll);
  }, []);

  if (!amenities || amenities.length === 0) {
    return null;
  }

  return (
    <div className="w-full bg-gray-50 lg:py-26 md:my-18 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-800 mb-16 text-center tracking-widest uppercase">
          FEATURES & AMENITIES
        </h2>

        {/* --- Mobile Slider (Only visible below md) --- */}
        <div className="block md:hidden overflow-hidden">
          <div
            ref={sliderRef}
            className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
          >
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-1/2 snap-center border border-gray-300 flex flex-col items-center justify-center py-12 px-6 hover:bg-white transition-colors duration-300 group"
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={amenity.icon}
                    alt={amenity.title}
                    className="w-16 h-16 object-contain cursor-pointer"
                  />
                </div>

                <h3 className="text-center text-sm font-normal text-gray-800 group-hover:text-gray-900 transition-colors">
                  {amenity.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: Math.ceil(amenities.length / 2) }).map(
              (_, i) => (
                <div
                  key={i}
                  className={`w-8 h-1 rounded transition-all duration-300 ${
                    currentIndex === i ? "bg-gray-800" : "bg-gray-300"
                  }`}
                ></div>
              )
            )}
          </div>
        </div>

        {/* --- Desktop Grid (Visible md and up) --- */}
        <div className="hidden md:grid grid-cols-4 lg:grid-cols-5  ">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center py-12 px-6 border border-gray-300 hover:bg-white transition-colors duration-300 group"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                <img
                  src={amenity.icon}
                  alt={amenity.title}
                  className="w-16 h-16 md:w-20 md:h-20 object-contain cursor-pointer"
                />
              </div>

              <h3 className="text-center text-base font-normal text-gray-800 group-hover:text-gray-900 transition-colors">
                {amenity.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Amenities;
