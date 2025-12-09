import { useState } from "react";
import landData from "./landData";
import { ChevronDown } from "lucide-react";

const LandImage = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedType, setSelectedType] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [favorites, setFavorites] = useState([]);

  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 mx-auto max-w-7xl">
          <div className="relative">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-4 py-3 border-b bg-white appearance-none cursor-pointer focus:outline-none focus:border-blue-900 text-gray-700"
            >
              <option value="">All Categories</option>
              <option value="ongoing">Ongoing</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
          </div>

          <div className="relative">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full px-4 py-3 border-b bg-white appearance-none cursor-pointer focus:outline-none focus:border-blue-900 text-gray-700"
            >
              <option value="">Location</option>
              <option value="banani">Banani</option>
              <option value="baridhara">Baridhara</option>
              <option value="mirpur">Mirpur</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {landData.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-none shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-[450px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-107 transition-transform duration-1200"
                />

                {/* Bottom Info Overlay */}
                <div className="absolute bottom-3 bg-black/40 left-0 right-0 bg-linear-to-t from-black/90 via-black/50 to-transparent p-3">
                  <h3 className="text-white text-xl font-semibold mb-2">
                    {project?.name}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {project?.subLocation} • {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandImage;
