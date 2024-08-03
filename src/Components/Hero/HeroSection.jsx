import { Link } from "react-router-dom";
import heroImage from "../../assets/images/hero_image.png";
import heroShade from "../../assets/images/hero_shade.png";
const HeroSection = () => {
  return (
    <div className="bg-white my-3 lg:m-[30px] lg:p-[30px] p-4 rounded-[10px]">
      {/* hero section wrapper */}
      <div className="flex lg:flex-row flex-col items-center justify-between gap-14 lg:gap-0">
        {/* text section wrapper */}
        <div>
          {/* hero section text info */}
          <div>
            <h4 className="text-xl font-semibold">
              I&#39;m Looking for Massage Therapist Near...
            </h4>
            <p className="text-[15px] font-medium mt-6">
              In using this site, I agree to be bound by the{" "}
              <Link to={"/terms-conditions"} className="text-[#156BCA]">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to={"/privacy-policy"} className="text-[#156BCA]">
                Privacy Policy
              </Link>
            </p>
          </div>
          {/* search bar group */}
          <div className="my-[30px] hidden lg:block">
            {/* search bar */}
            <div className="bg-[#EEF2F5] rounded-[10px] flex">
              <input
                type="text"
                placeholder="ZIP code or city name "
                className="focus:outline-none py-3 pl-5 w-full bg-transparent"
              />
              {/* search button */}
              <button className="bg-[#156BCA] m-1 px-4 rounded-[10px] text-sm text-white ">
                Go
              </button>
            </div>
          </div>
        </div>
        {/* hero section image */}
        <div className="relative">
          <img src={heroImage} alt="hero" />
          <img
            src={heroShade}
            alt="hero"
            className="absolute bottom-0 lg:-left-[20%] left-0 md:left-0"
          />
        </div>
      </div>

      {/* search bar group */}
      <div className="mt-10 lg:hidden block">
        {/* search bar */}
        <div className="bg-[#EEF2F5] rounded-[10px] flex">
          <input
            type="text"
            placeholder="ZIP code or city name "
            className="focus:outline-none py-3 pl-5 w-full bg-transparent"
          />
          {/* search button */}
          <button className="bg-[#156BCA] m-1 px-4 rounded-[10px] text-sm text-white ">
            Go
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
