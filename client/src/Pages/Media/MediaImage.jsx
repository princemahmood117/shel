// import mediaData from "./mediaData";

// const MediaImage = () => {
//   return (
//     <div className="w-full py-16 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-semibold uppercase">
//             Media
//           </h2>
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {mediaData.map((insight) => (
//             <div
//               key={insight.id}
//               className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg h-[500px] md:h-[550px] "
//             >
//               <img
//                 src={insight.image}
//                 alt={insight.title}
//                 className="w-full h-full object-cover z-50 transition duration-1000 hover:scale-110"
//               />

//               {/* Dark Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />


//               {/* Content */}
//               <div className="absolute inset-0 flex flex-col justify-between p-6 pointer-events-none">
//                 {/* Title */}
//                 <h3 className="text-white text-2xl font-semibold leading-tight">
//                   {insight.title}
//                 </h3>

//                 {/* Bottom Info */}
//                 <div className="flex justify-between items-end">
//                   <p className="text-white text-lg font-medium">
//                     {insight.month} {insight.year}
//                   </p>
//                   <span className="text-white text-sm font-medium px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">
//                     {insight.category}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MediaImage;







import { useState } from 'react';
import mediaData from "./mediaData";
import { Link } from 'react-router-dom';

const MediaImage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Newsletters', 'Events', 'News', 'Blog'];

  // Filter data based on selected category
  const filteredData = selectedCategory === 'All' 
    ? mediaData 
    : mediaData.filter(item => item.category === selectedCategory);

  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center my-8"></div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-8 py-1 rounded-full font-medium  cursor-pointer transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-[#11153A] text-white'
                  : 'bg-white text-gray-800 border-2 border-gray-300 hover:bg-[#11153A] hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredData.length > 0 ? (
            filteredData.map((insight) => (
              <Link 
              to={insight.slug}
                key={insight.id}
                className="relative cursor-pointer overflow-hidden shadow-lg h-[500px] md:h-[550px] group"
              >
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 pointer-events-none">
                  {/* Title */}
                  <h3 className="text-white text-2xl font-semibold leading-tight">
                    {insight.title}
                  </h3>

                  {/* Bottom Info */}
                  <div className="flex justify-between items-end">
                    <p className="text-white text-lg font-medium">
                      {insight.month} {insight.year}
                    </p>
                    <span className="text-white text-sm font-medium px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">
                      {insight.category}
                    </span>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-gray-500 text-xl">
                No {selectedCategory.toLowerCase()} found.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MediaImage;
