// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./Components/Routes/Routes.jsx";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(

    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>

);
