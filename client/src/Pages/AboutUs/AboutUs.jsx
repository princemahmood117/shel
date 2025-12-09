import { useState } from "react";
import Title from "../../Components/Titile/Title";
import AssociateCompanies from "./AssociateCompanies/AssociateCompanies";
import PositiveChanges from "./PositiveChanges/PositiveChanges";
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen";
import { Helmet } from "react-helmet-async";

const AboutUs = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };
  return (
    <>
      <Helmet>
        <title>Sheltec | About us</title>
      </Helmet>

      {isLoading && (
        <LoadingScreen handleLoadingComplete={handleLoadingComplete} />
      )}

     {!isLoading && <div className="mb-9  min-h-[calc(100vh-68px)]">
        <div className="w-screen h-screen relative overflow-hidden m-0 p-0">
          {/* Background Image */}
          <img
            src="https://www.sheltech-bd.com/cms/admin/uploads/page/about-us/1707390568PpFJs.jpg"
            alt="About Sheltech"
            className="w-full h-full object-cover"
          />

          {/* Hero Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h1
              style={{ fontFamily: "Arial" }}
              className="text-4xl md:text-7xl lg:text-5xl font-light text-white tracking-wider text-center px-4"
            >
              A LEGACY OF EXCELLENCE
            </h1>
          </div>
        </div>

        {/* About Content Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              {/* Left Content */}
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-light text-[#11153A]">
                  WHO <span className="font-semibold">WE ARE</span>
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Sheltech Private Limited is one of the most prominent real
                  estate developers in Bangladesh. Since our inception in 1988,
                  we have been dedicated to creating innovative living spaces
                  that combine luxury, comfort, and sustainability.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  With over three decades of experience, we have successfully
                  completed numerous residential and commercial projects,
                  earning the trust of thousands of families and businesses
                  across the country.
                </p>
              </div>

              {/* Right Image */}
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                  alt="Sheltech Building"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
              {/* Mission */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-3xl font-semibold text-[#11153A] mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  To provide world-class real estate solutions that enhance the
                  quality of life for our customers through innovative design,
                  superior construction quality, and exceptional customer
                  service.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-3xl font-semibold text-[#11153A] mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  To be the leading real estate developer in Bangladesh, known
                  for creating sustainable communities that set new standards in
                  modern living and architectural excellence.
                </p>
              </div>
            </div>

            {/* Values Section */}
            <div className="mb-20">
              <h2 className="text-4xl md:text-5xl font-light text-[#11153A] mb-12 text-center">
                OUR <span className="font-semibold">VALUES</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Value 1 */}
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#11153A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-10 h-10 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-[#11153A] mb-2">
                    Quality
                  </h4>
                  <p className="text-gray-600">
                    We never compromise on the quality of construction and
                    materials used in our projects.
                  </p>
                </div>

                {/* Value 2 */}
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#11153A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-10 h-10 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-[#11153A] mb-2">
                    Timely Delivery
                  </h4>
                  <p className="text-gray-600">
                    We are committed to delivering projects on time without any
                    delays.
                  </p>
                </div>

                {/* Value 3 */}
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#11153A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-10 h-10 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-[#11153A] mb-2">
                    Customer Satisfaction
                  </h4>
                  <p className="text-gray-600">
                    Our customers' happiness and satisfaction is our top
                    priority.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="bg-gradient-to-r from-[#11153A] to-[#1a1f4d] rounded-lg p-12 text-white">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <h3 className="text-5xl font-bold mb-2">35+</h3>
                  <p className="text-lg">Years of Experience</p>
                </div>
                <div>
                  <h3 className="text-5xl font-bold mb-2">150+</h3>
                  <p className="text-lg">Projects Completed</p>
                </div>
                <div>
                  <h3 className="text-5xl font-bold mb-2">10,000+</h3>
                  <p className="text-lg">Happy Families</p>
                </div>
                <div>
                  <h3 className="text-5xl font-bold mb-2">25+</h3>
                  <p className="text-lg">Awards Won</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div>
          <AssociateCompanies></AssociateCompanies>
          <PositiveChanges></PositiveChanges>
        </div>
      </div>}
    </>
  );
};

export default AboutUs;
