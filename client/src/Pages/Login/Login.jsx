import { useState } from "react";
import { Link } from "react-router-dom";
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen";
import { Helmet } from "react-helmet-async";
import { MoveRight } from "lucide-react";

export default function Login() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <Helmet>
        <title>Sheltech - Sign In</title>
      </Helmet>

      {isLoading && (
        <LoadingScreen handleLoadingComplete={handleLoadingComplete} />
      )}

      {!isLoading && (
        <div
          className="min-h-screen flex"
          style={{ backgroundColor: "rgb(214, 214, 214)" }}
        >
          {/* Left Side (Form Section) */}
          <div className="w-full md:w-1/2 flex flex-col justify-center px-10 md:px-24">
            <h1
              style={{ fontFamily: "'Spectral', Arial, Helvetica, sans-serif" }}
              className="md:text-6xl text-4xl mb-6"
            >
              User Sign In
            </h1>

            {/* Email */}
            <input
              type="email"
              placeholder="Email*"
              className="border-b py-3 mb-4 w-full placeholder-[rgb(8,8,43)] bg-transparent focus:outline-none focus:border-[rgb(8,8,43)]"
            />

            {/* Password */}
            <input
              type="password"
              placeholder="Password*"
              className="border-b py-3 mb-6 w-full placeholder-[rgb(8,8,43)] bg-transparent focus:outline-none focus:border-[rgb(8,8,43)]"
            />

            {/* Sign In Button */}
            <div className="flex gap-4 mt-6 my-9 items-center group">
              {/* H1 reacts on hover of parent */}
              <h1 className="flex transition-colors duration-300 cursor-pointer">
                Sign In
              </h1>

              {/* Button reacts on hover of parent */}
              <button className="relative inline-flex items-center w-8 h-8 justify-center overflow-hidden font-medium transition duration-300 ease-out border border-white rounded-full shadow-md bg-[rgb(33,33,88)] text-white cursor-pointer">
                {/* Animated Background - slides from left */}
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[rgb(33,33,88)] group-hover:translate-x-0 ease">
                  <MoveRight className="w-4 h-6" />
                </span>

                {/* Default Icon - slides to right on hover */}
                <span className="absolute flex items-center justify-center w-full h-full bg-gray-200 text-[rgb(33,33,88)] transition-all duration-300 transform group-hover:translate-x-full ease">
                  <MoveRight className="w-4 h-6" />
                </span>

                <span className="relative invisible">
                  <MoveRight className="w-6 h-6" />
                </span>
              </button>
            </div>

            {/* Bottom Text */}
            <p
              style={{ fontFamily: "'Arial', sans-serif" }}
              className="mt-8 text-[15px] font-normal"
            >
              Do not have an account?
              <Link to={"/sign-up"} className="text-red-600 ml-1 underline">
                Sign Up
              </Link>
            </p>
          </div>

          {/* Right Side (Blank) */}
          <div
            style={{ backgroundColor: "rgb(214, 214, 214)" }}
            className="hidden md:block md:w-1/2 bg-gray-100"
          ></div>
        </div>
      )}
    </>
  );
}
