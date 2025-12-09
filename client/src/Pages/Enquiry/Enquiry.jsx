import { Helmet } from "react-helmet-async";
import { useState } from "react";
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen";
import EnquiryForm from "./EnquiryForm";

const Enquiry = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };
  return (
    <>
      <div>
        <Helmet>
          <title>Customer Inquiry - Sheltech</title>
        </Helmet>

        {isLoading && (
          <LoadingScreen handleLoadingComplete={handleLoadingComplete} />
        )}

        {!isLoading && (
          <div className="relative w-full h-screen">
            {/* Background Image */}
            <img
              src="https://www.sheltech-bd.com/cms/admin/uploads/page/customer-inquiry/1707390813TPeXI.jpg"
              alt="About Sheltech"
              className="w-full h-full object-cover"
            />

            {/* Hero Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
              <h1
                style={{ fontFamily: "Sangbleu" }}
                className="text-3xl md:text-5xl lg:text-6xl  text-white uppercase tracking-widest text-center px-4"
              >
                Customer Inquiry
              </h1>
            </div>
          </div>
        )}
      </div>

      <div>
        <EnquiryForm></EnquiryForm>
      </div>
    </>
  );
};

export default Enquiry;
