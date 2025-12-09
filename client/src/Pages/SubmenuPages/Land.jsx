import { useState } from "react";
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen";
import { Helmet } from "react-helmet-async";
import LandImage from "./LandImage";


const Land = () => {
   const [isLoading, setIsLoading] = useState(true);
  
    const handleLoadingComplete = () => {
      setIsLoading(false);
    };
  return (
    <div>
      <Helmet>
        <title>Sheltec | Media Center</title>
      </Helmet>
      
      {isLoading && (
        <LoadingScreen handleLoadingComplete={handleLoadingComplete} />
      )}

    { !isLoading && <div className="relative w-full  md:h-screen h-[450px]">
        {/* Background Image */}
        <img
          src="https://www.sheltech-bd.com/cms/admin/uploads/page/land-projects/17061620233PeKH.jpg"
          alt="About Sheltech"
          className="w-full h-full object-cover"
        />

        {/* Hero Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
          <p className="text-2xl text-white uppercase tracking-wider">
            Land Projects
          </p>

          <h1
            style={{ fontFamily: "Arial" }}
            className="text-4xl md:text-7xl lg:text-5xl font-light text-white uppercase tracking-wider text-center px-4">
            Unlock the full potential of your land
          </h1>
        </div>
      </div>}

      <LandImage></LandImage>
    </div>
  );
};

export default Land;
