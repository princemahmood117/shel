import { Helmet } from "react-helmet-async";
import { useState } from "react";
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen";
import Talent from "./Talent";
import JobForm from "./JobForm";
import Dept from "./Department/Dept";

const Career = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };
  return (
    <>
      <div>
        <Helmet>
          <title>Careers at Sheltech - Join a Leading Real Estate Company</title>
        </Helmet>

        {isLoading && (
          <LoadingScreen handleLoadingComplete={handleLoadingComplete} />
        )}

        {!isLoading && (
          <div className="relative w-full">
            {/* Background Image */}
            <img
              src="https://www.sheltech-bd.com/cms/admin/uploads/page/career/1707390346Jc754.jpg"
              alt="About Sheltech"
              className="w-full h-full object-cover"
            />

            {/* Hero Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
              <p className="text-4xl text-white uppercase tracking-wider">
                Career
              </p>
              <h1
                style={{ fontFamily: "Sangbleu" }}
                className="text-3xl md:text-5xl lg:text-6xl max-w-6xl text-white font-light uppercase tracking-wide text-center px-4"
              >
                take the next big step with sheltech
              </h1>
            </div>
          </div>
        )}
      </div>

      <div>
        <Talent></Talent>
        <JobForm></JobForm>
        <Dept></Dept>
    </div>
    </>
  );
};

export default Career;
