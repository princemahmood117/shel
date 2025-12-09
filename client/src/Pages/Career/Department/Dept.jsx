import React from 'react';
import departments from './deptData';



const Dept = () => {

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 style={{fontFamily: "Sangbleu"}} className="text-3xl md:text-4xl lg:text-5xl font-light text-center mb-10 text-gray-800 tracking-wide">
          DEPARTMENTS
        </h1>

        {/* Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-4 lg:gap-6">
          {departments.map((dept) => (
            <div
              key={dept.id}
              className="flex flex-col items-center justify-center gap-4 p-4 hover:bg-white rounded-lg transition-all duration-300 cursor-pointer group"
            >
              {/* Icon */}
              <div className="text-gray-700 group-hover:text-gray-900 transition-colors">
                {/* {dept.icon} */}
                <img className='hover:scale-110 transition-all duration-300 w-16' src={dept?.icon} alt={dept.name} />
              </div>
              
              {/* Department Name */}
              <p className="text-center text-sm md:text-base font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                {dept.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dept;