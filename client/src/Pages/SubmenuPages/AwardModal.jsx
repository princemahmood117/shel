
// const AwardModal = ({ selectedAward, isModalOpen, closeModal }) => {
//   return (
//     <>
//       {isModalOpen && selectedAward && (
//         <div className="fixed inset-0 z-50 overflow-hidden">
//           {/* Dark Overlay on Left - Click to close */}
//           <div
//             className="absolute inset-0 bg-black/70 transition-opacity duration-300"
//             onClick={closeModal}
//             style={{
//               animation: isModalOpen ? "fadeIn 0.3s ease-out" : "fadeOut 0.3s ease-out"
//             }}
//           />

//           {/* Sidebar Panel - Slides in from Right */}
//           <div
//             className="absolute right-0 top-0 h-full w-full md:w-[600px] lg:w-[700px] bg-[#0a1128] shadow-2xl overflow-y-auto"
//             style={{
//               animation: "slideInRight 0.4s ease-out"
//             }}
//             onClick={(e) => e.stopPropagation()}>
            
//             {/* Close Button - Top Right */}
//             <button
//               onClick={closeModal}
//               className="absolute top-6 right-6 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 group"
//               aria-label="Close modal">
//               <svg
//                 className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 viewBox="0 0 24 24">
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>

//             {/* Content Container */}
//             <div className="p-8 md:p-12 pt-20">
              
//               {/* Award Image */}
//               <div className="mb-8 overflow-hidden">
//                 <img
//                   src={selectedAward.image}
//                   alt={selectedAward.title}
//                   className="w-full h-[300px] object-contain"
//                 />
//               </div>

//               {/* Award Title */}
//               <h2 className="text-xl md:text-2xl mt-4 font-bold text-white mb-6 leading-tight">
//                 {selectedAward.title}
//               </h2>
//               <hr className="my-3 text-gray-200" />

//               {/* Award Description */}
//               <div className="space-y-4 text-gray-300">
//                 {selectedAward.description && selectedAward.description.split('\n\n').map((paragraph, index) => (
//                   <p key={index} className="text-gray-300">
//                     {paragraph}
//                   </p>
//                 ))}
//               </div>

//               {/* Additional Info (if needed) */}
//               {selectedAward.year && (
//                 <div className="mt-8 pt-6 border-t border-white/10">
//                   <p className="text-sm text-gray-400">
//                     Year: <span className="text-white font-semibold">{selectedAward.year}</span>
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Animations */}
//       <style>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }

//         @keyframes fadeOut {
//           from {
//             opacity: 1;
//           }
//           to {
//             opacity: 0;
//           }
//         }

//         @keyframes slideInRight {
//           from {
//             transform: translateX(100%);
//           }
//           to {
//             transform: translateX(0);
//           }
//         }

//         @keyframes slideOutRight {
//           from {
//             transform: translateX(0);
//           }
//           to {
//             transform: translateX(100%);
//           }
//         }

//         /* Custom scrollbar for dark background */
//         .overflow-y-auto::-webkit-scrollbar {
//           width: 8px;
//         }

//         .overflow-y-auto::-webkit-scrollbar-track {
//           background: rgba(255, 255, 255, 0.05);
//           border-radius: 10px;
//         }

//         .overflow-y-auto::-webkit-scrollbar-thumb {
//           background: rgba(255, 255, 255, 0.2);
//           border-radius: 10px;
//         }

//         .overflow-y-auto::-webkit-scrollbar-thumb:hover {
//           background: rgba(255, 255, 255, 0.3);
//         }
//       `}</style>
//     </>
//   );
// };

// export default AwardModal;








import { useEffect } from "react";

const AwardModal = ({ selectedAward, isModalOpen, closeModal }) => {

  // 🔒 Lock background scroll when modal opens
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  return (
    <>
      {isModalOpen && selectedAward && (
        <div className="fixed inset-0 z-100 overflow-hidden">
          
          {/* Dark Overlay */}
          <div
            className="absolute inset-0 bg-black/70 transition-opacity duration-300"
            onClick={closeModal}
            style={{
              animation: "fadeIn 0.3s ease-out",
            }}
          />

          {/* Sidebar Panel */}
          <div
            className="absolute right-0 top-0 h-full w-full md:w-[600px] lg:w-[700px]
            bg-[#0a1128] shadow-2xl overflow-y-auto"
            style={{
              animation: "slideInRight 0.4s ease-out",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 z-20 w-12 h-12 flex items-center justify-center
              rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 group"
              aria-label="Close modal"
            >
              <svg
                className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Content */}
            <div className="p-8 md:p-12 pt-20">
              
              {/* Award Image */}
              <div className="mb-8 overflow-hidden">
                <img
                  src={selectedAward.image}
                  alt={selectedAward.title}
                  className="w-full h-[300px] object-contain"
                />
              </div>

              {/* Title */}
              <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
                {selectedAward.title}
              </h2>

              <hr className="my-4 border-white/20" />

              {/* Description */}
              <div className="space-y-4 text-gray-300">
                {selectedAward.description &&
                  selectedAward.description
                    .split("\n\n")
                    .map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
              </div>

              {/* Optional Year */}
              {selectedAward.year && (
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-sm text-gray-400">
                    Year:{" "}
                    <span className="text-white font-semibold">
                      {selectedAward.year}
                    </span>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }

        .overflow-y-auto::-webkit-scrollbar {
          width: 8px;
        }

        .overflow-y-auto::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }

        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </>
  );
};

export default AwardModal;
