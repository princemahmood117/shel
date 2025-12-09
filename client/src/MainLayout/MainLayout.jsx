// import { Outlet } from "react-router-dom";
// import Navbar from "../Components/Navbar/Navbar";
// import Footer from "../Components/Footer/Footer";
// import { useState } from "react";
// import LoadingScreen from "../Components/LoadingScreen/LoadingScreen";

// const MainLayout = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   const handleLoadingComplete = () => {
//     setIsLoading(false);
//   };

//   return (
//     <>
//     {isLoading && <LoadingScreen handleLoadingComplete={handleLoadingComplete} />}

//      { !isLoading && <div className="flex flex-col min-h-screen">
//         <Navbar />
//         <main className="grow">
//           <Outlet />
//         </main>
//         <Footer />
//       </div>}
//     </>
//   );
// };

// export default MainLayout;



import Lenis from "@studio-freight/lenis";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import LoadingScreen from "../Components/LoadingScreen/LoadingScreen";

const MainLayout = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };


  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      smoothTouch: false,
      easing: (x) => 1 - Math.pow(1 - x, 2),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen handleLoadingComplete={handleLoadingComplete} />}

      {!isLoading && (
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="grow">
            <Outlet />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default MainLayout;
