import { useEffect } from "react";
import Title from "../../../Titile/Title";

// ---------------- Reusable Title Component ----------------
const ArticleTitle = ({ date }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 md:mt-16 mt-10">
      <div className="flex justify-between items-center my-4">
        <p className="text-gray-400 text-sm">Media</p>
        <p className="text-gray-500 text-sm">{date}</p>
      </div>

     <Title className="uppercase" text={'Sheltech Honoured for Its Vision of a Sustainable Tomorrow'}></Title>

      <hr className="mt-3 border-gray-300" />
    </div>
  );
};

// ---------------- Reusable Section Component ----------------
const MediaSection = ({ paragraphs = [], image }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 my-10">
      
      {/* Paragraphs */}
      {paragraphs.map((text, i) => (
        <p key={i} className="text-[15px] leading-relaxed text-gray-800 mb-6">
          {text}
        </p>
      ))}

      {/* Image */}
      {image && (
        <img
          src={image}
          alt="Media Content"
          className="w-full mt-4"
        />
      )}
    </div>
  );
};

// ---------------- Full Layout Page (REUSABLE) ----------------
const MediaArticleLayout = ({ title, date, sections }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pb-20">
      <ArticleTitle title={title} date={date} />

      {sections.map((section, index) => (
        <MediaSection
          key={index}
          paragraphs={section.paragraphs}
          image={section.image}
        />
      ))}
    </div>
  );
};

export default MediaArticleLayout;
