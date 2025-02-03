import { Link } from "react-router-dom";
import { Heart, Home } from "lucide-react";


const SideBar = () => {
  return (
    <>
      <DesktopSideBar />
      <MobileSideBar />
    </>
  );
};
export default SideBar;

export const DesktopSideBar = () => {
  return (
    <div className="container-sidebar md:p-5 p-3 min-h-screen w-1/6 md:w-1/5 bg-[#FBFBFB] hidden sm:flex flex-col sm:justify-between">
      <div className=" flex flex-col justify-between md:justify-center gap-20 sticky top-10">
        <div className="w-full  ">
          <h2 className="text-2xl font-bold bg-gradient-to-t from-[#000000] to-[#fbfbfb] bg-clip-text text-transparent md:block hidden">
            Welcome
          </h2>
          <h2 className="text-3xl font-bold bg-gradient-to-t from-[#000000] to-[#fbfbfb] bg-clip-text text-transparent md:hidden block">
            WLCM
          </h2>
        </div>
        <ul className="flex flex-col gap-5 items-center md:items-start">
          <Link
            to="/"
            className=" p-2 sidebar-link flex gap-3 justify-center items-center"
          >
            <Home width={24} height={24} />
            <span className="font-bold text-xl md:block hidden">Home</span>
          </Link>
          <Link
            to="/favorite"
            className=" p-2 sidebar-link text-lg font-bold flex items-center gap-3"
          >
            <Heart width={24} height={24} />
            <span className="font-bold text-xl md:block hidden">Favorite</span>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export const MobileSideBar = () => {
  return (
    <div className="pt-1 flex justify-evenly gap-5 sm:hidden fixed bottom-0 w-full bg-[#FBFBFB] z-10">
      <Link
        to="/"
        className="p-2 sidebar-link flex gap-3 justify-center items-center"
      >
        <Home width={24} height={24} />
      </Link>
      <Link
        to="/favorite"
        className=" p-2 sidebar-link text-lg font-bold flex items-center gap-3"
      >
        <Heart width={24} height={24} />
        <span className="font-bold text-xl md:block hidden">Favorite</span>
      </Link>
    </div>
  );
};
