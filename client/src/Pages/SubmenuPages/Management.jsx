import Title from "../../Components/Titile/Title";

const Management = () => {

  const leaders = [
    {
      id: 1,
      name: "Engr. Kutubuddin Ahmed",
      position: "Chairman",
      image: "https://www.sheltech-bd.com/cms/admin/uploads/page/team/1715757808EQipY.jpg",
    },
    {
      id: 2,
      name: "Engr Sk Bashir Ahmed",
      position: "Vice Chairman",
      image: "https://www.sheltech-bd.com/cms/admin/uploads/page/management-team--leaders/1695643523SRlY7.jpg",
    },
    {
      id: 3,
      name: "Tanvir Ahmed",
      position: "Managing Director",
      image: "https://www.sheltech-bd.com/cms/admin/uploads/page/management-team--leaders/1695643547vn3Zh.jpg",
    },
    {
      id: 4,
      name: "Sumayyah Ahmed",
      position: "Director",
      image: "https://www.sheltech-bd.com/cms/admin/uploads/page/management-team--leaders/1695643576h3upD.jpg",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">

        <div className="max-w-xl">
            <Title className="text-3xl md:text-4xl font-light text-gray-900 mb-16" text={'THE LEADERS OF SHELTECH'}></Title>
        </div>
        

        {/* Leaders Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader) => (
            <div
              key={leader.id}
              className="flex flex-col group"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden bg-white mb-2 aspect-[3/4]">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover transition-transform duration-800 group-hover:scale-105"
                />
              </div>

              {/* Name and Position */}
              <div className="text-left">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                  {leader.name}
                </h3>
                <p className="text-base md:text-lg text-gray-600">
                  {leader.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Management;