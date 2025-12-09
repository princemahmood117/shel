import Title from "../../Components/Titile/Title";
import PropertySearch from "./PropertySearch";


const MapSection = () => {
  return (
    <div className="w-full py-16 px-4 bg-gray-50">
      <div>
        <div className="max-w-xl mx-auto">
            <Title className="text-center uppercase" text={"Find your desirable project's area"}></Title>
        </div>

        <div>
          <PropertySearch></PropertySearch>
        </div>
        
        <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29214.906125518846!2d90.34285547431642!3d23.7522549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8ae3f0c30f1%3A0x680318b077adc48!2sSheltech%20(Pvt.)%20Ltd.!5e0!3m2!1sen!2sbd!4v1762850554081!5m2!1sen!2sbd"  width="100%" height="100%"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  );
}

export default MapSection