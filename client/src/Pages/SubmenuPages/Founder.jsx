const Founder = () =>  {
  return (
    <section className="max-w-6xl mx-auto bg-white px-3">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side – Text */}
        <div>
          <h1 className="text-3xl md:text-4xl  text-gray-900 leading-snug">
            Late Dr. Toufiq M. Seraj (1956–2019)
          </h1>

          <p className="mt-3 text-md font-semibold text-gray-700">
            FOUNDER OF SHELTECH
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed text-justify">
            Dr. Toufiq M. Seraj was the Founder and former Managing Director of
            Sheltech and its associated companies. He was a visionary leader in
            real estate in Bangladesh and played a pioneering role in making the
            real estate industry what it is today.
            <br /><br />
            His vision to provide beautiful and quality homes for the residents
            of Dhaka led Sheltech to develop over 3700 apartments all over the
            city, transforming Sheltech into a symbol of excellence in the real
            estate industry of Bangladesh.
          </p>
        </div>

        {/* Right Side – Image */}
        <div className="w-full flex justify-center">
          <img
            src="https://www.sheltech-bd.com/cms/admin/uploads/page/about-us/1695621042m9c58.jpg"
            alt="Dr. Toufiq M. Seraj"
            className="w-full h-[500px] object-cover shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}


export default Founder