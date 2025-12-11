// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import projects from "./royalProjects";
// import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen";

// const ProjectDetails = () => {
//   const { projectId } = useParams();
//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(true);

//   const handleLoadingComplete = () => {
//     setIsLoading(false);
//   };

//   const project = projects.find((p) => p.id === projectId);

//   if (!project) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">
//             Project Not Found
//           </h2>
//           <button
//             onClick={() => navigate("/")}
//             className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//           >
//             Go Back Home
//           </button>
//         </div>
//       </div>
//     );
//   }

//   const projectDetails = [
//     {
//       icon: (
//         <svg
//           className="w-6 h-6"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="1.5"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
//           />
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
//           />
//         </svg>
//       ),
//       label: "Address",
//       value: project.details.address,
//       mainImage: project.mainImage,
//     },
//     {
//       icon: (
//         <svg
//           className="w-6 h-6"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="1.5"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
//           />
//         </svg>
//       ),
//       label: "Type",
//       value: `${project.type} Building`,
//     },
//     {
//       icon: (
//         <svg
//           className="w-6 h-6"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="1.5"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
//           />
//         </svg>
//       ),
//       label: "Land Area",
//       value: project.details.landArea,
//     },
//     {
//       icon: (
//         <svg
//           className="w-6 h-6"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="1.5"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
//           />
//         </svg>
//       ),
//       label: "Levels",
//       value: project.details.levels,
//     },
//     {
//       icon: (
//         <svg
//           className="w-6 h-6"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="1.5"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z"
//           />
//         </svg>
//       ),
//       label: `${project.type} Unit Size`,
//       value: project.details.unitSize,
//     },
//     {
//       icon: (
//         <svg
//           className="w-6 h-6"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="1.5"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
//           />
//         </svg>
//       ),
//       label: "Units",
//       value: project.details.units,
//     },
//     {
//       icon: (
//         <svg
//           className="w-6 h-6"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="1.5"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
//           />
//         </svg>
//       ),
//       label: "Parkings",
//       value: project.details.parkings,
//     },
//     {
//       icon: (
//         <svg
//           className="w-6 h-6"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="1.5"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
//           />
//         </svg>
//       ),
//       label: "Elevator",
//       value: project.details.elevator,
//     },
//     {
//       icon: (
//         <svg
//           className="w-6 h-6"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="1.5"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"
//           />
//         </svg>
//       ),
//       label: "Staircase",
//       value: project.details.staircase,
//     },
//     {
//       icon: (
//         <svg
//           className="w-6 h-6"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="1.5"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
//           />
//         </svg>
//       ),
//       label: "Handover",
//       value: project.details.handover,
//     },
//     {
//       icon: (
//         <svg
//           className="w-6 h-6"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="1.5"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
//           />
//         </svg>
//       ),
//       label: "Design Consultant",
//       value: project.details.consultant,
//     },
//   ];

//   return (
//     <>
//       {isLoading && (
//         <LoadingScreen handleLoadingComplete={handleLoadingComplete} />
//       )}
//       <div className="relative w-full h-screen">
//         {/* Background Image */}
//         <img
//           src={projectDetails.mainImage}
//           alt="About Sheltech"
//           className="w-full h-full object-cover"
//         />

//         {/* Hero Text */}
//         <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
//           <p className="text-2xl text-white uppercase tracking-wider">
//             MEDIA CENTER
//           </p>

//           <h1
//             style={{ fontFamily: "Arial" }}
//             className="text-4xl md:text-7xl lg:text-5xl font-light text-white uppercase tracking-wider text-center px-4"
//           >
//             A peek behind the scenes of Sheltech
//           </h1>
//         </div>
//       </div>
//       <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//         {/* Back Button */}
//         <div className="max-w-7xl mx-auto mb-8">
//           <button
//             onClick={() => navigate(-1)}
//             className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group"
//           >
//             <svg
//               className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M15 19l-7-7 7-7"
//               />
//             </svg>
//             <span className="font-medium">Back to Projects</span>
//           </button>
//         </div>

