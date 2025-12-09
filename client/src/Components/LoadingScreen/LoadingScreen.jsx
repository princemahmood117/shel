

import { useState, useEffect } from 'react';


const LoadingScreen = ({ handleLoadingComplete }) =>  {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => {     // Start fade out after 2 seconds
      setFadeOut(true);
    }, 2000);


    // Complete loading after fade out animation
    const completeTimer = setTimeout(() => {
      handleLoadingComplete();
    }, 2000);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(completeTimer);
    };
  }, [handleLoadingComplete]);

  return (
    <div
      className={`fixed inset-0 z-9999 bg-linear-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center transition-opacity duration-2000 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="text-center">
        <div className="mb-8 animate-pulse">
          <h1 className="text-6xl md:text-9xl font-light text-white tracking-[0.3em] mb-2 ml-4">
            SHELTECH
          </h1>
          <p className="text-xl md:text-2xl text-white/70 tracking-[0.2em]">
            শেলটেক
          </p>
        </div>

        {/* Loading Animation */}
        <div className="flex items-center justify-center gap-2">
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen