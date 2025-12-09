



import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import ArrowButton from '../../Components/ArrowButton/ArrowButton';

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
    category: '',
    location: '',
    size: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side - Customer Information */}
          <div>
            <h2 style={{fontFamily: "Arial"}} className="text-2xl font-bold text-gray-800 mb-12">
              Customer Information
            </h2>

            {/* Name */}
            <div className="mb-10">
              <label className="block text-gray-700 text-lg ">
                Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border-b-2 border-gray-400 bg-transparent  focus:outline-none focus:border-gray-700 transition-colors text-gray-800"
              />
            </div>

            {/* Address */}
            <div className="mb-10">
              <label className="block text-gray-700 text-lg ">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full border-b-2 border-gray-400 bg-transparent  focus:outline-none focus:border-gray-700 transition-colors text-gray-800"
              />
            </div>

            {/* Email */}
            <div className="mb-10">
              <label className="block text-gray-700 text-lg ">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-b-2 border-gray-400 bg-transparent  focus:outline-none focus:border-gray-700 transition-colors text-gray-800"
              />
            </div>

            {/* Phone */}
            <div className="mb-10">
              <label className="block text-gray-700 text-lg ">
                Phone<span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full border-b-2 border-gray-400 bg-transparent  focus:outline-none focus:border-gray-700 transition-colors text-gray-800"
              />
            </div>
          </div>

          {/* Right Side - Requirements */}
          <div>
            <h2 style={{fontFamily: "Arial"}} className="text-2xl font-bold text-gray-800 mb-12">
              Requirements
            </h2>

            {/* Category */}
            <div className="mb-10 relative">
              <label className="block text-gray-700 text-lg ">
                Category<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  name="category"
                  required
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full border-b-2 border-gray-400 bg-transparent  focus:outline-none focus:border-gray-700 transition-colors text-gray-800 appearance-none cursor-pointer pr-8"
                >
                  <option value="" disabled></option>
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600 pointer-events-none" />
              </div>
            </div>

            {/* Location */}
            <div className="mb-10">
              <label className="block text-gray-700 text-lg ">
                Location<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="location"
                required
                value={formData.location}
                onChange={handleChange}
                className="w-full border-b-2 border-gray-400 bg-transparent  focus:outline-none focus:border-gray-700 transition-colors text-gray-800"
              />
            </div>

            {/* Size */}
            <div className="mb-10">
              <label className="block text-gray-700 text-lg ">
                Size(sft)
              </label>
              <input
                type="text"
                name="size"
                value={formData.size}
                onChange={handleChange}
                className="w-full border-b-2 border-gray-400 bg-transparent  focus:outline-none focus:border-gray-700 transition-colors text-gray-800"
              />
            </div>

            {/* Message */}
            <div className="mb-10">
              <label className="block text-gray-700 text-lg ">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="1"
                className="w-full border-b-2 border-gray-400 bg-transparent  focus:outline-none focus:border-gray-700 transition-colors text-gray-800 resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="flex items-center gap-4 mt-6">
              <span className="text-gray-800 text-lg">Submit</span>
              <ArrowButton className='p-5' direction='right'></ArrowButton>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnquiryForm;