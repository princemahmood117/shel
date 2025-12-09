import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../MainLayout/MainLayout";
import Home from "../../Pages/Home/Home";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import InsightSection from "../LegacySection/InsightSection/InsightSection";
import InsightDetails from "../LegacySection/InsightSection/InsightDetails";
import AboutUs from "../../Pages/AboutUs/AboutUs";
import ContactUs from "../../Pages/Contact/ContactUs";
import Media from "../../Pages/Media/Media";
import LandOwner from "../../Pages/LandOwner/LandOwner";
import Career from "../../Pages/Career/Career";
import Enquiry from "../../Pages/Enquiry/Enquiry";
import Policy from "../../Pages/Policy/Policy";
import Projects from "../../Pages/Projects/Projects";
import Residential from "../../Pages/SubmenuPages/Residential";
import Commercial from "../../Pages/SubmenuPages/Commercial";
import SapphireSeries from "../../Pages/SubmenuPages/SapphireSeries";
import Land from "../../Pages/SubmenuPages/Land";
import OurLeaders from "../../Pages/SubmenuPages/OurLeaders";
import Awards from "../../Pages/SubmenuPages/Awards";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path : '/login',
        element: <Login></Login>
      },
      {
        path : '/sign-up',
        element: <SignUp></SignUp>
      },

      {
        path : '/insights',
        element: <InsightSection></InsightSection>
      },

      {
        path : "/insights/:slug",
        element: <InsightDetails></InsightDetails>
      },

      {
        path : "/about",
        element: <AboutUs></AboutUs>
      },

      {
        path : "/contact",
        element: <ContactUs></ContactUs>
      },
      
      {
        path : "/media",
        element: <Media></Media>
      },

      {
        path : "/land-owner",
        element: <LandOwner></LandOwner>
      },
      {
        path : "/career",
        element: <Career></Career>
      },

      {
        path : "/enquiry",
        element: <Enquiry></Enquiry>
      },

      {
        path : "/policy",
        element: <Policy></Policy>
      },

      {
        path : "/projects",
        element: <Projects></Projects>
      },
      
      {
        path : "/projects/residential",
        element: <Residential></Residential>
      },

      {
        path : "/projects/commercial",
        element: <Commercial></Commercial>
      },

      {
        path : "/projects/sapphire-series",
        element: <SapphireSeries></SapphireSeries>
      },

      {
        path : "/projects/land",
        element: <Land></Land>
      },

      
      {
        path : "/about/corporate-info",
        element: <AboutUs></AboutUs>
      },
            
      {
        path : "/about/our-leaders",
        element: <OurLeaders></OurLeaders>
      },
      
      {
        path : "/about/awards",
        element: <Awards></Awards>
      },




    ],
  },
]);

export default router;
