import Title from "../../../Components/Titile/Title";
import companies from "./companies";

const AssociateCompanies = () => {

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div>
            <Title text={'ASSOCIATE COMPANIES'}></Title>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-16">
          {companies.map((company) => (
            <div
              key={company.id}
              className="flex flex-col items-center text-center group">
                
              <div className="w-full h-32 flex items-center justify-center my-6 transition-transform duration-300 group-hover:scale-110">
                <img
                  src={company?.logo}
                  alt={company?.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              <p className="text-sm md:text-base text-gray-800 leading-snug">
                {company?.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AssociateCompanies;