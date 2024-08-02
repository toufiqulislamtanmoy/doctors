import { Link, Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { PiSquaresFourLight } from "react-icons/pi";
import { FaUserGroup } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegFileLines } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { CiSquareInfo } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
const Main = () => {
  const location = useLocation();
  return (
    <div className="flex bg-[#EEF2F5]">
      {/* sidebar */}
      <aside className="hidden lg:block w-[300px] bg-white border-[1px] border-[#E7E7E7] min-h-screen lg:fixed top-0 ">
        {/* header section */}
        <div className="mt-14 mb-10 text-center">
          <h1 className="text-[#4285F3] text-[40px] leading-10 font-PoorRichard">
            LOGO
          </h1>
        </div>

        {/* list section */}
        <ul className="">
          <li
            className={`cursor-pointer w-full pl-6 py-3 hover:bg-[#D4E9FF] transition-colors duration-700 p-2 ${
              location.pathname === "/"
                ? " bg-[#D4E9FF] border-l-[10px] border-[#102C4A]"
                : ""
            }`}
          >
            <Link to="/" className="flex items-center gap-2 text-[#152A16]">
              <PiSquaresFourLight color="#152A16" /> Home
            </Link>
          </li>
          <li
            className={`cursor-pointer w-full pl-6 py-3 hover:bg-[#D4E9FF] transition-colors duration-700 p-2 ${
              location.pathname === "/new-listing" ? "bg-[#D4E9FF] border-l-[10px] border-[#102C4A]" : ""
            }`}
          >
            <Link
              to="/new-listing"
              className="flex items-center gap-2 text-[#152A16]"
            >
              <FaUserGroup /> New Listing
            </Link>
          </li>
          <li
            className={`cursor-pointer w-full pl-6 py-3 hover:bg-[#D4E9FF] transition-colors duration-700 p-2 ${
              location.pathname === "/search" ? "bg-[#D4E9FF] border-l-[10px] border-[#102C4A]" : ""
            }`}
          >
            <Link
              to="/search"
              className="flex items-center gap-2 text-[#152A16]"
            >
              <IoSearchOutline /> Search
            </Link>
          </li>
          <li
            className={`cursor-pointer w-full pl-6 py-3 hover:bg-[#D4E9FF] transition-colors duration-700 p-2 ${
              location.pathname === "/about" ? "bg-[#D4E9FF] border-l-[10px] border-[#102C4A]" : ""
            }`}
          >
            <Link
              to="/about"
              className="flex items-center gap-2 text-[#152A16]"
            >
              <FaRegFileLines /> About
            </Link>
          </li>
          <li
            className={`cursor-pointer w-full pl-6 py-3 hover:bg-[#D4E9FF] transition-colors duration-700 p-2 ${
              location.pathname === "/favorites" ? "bg-[#D4E9FF] border-l-[10px] border-[#102C4A]" : ""
            }`}
          >
            <Link
              to="/favorites"
              className="flex items-center gap-2 text-[#152A16]"
            >
              <CiHeart /> Favorites
            </Link>
          </li>
          <div className="divider"></div>
          <li
            className={`cursor-pointer w-full pl-6 py-3 hover:bg-[#D4E9FF] transition-colors duration-700 p-2 ${
              location.pathname === "/help-center" ? "bg-[#D4E9FF] border-l-[10px] border-[#102C4A]" : ""
            }`}
          >
            <Link
              to="/help-center"
              className="flex items-center gap-2 text-[#152A16]"
            >
              <CiSquareInfo /> Help Center
            </Link>
          </li>
          <li
            className={`cursor-pointer w-full pl-6 py-3 hover:bg-[#D4E9FF] transition-colors duration-700 p-2 ${
              location.pathname === "/settings" ? "bg-[#D4E9FF] border-l-[10px] border-[#102C4A]" : ""
            }`}
          >
            <Link
              to="/settings"
              className="flex items-center gap-2 text-[#152A16]"
            >
              <IoSettingsOutline /> Setting
            </Link>
          </li>
        </ul>
      </aside>
      <section className="flex-1 lg:ml-[300px] ml-0">
        <Navbar />
        <Outlet />
      </section>
    </div>
  );
};

export default Main;
