import { useState } from "react";

import { Helmet } from "react-helmet-async";
import LoadingScreen from "../../LoadingScreen/LoadingScreen";
import MediaArticleLayout from "./InsightArticle/MediaArticleLayout";

const InsightDetails = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };
  return (
    <>
      <Helmet>
        <title>Insights | Sheltec</title>
      </Helmet>

      {isLoading && (
        <LoadingScreen handleLoadingComplete={handleLoadingComplete} />
      )}

      {!isLoading && (
        <div className="mb-9  min-h-[calc(100vh-68px)]">
          <div className="relative w-full h-screen">
            {/* Background Image */}
            <img
              src="https://www.sheltech-bd.com/cms/admin/uploads/page/media-center/1759992383jgy09.jpg"
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

          <div>
            <MediaArticleLayout
              title="Sheltech Honoured for Its Vision of a Sustainable Tomorrow"
              date="July 2025"
              sections={[
                {
                  paragraphs: [
                    "As cities across the globe continue to grow at an unprecedented pace, the challenge of maintaining harmony between human life and the environment is becoming more pressing. Among the 17 Sustainable Development Goals outlined by the United Nations, Goal 11 focuses on creating inclusive, safe, resilient, and sustainable cities. In Bangladesh, Sheltech (Pvt.) Ltd. is making deliberate strides to contribute to this goal through its commitment to responsible urban development.",

                    "In recognition of its efforts, Sheltech has been awarded the SDG Brand Champion Award 2025 in the category of Best Sustainable Real Estate Company. Organised by Sustainable Brand Initiative, Bangladesh Brand Forum, and Bangladesh Innovation Conclave, the award honoured 35 organisations from different sectors. Sheltech stands out as the only real estate company to receive this prestigious title. ",  
                  ],
                  image: "https://sheltech-bd.com/cms/admin/uploads/editor_image/1759034370876756940.jpg",
                },

                {
                  paragraphs: [
                    "Sheltech continues to lead the industry by integrating sustainable architectural practices, eco-friendly construction materials, and innovative design approaches. Their goal is to create long-lasting, environmentally conscious living spaces.",
                  ],
                  image: "https://sheltech-bd.com/cms/admin/uploads/editor_image/1759034552226317794.jpg",
                },

                {
                  paragraphs: [
                    "This recognition reinforces Sheltech’s mission to contribute to a greener future and further strengthen its commitment to sustainable living in Bangladesh.",
                  ],
                },

                {
                  paragraphs: [
                    "Sheltech developments are not just about buildings. They are about building communities. Each project includes spaces such as multipurpose community rooms, prayer spaces, children’s play areas, and barbecue corners. These features encourage interaction and bonding among residents, helping foster a sense of togetherness.",
                  ],
                  image: "https://sheltech-bd.com/cms/admin/uploads/editor_image/1759034697303552870.jpg",
                },

                {
                  paragraphs: [
                    "One of Sheltech’s upcoming developments is Sheltech Prottasha, located at Road 03, Dhanmondi R/A, which shares the same sustainable values. The project is designed by renowned architect Nahas Khalil, featuring rooftop gardens, solar power, green open areas, rainwater harvesting, multi-level parking facilities, and full accessibility. The design of this project places special emphasis on greenery. Sheltech Prottasha is a blueprint for what future neighbourhoods can look like: responsible, inclusive, and environmentally aware.",
                  ],
                  image: "https://sheltech-bd.com/cms/admin/uploads/editor_image/1759034773586813910.jpg",
                },
                {
                  paragraphs: [
                    "Sheltech continues to believe that real estate development is not just about buildings but about shaping a better tomorrow. With a focus on environmental care, community inclusion, and responsible construction, the company is setting new standards in the industry. The ",
                  ],
                },
              ]}
            />
    
          </div>
        </div>
      )}
    </>
  );
};

export default InsightDetails;
