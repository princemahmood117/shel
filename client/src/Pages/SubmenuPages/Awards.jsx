import { Helmet } from "react-helmet-async";
import { useState } from "react";
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen";

const Awards = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };
  return (
    <div>
      <Helmet>
        <title>Sheltec Awards-Recognized Excellence in Real Estate</title>
      </Helmet>

      {isLoading && (
        <LoadingScreen handleLoadingComplete={handleLoadingComplete} />
      )}

      {!isLoading && (
        <>
          <div className="relative w-full lg:h-[650px] md:h-[480px] h-[380px] ">
            {/* Background Image */}
            <img
              src="https://www.sheltech-bd.com/cms/admin/uploads/page/awards/1720595579xCTjF.jpg"
              alt="About Sheltech"
              className="w-full h-full object-cover"
            />

            {/* Hero Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
              <h1
                style={{ fontFamily: "sangbelu" }}
                className="text-3xl md:text-4xl lg:text-6xl font-light text-white uppercase tracking-wider text-center px-4">
                awards & accoloades
              </h1>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Awards;