//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
//             {/* Left Side - Image */}
//             <div className="w-full">
//               <div className="bg-gradient-to-b from-blue-400 to-blue-200 rounded-lg overflow-hidden h-screen shadow-xl">
//                 <img
//                   src={project.image}
//                   alt={project.name}
//                   className="w-full h-full object-cover"
//                   // style={{ minHeight: "600px" }}
//                 />
//               </div>

//             </div>

//             {/* Right Side - Details */}
//             <div className="w-full">
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 mb-4 tracking-wide">
//                 AT A GLANCE
//               </h1>

//               <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
//                 {project.name}
//               </h2>

//               <div className="space-y-6">
//                 {projectDetails.map((detail, index) => (
//                   <div key={index} className="flex items-start gap-4 group">
//                     {/* Icon */}
//                     <div className="flex-shrink-0 text-gray-600 group-hover:text-gray-800 transition-colors">
//                       {detail.icon}
//                     </div>

//                     {/* Content */}
//                     <div className="flex-1">
//                       <div className="text-sm text-gray-500 mb-1 font-light">
//                         {detail.label}
//                       </div>
//                       <div className="text-base md:text-lg text-gray-800 font-normal">
//                         {detail.value}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProjectDetails;
















// currently working 

import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import projects from "./royalProjects";
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen";
import ProgressImage from "./LandmarkProject/ProgressImage";
import ProjectGallary from "./ProjectGallary";



const ProjectDetails = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const project = projects.find((p) => p.id === projectId);

  const progressImage = project.progressImage;


  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Project Not Found
          </h2>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  const projectDetails = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
      ),
      label: "Address",
      value: project.details.address,
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
          />
        </svg>
      ),
      label: "Type",
      value: `${project.type} Building`,
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
          />
        </svg>
      ),
      label: "Land Area",
      value: project.details.landArea,
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
          />
        </svg>
      ),
      label: "Levels",
      value: project.details.levels,
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z"
          />
        </svg>
      ),
      label: `${project.type} Unit Size`,
      value: project.details.unitSize,
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
          />
        </svg>
      ),
      label: "Units",
      value: project.details.units,
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
          />
        </svg>
      ),
      label: "Parkings",
      value: project.details.parkings,
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
      ),
      label: "Elevator",
      value: project.details.elevator,
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"
          />
        </svg>
      ),
      label: "Staircase",
      value: project.details.staircase,
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
          />
        </svg>
      ),
      label: "Handover",
      value: project.details.handover,
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
          />
        </svg>
      ),
      label: "Design Consultant",
      value: project.details.consultant,
    },
  ];

  return (
    <>
      {isLoading && (
        <LoadingScreen handleLoadingComplete={handleLoadingComplete} />
      )}

      <div className="relative w-full h-screen">
        <img
          src={project.mainImage}
          alt="About Sheltech"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
          {/* <p className="text-2xl text-white uppercase tracking-wider">{project.name}</p> */}

          <h1
            style={{ fontFamily: "Arial" }}
            className="text-4xl md:text-7xl lg:text-5xl font-light text-white uppercase tracking-wider text-center px-4"
          >
            {project.name}
          </h1>
        </div>
      </div>

      <div className="min-h-screen bg-gray-50 lg:mt-40 md:mt-16 mt-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="w-full">
              <div className="bg-gradient-to-b from-blue-400 to-blue-200 overflow-hidden h-screen shadow-xl">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="w-full">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-light text-gray-800 mb-4 tracking-wide">
                AT A GLANCE
              </h1>


              <div className="space-y-6 mt-6">
                {projectDetails.map((detail, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 text-gray-600 group-hover:text-gray-800 transition-colors">
                      {detail.icon}
                    </div>

                    <div className="flex-1">
                      <div className="text-sm text-gray-500 mb-1 font-light">
                        {detail.label}
                      </div>
                      <div className="text-base md:text-lg text-gray-800 font-normal">
                        {detail.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          

        </div>
      </div>
        <div className="lg:mt-30 md:mt-18 mt-10"> 
          <ProgressImage progressImage={progressImage}></ProgressImage>
          <ProjectGallary galleryImages={project.galleryImages} projectName={project.name}></ProjectGallary>
          
        </div>
    </>
  );
};

export default ProjectDetails;
