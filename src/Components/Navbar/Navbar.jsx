import { useContext, useState } from "react";
import dummyUserImage from "../../assets/images/user.png";
import { AuthContext } from "../../Providers/AuthProider";
import { FaChevronDown } from "react-icons/fa";
import FaNotification from "../../assets/icon/Notification.png";
import FaLogout from "../../assets/icon/fi_download.png";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";
import { PiSquaresFourLight } from "react-icons/pi";
import { FaRegFileLines, FaUserGroup } from "react-icons/fa6";
import { IoSearchOutline, IoSettingsOutline } from "react-icons/io5";
import { CiHeart, CiSquareInfo } from "react-icons/ci";
const Navbar = () => {
  const { user, userLogOut } = useContext(AuthContext);
  const [showPopup, setShowPopup] = useState(false);
  //   log out the user
  const handelLogOut = async () => {
    userLogOut();
  };
  return (
    <section className="">
      <nav className="py-7 bg-white border-[#E7E7E7] sticky top-0 px-[30px] flex items-center justify-between z-10">
        {/* user details in large screen*/}
        <div className="lg:flex hidden items-center gap-3">
          <img
            className="w-10 h-10 rounded-full"
            src={user?.photoURL ? user?.photoURL : dummyUserImage}
          />
          <div>
            {/* user name */}
            <h3 className="flex items-center justify-between w-full gap-2 text-[15px] leading-[22.5px] text-[#152A16]">
              {user?.displayName ? user?.displayName : "Dummy User"}
              <FaChevronDown />
            </h3>
            <h5 className="text-[#5C635A] text-sm">
              {user?.email ? user?.email : "dummy@email"}
            </h5>
          </div>
        </div>
        {/* logo for small screen */}
        <div className="lg:hidden block">
          <Link
            to={"/"}
            className="text-[#4285F3] text-[32px] leading-10 font-PoorRichard"
          >
            LOGO
          </Link>
        </div>
        {/* notification and others */}
        <div className="flex items-center lg:gap-5 gap-3">
          {/* notification icon */}
          <button className="p-3 rounded-full lg:border lg:border-[#E7E7E7]">
            <img src={FaNotification} className="w-full" alt="" />
          </button>

          {/* logout button large device*/}
          <button onClick={handelLogOut} className="hidden lg:flex items-center gap-[10px] border-l border-[#E7E7E7] pl-5">
            <span className="text-[#F15E4A] text-[15px]">Log Out</span>
            <p className="p-3 rounded-full  bg-[#FFECEA]">
              <img src={FaLogout} className="w-full " alt="" />
            </p>
          </button>

          {/* hamburger menu button */}
          <button
            className="lg:hidden block"
            onClick={() => setShowPopup(!showPopup)}
          >
            <HiMenuAlt3 />
          </button>
        </div>
      </nav>
      {showPopup && (
        <div
          className="absolute top-0 left-0 w-full bg-black/60 h-full z-30"
          onClick={() => setShowPopup(false)}
        >
          <div className="bg-[#156BCA] w-2/3 min-h-[33vh] max-h-[44vh] ml-auto flex justify-end pr-4">
            <div className="flex flex-col items-end justify-center min-h-full">
              <img
                src={user?.photoURL ? user?.photoURL : dummyUserImage}
                className="w-[74px] h-[74px] rounded-full z-50 mb-3"
                alt=""
              />
              <h2 className="text-white text-2xl font-semibold mb-1">
                {user?.displayName ? user?.displayName : "Dummy User"}
              </h2>
              <p className="text-[#1A2634] text-xs">
                {user?.email ? user?.email : "dummy@email"}
              </p>
            </div>
          </div>
          {/* list items */}
          <div className="bg-white w-2/3 ml-auto">
            <ul className="">
              <li
                className={`cursor-pointer w-full pl-6 py-3 hover:bg-[#D4E9FF] transition-colors duration-700 p-2 ${
                  location.pathname === "/"
                    ? "bg-[#D4E9FF] border-l-[4px] border-[#102C4A]"
                    : ""
                }`}
              >
                <Link to="/" className="flex items-center gap-2 text-[#152A16]">
                  <PiSquaresFourLight color="#152A16" /> Home
                </Link>
              </li>
              <li
                className={`cursor-pointer w-full pl-6 py-3 hover:bg-[#D4E9FF] transition-colors duration-700 p-2 ${
                  location.pathname === "/new-listing"
                    ? "bg-[#D4E9FF] border-l-[4px] border-[#102C4A]"
                    : ""
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
                  location.pathname === "/search"
                    ? "bg-[#D4E9FF] border-l-[4px] border-[#102C4A]"
                    : ""
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
                  location.pathname === "/about"
                    ? "bg-[#D4E9FF] border-l-[4px] border-[#102C4A]"
                    : ""
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
                  location.pathname === "/favorites"
                    ? "bg-[#D4E9FF] border-l-[4px] border-[#102C4A]"
                    : ""
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
                  location.pathname === "/help-center"
                    ? "bg-[#D4E9FF] border-l-[4px] border-[#102C4A]"
                    : ""
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
                  location.pathname === "/settings"
                    ? "bg-[#D4E9FF] border-l-[4px] border-[#102C4A]"
                    : ""
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
          </div>
        </div>
      )}
    </section>
  );
};

export default Navbar;
