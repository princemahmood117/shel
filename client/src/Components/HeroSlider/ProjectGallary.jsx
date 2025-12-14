

import { useState, useRef, useEffect } from 'react';

const ProjectGallery = ({ galleryImages, projectName }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [animateImage, setAnimateImage] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const lightboxRef = useRef(null);


  const openImage = (index) => {
    setSelectedImageIndex(index);
    setZoomLevel(1); // Reset zoom when opening new image
    setTimeout(() => setAnimateImage(true), 10);
  };

  const closeImage = () => {
    setAnimateImage(false);
    setZoomLevel(1);
    if (isFullscreen) {
      exitFullscreen();
    }
    setTimeout(() => setSelectedImageIndex(null), 50);
  };

  const goToPrevious = (e) => {
    e.stopPropagation();
    setAnimateImage(false);
    setZoomLevel(1); // Reset zoom when changing image
    setTimeout(() => {
      setSelectedImageIndex((prev) => 
        prev === 0 ? galleryImages.length - 1 : prev - 1
      );
      setAnimateImage(true);
    }, 150);
  };

  const goToNext = (e) => {
    e.stopPropagation();
    setAnimateImage(false);
    setZoomLevel(1); // Reset zoom when changing image
    setTimeout(() => {
      setSelectedImageIndex((prev) => 
        prev === galleryImages.length - 1 ? 0 : prev + 1
      );
      setAnimateImage(true);
    }, 150);
  };

  // Zoom In Function
  const handleZoomIn = (e) => {
    e.stopPropagation();
    setZoomLevel((prev) => Math.min(prev + 0.25, 3)); // Max zoom 3x
  };

  // Zoom Out Function
  const handleZoomOut = (e) => {
    e.stopPropagation();
    setZoomLevel((prev) => Math.max(prev - 0.25, 0.5)); // Min zoom 0.5x
  };

  // Fullscreen Toggle Function
  const toggleFullscreen = (e) => {
    e.stopPropagation();
    if (!isFullscreen) {
      enterFullscreen();
    } else {
      exitFullscreen();
    }
  };

  const enterFullscreen = () => {
    const elem = lightboxRef.current;
    if (elem) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) { // Safari
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { // IE11
        elem.msRequestFullscreen();
      }
      setIsFullscreen(true);
    }
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { // Safari
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE11
      document.msExitFullscreen();
    }
    setIsFullscreen(false);
  };

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('msfullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('msfullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex === null) return;
      
      if (e.key === 'ArrowLeft') {
        goToPrevious(e);
      } else if (e.key === 'ArrowRight') {
        goToNext(e);
      } else if (e.key === 'Escape') {
        closeImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, zoomLevel, isFullscreen]);

  
  if (!galleryImages || galleryImages.length === 0) {
    return null;
  }


  return (
    <div className="w-full bg-gray-50 py-16 mt-20">
      <div className="mx-auto bg-gray-300">
        <h2
          style={{ fontFamily: "sangbelu" }}
          className="text-3xl lg:py-28 md:py-18 py-10 md:text-4xl lg:text-6xl font-light text-gray-800 text-center tracking-wide">
          GALLERY
        </h2>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden transition-all duration-300"
              onClick={() => openImage(index)}>
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

      {/* Lightbox Modal with Navigation */}
      {selectedImageIndex !== null && (
        <div
          ref={lightboxRef}
          className="fixed inset-0 bg-black bg-opacity-90 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300 overflow-hidden"
          onClick={closeImage}>
          {/* Image Counter - Top Left */}
          <div className="absolute top-4 left-4 text-white text-sm font-light z-10">
            {selectedImageIndex + 1} / {galleryImages.length}
          </div>

          {/* Top Right Controls */}
          <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
            {/* Zoom In Button */}
            <button
              className="text-gray-400 cursor-pointer hover:text-white transition-all duration-700 p-2 hover:bg-white/10 rounded-full"
              onClick={handleZoomIn}
              aria-label="Zoom In"
              title="Zoom In (+)">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            </button>

            {/* Zoom Out Button */}
            <button
              className="text-gray-400 cursor-pointer hover:text-white transition-all duration-700 p-2 hover:bg-white/10 rounded-full"
              onClick={handleZoomOut}
              aria-label="Zoom Out"
              title="Zoom Out (-)">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
              </svg>
            </button>

            {/* Fullscreen Toggle Button */}
            <button
              className="text-gray-400 cursor-pointer hover:text-white transition-all duration-700 p-2 hover:bg-white/10 rounded-full"
              onClick={toggleFullscreen}
              aria-label={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
              title={isFullscreen ? "Exit Fullscreen" : "Fullscreen (F)"}>
              {isFullscreen ? (
                // Exit Fullscreen Icon
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9L3 3m0 0v6m0-6h6M15 15l6 6m0 0v-6m0 6h-6" />
                </svg>
              ) : (
                // Enter Fullscreen Icon
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              )}
            </button>

            {/* Close Button */}
            <button
              className="text-gray-400  cursor-pointer hover:text-white transition-all duration-700 p-2 hover:bg-white/10 rounded-full"
              onClick={closeImage}
              aria-label="Close"
              title="Close (Esc)">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Previous Button - Left Side */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 duration-700 hover:text-white text-gray-400 transition-all p-2 hover:bg-white/10 rounded-full group cursor-pointer z-10"
            onClick={goToPrevious}
            aria-label="Previous image">
            <svg className="w-8 h-8 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image Container with Zoom */}
          <div 
            className="flex items-center justify-center w-full h-full overflow-auto"
            onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryImages[selectedImageIndex]}
              alt={`${projectName}`}
              className={`object-contain transform transition-all duration-300 ${
                animateImage ? "opacity-100" : "opacity-0 scale-95"
              }`}
              style={{
                transform: `scale(${zoomLevel})`,
                maxWidth: zoomLevel > 1 ? 'none' : '100%',
                maxHeight: zoomLevel > 1 ? 'none' : '100%',
                cursor: zoomLevel > 1 ? 'move' : 'default'
              }}
            />
          </div>

          {/* Next Button - Right Side */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 hover:text-white text-gray-400 transition-all p-2 hover:bg-white/10 rounded-full group duration-700 cursor-pointer z-10"
            onClick={goToNext}
            aria-label="Next image">
            <svg className="w-8 h-8 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Zoom Level Indicator */}
          {zoomLevel !== 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm z-10 cursor-pointer">
              {Math.round(zoomLevel * 100)}%
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectGallery;
