import { MoveRight } from "lucide-react";


const ConnectWithUs = () => {
  return (
    <div className="min-h-screen flex bg-[rgb(33,33,88)]">
      {/* Left Side (Form Section) */}
      <div className="flex flex-col justify-center mx-auto px-10 md:px-24 max-w-6xl w-full">
        <h1
          style={{ fontFamily: "'Spectral', Arial, Helvetica, sans-serif" }}
          className="md:text-5xl text-3xl mb-6 text-white uppercase text-center">
          Connect with us
        </h1>

  
        <select className="border-b border-b-white py-3 mb-4 w-full bg-transparent text-white
              placeholder:text-white focus:outline-none focus:border-gray-600 cursor-pointer">
                <option value="" className="text-black">Reason For Contacting*</option>
                <option value="land-development" className="text-black">Land Development</option>
                <option value="apartment-buyer" className="text-black">Apartment Buyer</option>
                <option value="commercial-space-buyer" className="text-black">Commercial Space Buyer</option>
                <option value="land-buyer" className="text-black">Land Buyer</option>
                <option value="after-sales" className="text-black">After Sales Service</option>
                <option value="general-enquiry" className="text-black">General Enquiry</option>
                <option value="others" className="text-black">Others</option>
        </select>


        <input
          type="text"
          placeholder="Name*"
          className="border-b border-b-white py-3 mb-4 w-full placeholder:text-white bg-transparent focus:outline-none focus:border-gray-600"
        />

        <input
          type="number"
          placeholder="Phone*"
          className="border-b border-b-white py-3 mb-4 w-full placeholder:text-white bg-transparent focus:outline-none focus:border-gray-600"
        />

        <input
          type="email"
          placeholder="Email*"
          className="border-b border-b-white py-3 mb-4 w-full placeholder:text-white bg-transparent focus:outline-none focus:border-gray-600"
        />

        <textarea
          rows={3}
          type="text"
          placeholder="Message*"
          className="border-b border-b-white resize-none mb-4 w-full placeholder:text-white bg-transparent focus:outline-none focus:border-gray-600"
        />

        <div className="mx-auto flex gap-4 mt-6 my-9 items-center group">
          {/* Text remains static */}
          <h1 className="flex items-center justify-center text-xl text-white cursor-pointer">
            Explore
          </h1>

          {/* Button reacts when parent div (group) is hovered */}
          <button className="relative inline-flex items-center w-8 h-8 justify-center overflow-hidden font-medium transition duration-300 ease-out border border-white rounded-full shadow-md bg-[rgb(33,33,88)] text-white cursor-pointer">
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
    </div>
  );
};

export default ConnectWithUs;
