
import Title from "../../Titile/Title";
import sapphire from "../../../assets/1707370922OrD5R.png";
import { MoveRight } from "lucide-react";
import LandmarkSliders from "../LandmarkSliders";

const LandmarkProjects = ({ youtubeId }) => {
  return (
    <section className="min-h-screen bg-[rgb(33,33,88)] items-center justify-center px-4">
      <div className="pt-6 md:pt-10">
        <Title
          className="text-left md:text-center text-2xl md:text-3xl  text-white"
          text={"EXPLORE OUR LANDMARK PROJECTS"}
        ></Title>
      </div>
      <div className="w-full mx-auto max-w-7xl aspect-video overflow-hidden">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${youtubeId}?&mute=1&loop=1&playlist=${youtubeId}`}
          title="Landmark Projects Video"
          frameBorder="0"
          allow="encrypted-media; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* extra part */}
      <div className="flex flex-col mt-10 md:mt-32">
        <div className="mx-auto">
          <img className="text-left md:mx-auto" src={sapphire} alt="sapphire" />
          <p
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            className="max-w-[800px] mt-8 text-left md:text-center text-white tracking-wider"
          >
            Sheltech's Sapphire Series represents our most luxurious and iconic
            projects in the most popular and sought-after locations. Experience
            elegance and comfort with our bold designs, top-tier construction,
            and premium finishes.
          </p>
        </div>
        <div className="mx-auto flex gap-4 mt-6 my-9">
          <h1 className="flex items-center justify-center text-xl text-white">
            Explore
          </h1>
          <button className="relative inline-flex items-center w-8 h-8 justify-center overflow-hidden font-medium transition duration-300 ease-out border border-white rounded-full shadow-md group bg-[rgb(33,33,88)] text-white cursor-pointer">
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


        {/* another extra part of sliders */}
        <LandmarkSliders></LandmarkSliders>
      </div>
    </section>
  );
};

export default LandmarkProjects;



