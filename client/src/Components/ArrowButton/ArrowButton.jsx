import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoIosArrowRoundBack , IoIosArrowRoundForward } from "react-icons/io";

const ArrowButton = ({ direction = "right", onClick, className = "" }) => {
  const Icon = direction === "left" ? IoIosArrowRoundBack : IoIosArrowRoundForward;

  return (
    <button
      onClick={onClick}
      className={`relative inline-flex items-center w-8 h-8 justify-center overflow-hidden font-medium 
      transition duration-400 ease-out border border-gray-800 rounded-full shadow-md group bg-transparent cursor-pointer ${className}`}>
  
      <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-400 -translate-x-full bg-[rgb(33,33,88)] group-hover:translate-x-0 ease">
        <Icon className="w-6 h-6" />
      </span>

      {/* default icon */}
      <span className="absolute flex items-center justify-center w-full h-full text-gray-600 transition-all duration-400 transform group-hover:translate-x-full ease">
        <Icon className="w-6 h-6" />
      </span>

      <span className="relative invisible">
        <Icon className="w-6 h-6" />
      </span>
    </button>
  );
};

export default ArrowButton;
