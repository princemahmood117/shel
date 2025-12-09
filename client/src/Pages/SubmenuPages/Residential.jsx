import { useState } from "react";
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen";
import { Helmet } from "react-helmet-async";
import { residentialProjectsData } from "./residentialProjectsData";
import { Heart, ChevronDown } from "lucide-react";

const Residential = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const [activeTab, setActiveTab] = useState("All");
  const [selectedType, setSelectedType] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [favorites, setFavorites] = useState([]);

  const tabs = ["All", "Dhaka", "Chattogram"];

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const getBadgeColor = (badge) => {
    switch (badge) {
      case "blue":
        return "bg-blue-900";
      case "green":
        return "bg-green-700";
      case "red":
        return "bg-red-600";
      default:
        return "bg-gray-700";
    }
  };

  return (
    <div>
      <Helmet>
        <title>Sheltec Projects | Residential</title>
      </Helmet>

      {isLoading && (
        <LoadingScreen handleLoadingComplete={handleLoadingComplete} />
      )}

      {!isLoading && (
        <div className="mb-9">
          <div className="w-screen h-screen relative overflow-hidden m-0 p-0">
            {/* Background Image */}
            <img
              src="https://www.sheltech-bd.com/cms/admin/uploads/page/projects/1706162099ULACL.jpg"
              alt="Residential projects"
              className="w-full h-full object-cover"
            />

            {/* Hero Text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h1
                style={{ fontFamily: "Arial" }}
                className="text-4xl md:text-7xl lg:text-5xl font-light text-white tracking-wider text-center px-4">
                A LEGACY OF EXCELLENCE
              </h1>
            </div>
          </div>

          <div>
            <div className="w-full min-h-screen bg-white py-8 px-4">
              <div className="max-w-7xl mx-auto">
                {/* Tabs */}
                <div className="flex border-b  mb-8">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-9 nth-[1]:border-r nth-[2]:border-r py-1 font-semibold text-lg transition-all cursor-pointer ${
                        activeTab === tab
                          ? "bg-[#1e1b4b] text-white"
                          : "bg-white text-gray-700 hover:bg-[#1e1b4b] transition duration-300 hover:text-gray-200"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Filters */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                  <div className="relative">
                    <select
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                      className="w-full px-4 py-3 border-b bg-white appearance-none cursor-pointer focus:outline-none focus:border-blue-900 text-gray-700">
                      <option value="">Type</option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
                  </div>

                  <div className="relative">
                    <select
                      value={selectedStatus}
                      onChange={(e) => setSelectedStatus(e.target.value)}
                      className="w-full px-4 py-3 border-b bg-white appearance-none cursor-pointer focus:outline-none focus:border-blue-900 text-gray-700">
                      <option value="">Status</option>
                      <option value="ongoing">Ongoing</option>
                      <option value="upcoming">Upcoming</option>
                      <option value="completed">Completed</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none"/>
                  </div>

                  <div className="relative">
                    <select
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      className="w-full px-4 py-3 border-b bg-white appearance-none cursor-pointer focus:outline-none focus:border-blue-900 text-gray-700">
                      <option value="">Location</option>
                      <option value="dhaka">Dhaka</option>
                      <option value="chattogram">Chattogram</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
                  </div>

                  <div className="relative">
                    <select
                      value={selectedSize}
                      onChange={(e) => setSelectedSize(e.target.value)}
                      className="w-full px-4 py-3 border-b bg-white appearance-none cursor-pointer focus:outline-none focus:border-blue-900 text-gray-700">
                      <option value="">Size</option>
                      <option value="1000">1000 sqft</option>
                      <option value="1500">1500 sqft</option>
                      <option value="2000">2000 sqft</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
                  </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {residentialProjectsData.map((project) => (
                    <div
                      key={project.id}
                      className="group relative overflow-hidden rounded-none shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
                      {/* Image Container */}
                      <div className="relative h-[450px] overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.name}
                          className="w-full h-full object-cover group-hover:scale-107 transition-transform duration-1200"
                        />

                        {/* Series Badge - Vertical Text */}
                        <div
                          className={`absolute top-0 left-3 ${getBadgeColor(
                            project?.badge
                          )} text-white px-2 py-2 text-xs font-semibold flex items-center justify-center`}
                          style={{
                            writingMode: "vertical-rl",
                            textOrientation: "mixed",
                          }}>
                          <span className="rotate-180">{project.series}</span>
                        </div>

                        {/* Favorite Button */}
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            toggleFavorite(project.id);
                          }}
                          className="absolute top-1 right-4 w-6 h-6 rounded-full bg-white/80 hover:bg-white flex items-center justify-center transition-all z-10">
                          <Heart
                            className={`w-4 h-4 ${
                              favorites.includes(project.id)
                                ? "fill-red-500 text-red-500"
                                : "text-gray-600"
                            }`}
                          />
                        </button>

                        {/* Bottom Info Overlay */}
                        <div className="absolute bottom-3 bg-black/40 left-0 right-0 bg-linear-to-t from-black/90 via-black/50 to-transparent p-3">
                          <h3 className="text-white text-xl font-semibold mb-2">
                            {project.name}
                          </h3>
                          <p className="text-white/90 text-sm">
                            {project.status} • {project.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Residential;







