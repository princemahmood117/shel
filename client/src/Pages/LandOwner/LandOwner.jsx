import { Helmet } from "react-helmet-async";
import { useState } from "react";
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen";
import Essence from "./Essence";
import EssenceHero from "./EssenceHero";
import Venture from "./Venture";
import Testimonial from "../../Components/LegacySection/Testimonial";

const Media = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };
  return (
    <>
      <div>
        <Helmet>
          <title>
            Own land in Dhaka? Partner with Sheltech for joint ventu...
          </title>
        </Helmet>

        {isLoading && (
          <LoadingScreen handleLoadingComplete={handleLoadingComplete} />
        )}

        {!isLoading && (
          <div className="relative w-full h-screen lg:h-[700px]">
            {/* Background Image */}
            <img
              src="https://www.sheltech-bd.com/cms/admin/uploads/page/landowner/1707388324d2MjS.jpg"
              alt="About Sheltech"
              className="w-full h-full object-cover"
            />

            {/* Hero Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
              <p className="md:text-3xl text-xl text-white uppercase tracking-wider">
                landowner
              </p>

              <h1
                style={{ fontFamily: "sangbleu" }}
                className="max-w-4xl text-3xl md:text-4xl lg:text-5xl font-light text-white uppercase tracking-wider text-center px-4">
                unite with us in pursuit of excellence
              </h1>
            </div>
          </div>
        )}
      </div>

      <div>
        <Essence></Essence>
        <EssenceHero></EssenceHero>
        <Venture></Venture>
        <Testimonial></Testimonial>
      </div>
    </>
  );
};

export default Media;
