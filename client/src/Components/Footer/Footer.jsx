
import {FaFacebookF,FaInstagram,FaLinkedinIn,FaYoutube} from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {

  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Landowner", path: "/landowner" },
    { name: "Media Center", path: "/media-center" },
    { name: "Career", path: "/career" },
    { name: "Customer Enquiry", path: "/customer-enquiry" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <footer
      className="relative w-full text-white mt-6"
      style={{
        backgroundImage: `url(https://sheltech-bd.com/images/static/footer.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "'Space Grotesk', sans-serif",
      }}
    >
      {/* Blue overlay */}
      <div className="absolute inset-0 bg-blue-900/20"></div>

      {/* Footer content */}
      <div className="relative z-10 flex flex-col  py-12 px-4 md:text-center text-left space-y-4">
        {/* Line 1: Number */}
        <h1 className="text-[80px]">16550</h1>

        {/* Line 2: Social icons */}
        <div className="flex space-x-4 md:justify-center md:text-center">
          {[FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube].map(
            (Icon, idx) => (
              <div
                key={idx}
                className="text-white-900 p-2 bg-transparent rounded-full border hover:bg-white hover:text-blue-700 transition-colors cursor-pointer"
              >
                <Icon size={10} />
              </div>
            )
          )}
        </div>

        {/* Line 3: Address */}
        <div className=" flex md:justify-center md:items-center md:text-center">
          <p style={{fontFamily : 'Arial'}} className="text-sm md:text-base md:w-[20%]">
            Sheltech Tower, 60 Sheikh Russel Square, West Panthapath,
            Dhaka-1205, Bangladesh
          </p>
        </div>

        {/* Line 4: Navigation links */}
        <div className="grid grid-cols-2 md:flex md:flex-row md:justify-center gap-6 mt-4">
          {links.map((link, idx) => (
            <Link
              to={link.path}
              key={idx}
              className="hover:text-blue-400 transition-colors md:text-center text-left">
              {link?.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;








// {/* Line 4: Navigation links */}
// <div className="grid grid-cols-2 md:flex md:flex-row md:justify-center gap-6 mt-4">
//   {[
//     { name: "Home", path: "/" },
//     { name: "About Us", path: "/about" },
//     { name: "Landowner", path: "/landowner" },
//     { name: "Media Center", path: "/media-center" },
//     { name: "Career", path: "/career" },
//     { name: "Customer Enquiry", path: "/customer-enquiry" },
//     { name: "Privacy Policy", path: "/privacy-policy" },
//     { name: "Contact", path: "/contact" },
//   ].map((link, idx) => (
//     <Link
//       key={idx}
//       to={link.path} // ✅ navigation path
//       className="hover:text-blue-400 transition-colors md:text-center text-left"
//     >
//       {link.name}
//     </Link>
//   ))}
// </div>
