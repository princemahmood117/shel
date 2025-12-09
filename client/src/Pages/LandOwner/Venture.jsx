import React, { useState } from "react";
import { Link } from "react-router-dom";
import ArrowButton from "../../Components/ArrowButton/ArrowButton";

const Venture = () => {
  const [formData, setFormData] = useState({
    locality: "",
    address: "",
    landSize: "",
    frontRoadWidth: "",
    landCategory: "",
    facing: "",
    attractiveBenefits: "",
    landownerName: "",
    contactPerson: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-baseline items-start mb-16">
          <h1
            style={{ fontFamily: "sangbelu" }}
            className="text-3xl md:text-4xl lg:text-5xl font-light text-[#2d3e50] leading-tight max-w-xl"
          >
            START YOUR JOINT VENTURE TODAY
          </h1>

          {/* Phone Button */}
          <Link
            href="tel:09606445544"
            className="bg-[#2d3e50] hover:bg-[#1f2b3a] text-white md:px-12 px-8 py-4 rounded-full flex items-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl md:ml-0 lg:ml-20"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <div className="text-left">
              <div className="text-sm font-light">Talk to our Land Experts</div>
              <div className="text-xl font-medium">09606 44 55 44</div>
            </div>
          </Link>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Land Information */}
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#2d3e50] mb-10">
                Land Information
              </h2>

              <div className="space-y-8">
                {/* Locality */}
                <div>
                  <input
                    type="text"
                    name="locality"
                    placeholder="Locality*"
                    required
                    value={formData.locality}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-gray-400 text-[#2d3e50] placeholder-gray-500 py-3 px-0 focus:outline-none focus:border-[#2d3e50] transition-colors text-lg"
                  />
                </div>

                {/* Address */}
                <div>
                  <input
                    type="text"
                    name="address"
                    placeholder="Address*"
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-gray-400 text-[#2d3e50] placeholder-gray-500 py-3 px-0 focus:outline-none focus:border-[#2d3e50] transition-colors text-lg"
                  />
                </div>

                {/* Land Size */}
                <div>
                  <input
                    type="text"
                    name="landSize"
                    placeholder="Land Size"
                    value={formData.landSize}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-gray-400 text-[#2d3e50] placeholder-gray-500 py-3 px-0 focus:outline-none focus:border-[#2d3e50] transition-colors text-lg"
                  />
                </div>

                {/* Front Road Width */}
                <div>
                  <input
                    type="text"
                    name="frontRoadWidth"
                    placeholder="Front Road Width"
                    value={formData.frontRoadWidth}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-gray-400 text-[#2d3e50] placeholder-gray-500 py-3 px-0 focus:outline-none focus:border-[#2d3e50] transition-colors text-lg"
                  />
                </div>

                {/* Land Category */}
                <div className="relative">
                  <select
                    name="landCategory"
                    value={formData.landCategory}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-gray-400 text-[#2d3e50] py-3 px-0 focus:outline-none focus:border-[#2d3e50] transition-colors appearance-none cursor-pointer text-lg"
                    style={{
                      color: formData.landCategory ? "#2d3e50" : "#6b7280",
                    }}
                  >
                    <option value="" disabled>
                      Land Category
                    </option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="industrial">Industrial</option>
                    <option value="agricultural">Agricultural</option>
                  </select>
                  <svg
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2d3e50] pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>

                {/* Facing */}
                <div className="relative">
                  <select
                    name="facing"
                    value={formData.facing}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-gray-400 text-[#2d3e50] py-3 px-0 focus:outline-none focus:border-[#2d3e50] transition-colors appearance-none cursor-pointer text-lg"
                    style={{ color: formData.facing ? "#2d3e50" : "#6b7280" }}
                  >
                    <option value="" disabled>
                      Facing
                    </option>
                    <option value="north">North</option>
                    <option value="south">South</option>
                    <option value="east">East</option>
                    <option value="west">West</option>
                    <option value="north-east">North-East</option>
                    <option value="north-west">North-West</option>
                    <option value="south-east">South-East</option>
                    <option value="south-west">South-West</option>
                  </select>
                  <svg
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2d3e50] pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>

                {/* Attractive Benefits */}
                <div>
                  <input
                    type="text"
                    name="attractiveBenefits"
                    placeholder="Attractive Benefits (if any)"
                    value={formData.attractiveBenefits}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-gray-400 text-[#2d3e50] placeholder-gray-500 py-3 px-0 focus:outline-none focus:border-[#2d3e50] transition-colors text-lg"
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Landowner's Profile */}
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#2d3e50] mb-10">
                Landowner's Profile
              </h2>

              <div className="space-y-8">
                {/* Landowner Name */}
                <div>
                  <input
                    type="text"
                    name="landownerName"
                    placeholder="Landowner Name*"
                    required
                    value={formData.landownerName}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-gray-400 text-[#2d3e50] placeholder-gray-500 py-3 px-0 focus:outline-none focus:border-[#2d3e50] transition-colors text-lg"
                  />
                </div>

                {/* Contact Person */}
                <div>
                  <input
                    type="text"
                    name="contactPerson"
                    placeholder="Contact Person"
                    value={formData.contactPerson}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-gray-400 text-[#2d3e50] placeholder-gray-500 py-3 px-0 focus:outline-none focus:border-[#2d3e50] transition-colors text-lg"
                  />
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-gray-400 text-[#2d3e50] placeholder-gray-500 py-3 px-0 focus:outline-none focus:border-[#2d3e50] transition-colors text-lg"
                  />
                </div>

                {/* Phone */}
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone*"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-gray-400 text-[#2d3e50] placeholder-gray-500 py-3 px-0 focus:outline-none focus:border-[#2d3e50] transition-colors text-lg"
                  />
                </div>

                {/* Message */}
                <div>
                  <input
                    type="text"
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b border-gray-400 text-[#2d3e50] placeholder-gray-500 py-3 px-0 focus:outline-none focus:border-[#2d3e50] transition-colors text-lg"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex items-center gap-4 pt-6 group cursor-pointer">
                  <span className="text-[#2d3e50] text-lg font-light">
                    Submit
                  </span>
                  <ArrowButton
                    direction="right"
                    className="group-hover:trigger w-10 h-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Venture;
