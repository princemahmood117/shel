import { Link } from "react-router-dom";
import ArrowButton from "../../Components/ArrowButton/ArrowButton";
import errorIcon from "../../assets/404-removebg-preview.png";

const ErrorPage = () => {
  // const navigate = useNavigate()

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen text-center text-white"
      style={{
        backgroundColor: "#20225F",
        fontFamily: "'Space Grotesk', sans-serif",
      }}
    >
      <div className="mb-6">
        <div className="relative flex justify-center">
          <div className="bg-[#20225F]">
            <img src={errorIcon} alt="" />
          </div>
        </div>
      </div>

      <h1 className="text-3xl md:text-4xl font-semibold mb-4">
        Page Not Found.
      </h1>
      <p className="text-sm md:text-base text-gray-300 mb-10 max-w-md">
        We’re sorry, the page you requested could not be found. <br />
        Please go back to the home page.
      </p>

      <Link
        to="/"
        className="flex items-center gap-4 group">
        <h2 className="text-white transition-colors duration-300">
          Go home
        </h2>
        <ArrowButton
          direction="right"
          className=" transition-transform duration-300:"
        />
      </Link>
    </div>
  );
};

export default ErrorPage;
