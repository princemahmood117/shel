import Title from "../../Components/Titile/Title";


const Talent = () => {
  return (
    <section className="relative w-full min-h-screen bg-black flex items-center justify-center px-4 py-12 overflow-hidden">


      {/* Decorative Flower - Left */}
      <div className="absolute md:left-30 left-10 md:bottom-0 bottom-16 -translate-y-1/2 opacity-80">
        <svg className="w-32 h-32 md:w-40 md:h-40" viewBox="0 0 200 200">
          {/* Flower petals */}
          {[...Array(8)].map((_, i) => (
            <ellipse
              key={i}
              cx="100"
              cy="100"
              rx="25"
              ry="60"
              fill="white"
              opacity="0.9"
              transform={`rotate(${i * 45} 100 100)`}
            />
          ))}
          {/* Center */}
          <circle cx="100" cy="100" r="20" fill="#FDB913" />
        </svg>
      </div>

      {/* Decorative Flower - Right */}
      <div className="absolute md:right-40 right-10 top-25 opacity-80">
        <svg className="w-32 h-32 md:w-40 md:h-40" viewBox="0 0 200 200">
          {/* Flower petals */}
          {[...Array(8)].map((_, i) => (
            <ellipse
              key={i}
              cx="100"
              cy="100"
              rx="25"
              ry="60"
              fill="white"
              opacity="0.9"
              transform={`rotate(${i * 45} 100 100)`}
            />
          ))}
          {/* Center */}
          <circle cx="100" cy="100" r="20" fill="#FDB913" />
        </svg>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Title */}
        <Title className="text-white max-w-3xl mx-auto tracking-wide" fontFamily="SangBleu, serif" text={'EMPOWERING GROWTH & NURTURING TALENT'}></Title>

        {/* First Paragraph */}
        <p className="text-white text-base md:text-lg  leading-relaxed mb-8 font-light">
          At Sheltech Pvt Ltd, we believe that our most valuable asset is our people. Our human resources philosophy is rooted in the principles of growth, opportunity, and excellence. We strive to create an environment that fosters professional development, encourages innovative thinking, and values diversity.
        </p>

        {/* Second Paragraph */}
        <p className="text-white text-base md:text-lg  leading-relaxed font-light">
          We recognize that the success of our company is directly linked to the personal and professional success of our employees. Thus, we offer a multitude of opportunities for learning and advancement, enabling each team member to reach their full potential.
        </p>
      </div>
    </section>
  );
};

export default Talent;