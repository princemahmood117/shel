import { Helmet } from "react-helmet-async";
import MediaImage from "./MediaImage";
import NewsLetter from "./NewsLetter";
import { useState } from "react";
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen";

const Media = () => {
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

    { !isLoading && <div className="relative w-full h-screen">
        {/* Background Image */}
        <img
          src="https://www.sheltech-bd.com/cms/admin/uploads/page/media-center/1707387404TvLlQ.jpg"
          alt="About Sheltech"
          className="w-full h-full object-cover"
        />

        {/* Hero Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
          <p className="text-2xl text-white uppercase tracking-wider">
            MEDIA CENTER
          </p>

          <h1
            style={{ fontFamily: "Arial" }}
            className="text-4xl md:text-7xl lg:text-5xl font-light text-white uppercase tracking-wider text-center px-4"
          >
            A peek behind the scenes of Sheltech
          </h1>
        </div>
      </div>}

      <MediaImage></MediaImage>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Media;
