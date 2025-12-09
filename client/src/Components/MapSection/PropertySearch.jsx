import { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';
import { locations, statuses, types } from './mapInfo';

const PropertySearch = () => {
  const [selectedType, setSelectedType] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleClearLocation = () => {
    setSelectedLocation('');
  };

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className="w-full py-16 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto">

        {/* Filter Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Type Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('type')}
              className="w-full bg-white border-b-2 border-gray-300 px-6 py-4 text-left flex items-center justify-between hover:border-gray-400 transition-colors"
            >
              <span className={selectedType ? 'text-gray-900' : 'text-gray-500'}>
                {selectedType || 'Type'}
              </span>
              <ChevronDown className={`w-5 h-5 transition-transform ${openDropdown === 'type' ? 'rotate-180' : ''}`} />
            </button>

            {openDropdown === 'type' && (
              <div className="absolute top-full left-0 right-0 bg-white shadow-lg z-50 mt-1 max-h-60 overflow-y-auto">
                {types.map((type) => (
                  <button
                    key={type}
                    onClick={() => {
                      setSelectedType(type);
                      setOpenDropdown(null);
                    }}
                    className="w-full px-6 py-3 text-left hover:bg-gray-100 transition-colors">
                    {type}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Status Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('status')}
              className="w-full bg-white border-b-2 border-gray-300 px-6 py-4 text-left flex items-center justify-between hover:border-gray-400 transition-colors"
            >
              <span className={selectedStatus ? 'text-gray-900' : 'text-gray-500'}>
                {selectedStatus || 'Status'}
              </span>
              <ChevronDown className={`w-5 h-5 transition-transform ${openDropdown === 'status' ? 'rotate-180' : ''}`} />
            </button>

            {openDropdown === 'status' && (
              <div className="absolute top-full left-0 right-0 bg-white shadow-lg z-50 mt-1">
                {statuses.map((status) => (
                  <button
                    key={status}
                    onClick={() => {
                      setSelectedStatus(status);
                      setOpenDropdown(null);
                    }}
                    className="w-full px-6 py-3 text-left hover:bg-gray-100 transition-colors"
                  >
                    {status}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Location Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('location')}
              className="w-full bg-white border-b-2 border-gray-300 px-6 py-4 text-left flex items-center justify-between hover:border-gray-400 transition-colors"
            >
              <span className={selectedLocation ? 'text-gray-900' : 'text-gray-500'}>
                {selectedLocation || 'Location'}
              </span>
              <div className="flex items-center gap-2">
                {selectedLocation && (
                  <X
                    className="w-5 h-5 text-gray-400 hover:text-gray-600"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleClearLocation();
                    }}
                  />
                )}
                <ChevronDown className={`w-5 h-5 transition-transform ${openDropdown === 'location' ? 'rotate-180' : ''}`} />
              </div>
            </button>

            {openDropdown === 'location' && (
              <div className="absolute top-full left-0 right-0 bg-white shadow-lg z-50 mt-1 max-h-60 overflow-y-auto">
                {locations.map((location) => (
                  <button
                    key={location}
                    onClick={() => {
                      setSelectedLocation(location);
                      setOpenDropdown(null);
                    }}
                    className="w-full px-6 py-3 text-left hover:bg-gray-100 transition-colors"
                  >
                    {location}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertySearch