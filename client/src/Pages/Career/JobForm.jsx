// import React, { useState } from 'react';
// import Title from '../../Components/Titile/Title';

// const JobForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     email: '',
//     address: '',
//     position: '',
//     coverLetter: '',
//     resume: null
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleFileChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       resume: e.target.files[0]
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     // Add your form submission logic here
//   };

//   return (
//     <div className="min-h-screen flex">
//       {/* Left Side - Job Openings */}
//       <div className="w-full lg:w-1/2 bg-[#0a0e27] flex items-center justify-center p-8 lg:p-16 relative">
//         <Title className='text-white text-3xl lg:text-5xl font-light tracking-wide absolute top-14' text={'JOB OPENINGS'}></Title>
//       </div>

//       {/* Right Side - Form */}
//       <div className="w-full lg:w-1/2 bg-[#2a3158] flex items-center justify-center p-8 lg:p-16 relative">
//         <div className="w-full max-w-xl">
//           <h2 className="text-white text-3xl lg:text-4xl font-light mb-12">
//             Submit Your Resume Today
//           </h2>

//           <form onSubmit={handleSubmit} className="space-y-8">
//             {/* Name Field */}
//             <div>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Name*"
//                 required
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 className="w-full bg-transparent border-b border-gray-400 text-white placeholder-gray-300 py-3 px-0 focus:outline-none focus:border-white transition-colors"
//               />
//             </div>

//             {/* Phone Field */}
//             <div>
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Phone*"
//                 required
//                 value={formData.phone}
//                 onChange={handleInputChange}
//                 className="w-full bg-transparent border-b border-gray-400 text-white placeholder-gray-300 py-3 px-0 focus:outline-none focus:border-white transition-colors"
//               />
//             </div>

//             {/* Email Field */}
//             <div>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email*"
//                 required
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 className="w-full bg-transparent border-b border-gray-400 text-white placeholder-gray-300 py-3 px-0 focus:outline-none focus:border-white transition-colors"
//               />
//             </div>

//             {/* Address Field */}
//             <div>
//               <input
//                 type="text"
//                 name="address"
//                 placeholder="Address"
//                 value={formData.address}
//                 onChange={handleInputChange}
//                 className="w-full bg-transparent border-b border-gray-400 text-white placeholder-gray-300 py-3 px-0 focus:outline-none focus:border-white transition-colors"
//               />
//             </div>

//             {/* Position Select */}
//             <div className="relative">
//               <select
//                 name="position"
//                 required
//                 value={formData.position}
//                 onChange={handleInputChange}
//                 className="w-full bg-transparent border-b border-gray-400 text-white py-3 px-0 focus:outline-none focus:border-white transition-colors appearance-none cursor-pointer"
//                 style={{ color: formData.position ? 'white' : '#d1d5db' }}
//               >
//                 <option value="" disabled>Select Applying Position*</option>
//                 <option value="software-engineer">Software Engineer</option>
//                 <option value="product-manager">Product Manager</option>
//                 <option value="ui-ux-designer">UI/UX Designer</option>
//                 <option value="data-analyst">Data Analyst</option>
//                 <option value="marketing-specialist">Marketing Specialist</option>
//               </select>
//               <svg
//                 className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-white pointer-events-none"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//               </svg>
//             </div>

//             {/* Cover Letter Field */}
//             <div>
//               <input
//                 type="text"
//                 name="coverLetter"
//                 placeholder="Cover Letter"
//                 value={formData.coverLetter}
//                 onChange={handleInputChange}
//                 className="w-full bg-transparent border-b border-gray-400 text-white placeholder-gray-300 py-3 px-0 focus:outline-none focus:border-white transition-colors"
//               />
//             </div>

//             {/* Resume Upload & Submit */}
//             <div className="flex items-center justify-between pt-8">
//               {/* File Upload */}
//               <label className="cursor-pointer">
//                 <input
//                   type="file"
//                   accept=".pdf,.doc,.docx"
//                   onChange={handleFileChange}
//                   className="hidden"
//                 />
//                 <div className="border-2 border-dashed border-gray-400 rounded-full px-8 py-3 flex items-center gap-3 hover:border-white transition-colors">
//                   <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
//                   </svg>
//                   <span className="text-white">
//                     {formData.resume ? formData.resume.name : 'Drop Your Resume'}
//                   </span>
//                 </div>
//               </label>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 className="flex items-center gap-3 text-white hover:gap-5 transition-all group"
//               >
//                 <span className="text-lg font-light">Submit</span>
//                 <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center group-hover:bg-white group-hover:text-[#2a3158] transition-all">
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                   </svg>
//                 </div>
//               </button>
//             </div>
//           </form>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default JobForm;

import React, { useState } from "react";
import Title from "../../Components/Titile/Title";
import { MoveRight } from "lucide-react";

const JobForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    position: "",
    coverLetter: "",
    resume: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      resume: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Side - Job Openings */}
      <div className="w-full lg:w-1/2 bg-[#0a0e27] flex items-center justify-center p-8 lg:p-16 relative min-h-[40vh] lg:min-h-screen">
        <Title
          className="text-white text-3xl lg:text-5xl font-light tracking-wide lg:absolute lg:top-14"
          text={"JOB OPENINGS"}
        />
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 bg-[#212158] flex items-center justify-center p-8 lg:p-16 relative">
        <div className="w-full max-w-xl">
          <h2
            style={{ fontFamily: "Arial" }}
            className="text-white border-b pb-4 text-xl md:text-2xl lg:text-3xl font-light mb-8 lg:mb-10"
          >
            Submit Your Resume Today
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-8">
            {/* Name Field */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name*"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full bg-transparent border-b border-gray-400 text-white placeholder-gray-300 py-3 px-0 focus:outline-none focus:border-white transition-colors"
              />
            </div>

            {/* Phone Field */}
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone*"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full bg-transparent border-b border-gray-400 text-white placeholder-gray-300 py-3 px-0 focus:outline-none focus:border-white transition-colors"
              />
            </div>

            {/* Email Field */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email*"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-transparent border-b border-gray-400 text-white placeholder-gray-300 py-3 px-0 focus:outline-none focus:border-white transition-colors"
              />
            </div>

            {/* Address Field */}
            <div>
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full bg-transparent border-b border-gray-400 text-white placeholder-gray-300 py-3 px-0 focus:outline-none focus:border-white transition-colors"
              />
            </div>

            {/* Position Select */}
            <div className="relative">
              <select
                name="position"
                required
                value={formData.position}
                onChange={handleInputChange}
                className="w-full bg-transparent border-b border-gray-400 text-white py-3 px-0 focus:outline-none focus:border-white transition-colors appearance-none cursor-pointer"
                style={{ color: formData.position ? "white" : "#d1d5db" }}
              >
                <option value="" disabled>
                  Select Applying Position*
                </option>
                <option value="software-engineer">Software Engineer</option>
                <option value="product-manager">Product Manager</option>
                <option value="ui-ux-designer">UI/UX Designer</option>
                <option value="data-analyst">Data Analyst</option>
                <option value="marketing-specialist">
                  Marketing Specialist
                </option>
              </select>
              <svg
                className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-white pointer-events-none"
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

            {/* Cover Letter Field */}
            <div>
              <input
                type="text"
                name="coverLetter"
                placeholder="Cover Letter"
                value={formData.coverLetter}
                onChange={handleInputChange}
                className="w-full bg-transparent border-b border-gray-400 text-white placeholder-gray-300 py-3 px-0 focus:outline-none focus:border-white transition-colors"
              />
            </div>

            {/* Resume Upload & Submit */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 lg:pt-8">
              {/* File Upload */}
              <label className="cursor-pointer w-full sm:w-auto">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <div className="border-2 border-dashed border-gray-400 rounded-full px-6 sm:px-8 py-3 flex items-center justify-center gap-3 hover:border-white transition-colors">
                  <svg
                    className="w-5 h-5 text-white flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                    />
                  </svg>
                  <span className="text-white text-sm sm:text-base truncate max-w-[200px]">
                    {formData.resume
                      ? formData.resume.name
                      : "Drop Your Resume"}
                  </span>
                </div>
              </label>

              {/* Submit Button */}
              {/* <button
                type="submit"
                className="flex items-center gap-3 text-white hover:gap-5 transition-all group w-full sm:w-auto justify-center sm:justify-start"
              >
                <span className="text-base sm:text-lg font-light">Submit</span>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white flex items-center justify-center group-hover:bg-white group-hover:text-[#2a3158] transition-all flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button> */}
              <div className="mx-auto flex gap-4 mt-6 my-9 items-center group">
                {/* Text remains static */}
                <h1 className="flex items-center justify-center text-xl text-white cursor-pointer">
                  Submit
                </h1>

                {/* Button reacts when parent div (group) is hovered */}
                <button className="relative inline-flex items-center w-12 h-12 justify-center overflow-hidden font-medium transition duration-300 ease-out border border-white rounded-full shadow-md bg-[rgb(33,33,88)] text-white cursor-pointer">
                  {/* Animated Background - slides from left */}
                  <span className="absolute inset-0 flex items-center justify-center w-full h-full text-[rgb(33,33,88)] duration-300 -translate-x-full bg-white group-hover:translate-x-0 ease">
                    <MoveRight className="w-4 h-6" />
                  </span>

                  {/* Default Icon - slides to right on hover */}
                  <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                    <MoveRight className="w-4 h-6" />
                  </span>

                  <span className="relative invisible">
                    <MoveRight className="w-6 h-6" />
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobForm;
