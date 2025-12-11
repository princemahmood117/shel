
import React, { useState } from 'react';

const ProjectGallery = ({ galleryImages, projectName }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [animateImage, setAnimateImage] = useState(false);

  if (!galleryImages || galleryImages.length === 0) {
    return null;
  }

  const openImage = (image) => {
    setSelectedImage(image);
    setTimeout(() => setAnimateImage(true), 10); // triggers animation
  };

  const closeImage = () => {
    setAnimateImage(false);
    setTimeout(() => setSelectedImage(null), 50); // wait for animation
  };

  return (
    <div className="w-full bg-gray-50 py-16 mt-20">
      <div className="mx-auto bg-gray-300">
        <h2
          style={{ fontFamily: "sangbelu" }}
          className="text-3xl lg:py-28 md:py-18 py-10 md:text-4xl lg:text-6xl font-light text-gray-800 text-center tracking-wide"
        >
          GALLERY
        </h2>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              onClick={() => openImage(image)}
            >
              <div className="aspect-w-16 aspect-h-12 w-full">
                <img
                  src={image}
                  alt={`${projectName} - Gallery Image ${index + 1}`}
                  className="w-full h-[320px] object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300"
          onClick={closeImage}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={closeImage}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Image with smooth animation */}
          <img
            src={selectedImage}
            alt={projectName}
            className={`max-w-full max-h-full object-contain transform transition-all duration-300 ${
              animateImage
                ? "opacity-100 scale-100"
                : "opacity-0 scale-90"
            }`}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default ProjectGallery;
