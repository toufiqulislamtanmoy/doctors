import { useContext } from "react";
import dummyUserImage from "../../assets/images/user.png";
import { AuthContext } from "../../Providers/AuthProider";
import { FaChevronDown } from "react-icons/fa";
import FaNotification from "../../assets/icon/Notification.png";
import FaLogout from "../../assets/icon/fi_download.png";
import { HiMenuAlt3 } from "react-icons/hi";
const Navbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <nav className="py-7 bg-white border-[#E7E7E7] sticky top-0 px-[30px] flex items-center justify-between ">
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
        <h1 className="text-[#4285F3] text-[32px] leading-10 font-PoorRichard">
          LOGO
        </h1>
      </div>
      {/* notification and others */}
      <div className="flex items-center lg:gap-5 gap-3">
        {/* notification icon */}
        <button className="p-3 rounded-full lg:border lg:border-[#E7E7E7]">
          <img src={FaNotification} className="w-full" alt="" />
        </button>

        {/* logout button large device*/}
        <button className="hidden lg:flex items-center gap-[10px] border-l border-[#E7E7E7] pl-5">
          <span className="text-[#F15E4A] text-[15px]">Log Out</span>
          <p className="p-3 rounded-full  bg-[#FFECEA]">
            <img src={FaLogout} className="w-full " alt="" />
          </p>
        </button>

        {/* hamburger menu button */}
        <button className="lg:hidden block">
          <HiMenuAlt3 />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
