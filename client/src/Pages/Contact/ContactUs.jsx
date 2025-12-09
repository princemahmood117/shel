


import { useState } from "react";
import { Helmet } from "react-helmet-async";
import LoadingScreen from "../../Components/LoadingScreen/LoadingScreen";

import { MapPin, Mail, Phone, MessageCircle } from "lucide-react";
import Title from "../../Components/Titile/Title";
import NewsLetter from "../Media/NewsLetter";
import ConnectWithUs from "./ConnectWithUs";

const ContactItem = ({ icon: Icon, title, children }) => (
  <div className="flex gap-4 mb-6">
    <div className="shrink-0 w-10 h-10 flex items-center justify-center">
      <Icon className="w-8 h-8" />
    </div>
    <div>
      {title && <p className="font-semibold mb-1">{title}</p>}
      <div className="text-gray-700">{children}</div>
    </div>
  </div>
);

// ---------------- Map & Contact Section ----------------
const ContactMapSection = () => {
  return (
    <div className="w-full bg-gray-100">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Section */}
        <div className="lg:w-1/2 w-full bg-white p-8 md:p-12 lg:p-16 flex flex-col justify-start">
          <Title className="md:ml-2 ml-3" text="KEEP IN TOUCH" />

          <div className="space-y-2">
            <ContactItem icon={MapPin} title="Corporate Office">
              <p>Sheltech Tower,</p>
              <p>60, Sheikh Russel Square, West Panthapath,</p>
              <p>Dhaka 1205, Bangladesh</p>
            </ContactItem>

            <ContactItem icon={MapPin} title="Chattogram Office">
              <p>Rubaya Heights (2nd Floor),</p>
              <p>House 7/A/1, Road 3, Zakir Hossain Road,</p>
              <p>South Khulshi, Chattogram 4225, Bangladesh</p>
            </ContactItem>

            <ContactItem icon={Mail} title="Email">
              <p>info@sheltech-bd.com</p>
            </ContactItem>

            <ContactItem icon={Phone} title="Sales Enquiry">
              <p>16550</p>
            </ContactItem>

            <ContactItem icon={Phone} title="Sales Enquiry (Jolshiri & Bashundhara)">
              <p>09612555533</p>
            </ContactItem>

            <ContactItem icon={Phone} title="Sales Enquiry (Chattogram)">
              <p>09612555622</p>
            </ContactItem>

            <ContactItem icon={Phone} title="Joint Venture Development (Dhaka)">
              <p>09606445544</p>
            </ContactItem>

            <ContactItem
              icon={MessageCircle}
              title="Joint Venture Development (Chattogram)"
            >
              <p>+8801708155648</p>
            </ContactItem>

            <ContactItem icon={MessageCircle} title="WhatsApp">
              <p>+8801713091700</p>
            </ContactItem>

            <ContactItem icon={Phone} title="General Enquiry">
              <p>09606445500</p>
            </ContactItem>

            <ContactItem icon={Phone} title="International Callers">
              <p>+8809666779999</p>
            </ContactItem>
          </div>
        </div>

        {/* Right Section - Map */}
        <div className="lg:w-1/2 w-full relative bg-gray-300 min-h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29214.906125518846!2d90.34285547431642!3d23.7522549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8ae3f0c30f1%3A0x680318b077adc48!2sSheltech%20(Pvt.)%20Ltd.!5e0!3m2!1sen!2sbd!4v1762850554081!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            className="absolute inset-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

        </div>
      </div>
    </div>
  );
};

// ---------------- Main Page ----------------
const ContactUs = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <Helmet>
        <title>Contact Sheltec - Real Easte Inquiries & Consultation </title>
      </Helmet>

      {isLoading && (
        <LoadingScreen handleLoadingComplete={handleLoadingComplete} />
      )}

      {!isLoading && (
        <>
          {/* Hero Section */}
          <div className="relative w-full h-[700px]">
            <img
              src="https://www.sheltech-bd.com/cms/admin/uploads/page/contact-us/1707389952Y9fNd.jpg"
              alt="Contact"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 text-white">
              <p className="text-[26px] uppercase tracking-wider">Contact</p>

              <h1
                style={{ fontFamily: "Arial" }}
                className="text-4xl md:text-6xl lg:text-5xl font-light uppercase tracking-wider text-center px-4 max-w-7xl"
              >
                CONTACT OUR TEAM OF PROFESSIONALS FOR SUPPORT
              </h1>
            </div>
          </div>

          {/* Contact + Map Section */}
          <ContactMapSection />

          <ConnectWithUs></ConnectWithUs>
        </>
      )}
    </>
  );
};

export default ContactUs;
