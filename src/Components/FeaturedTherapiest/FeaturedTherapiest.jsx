
import { FaLocationDot } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";
import sliderCardImage from "../../assets/images/therapist1.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRef } from "react";

const FeaturedTherapist = () => {
  const sliderRef = useRef(null);
  const scrollAmount = 300;

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= scrollAmount;
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += scrollAmount;
    }
  };

  return (
    //   featured therapist container
    <div className="lg:m-[30px] m-[10px] scroll-smooth">
      <h1 className="text-[18px] font-medium mb-[18px] pl-4 lg:pl-0">
        Featured Therapist
      </h1>

      <div className="bg-white rounded-[10px] relative">
        {/* featured therapist slider left indicator */}
        <button
          className="absolute left-10 top-1/2 -translate-y-1/2 bg-[#D4E9FF] p-3 rounded-full text-[#152A16]"
          onClick={handlePrevClick}
        >
          <IoIosArrowBack />
        </button>
        {/* featured therapist slider card wrapper */}
        <div
          className="flex items-center justify-start max-w-[80%] mx-auto overflow-x-hidden scroll-smooth"
          ref={sliderRef}
        >
          <div className="m-[30px] shrink-0 w-[200px]">
            <div className="border border-[#E7E7E7] p-[10px] rounded-[10px]">
              <img src={sliderCardImage} alt="therapist" />
              <div className="">
                <h4 className="text-sm font-medium mt-[20px] mb-[15px] text-[#232F3C] text-start">
                  Michael Smith
                </h4>
                <p className="flex items-center gap-2 w-full text-[13px] mb-[12px] text-[#5C635A]">
                  <FaLocationDot /> 123 Elm Street, New York
                </p>
                <p className="flex items-center gap-2 w-full text-[13px] text-[#5C635A]">
                  <FaCar /> Mobile & In-Studio
                </p>
              </div>
            </div>
            <div className="bg-[#156BCA] text-center rounded-b-[9px]">
              <button className="text-white text-sm py-2 underline">
                See Details
              </button>
            </div>
          </div>
          <div className="m-[30px] shrink-0 w-[200px]">
            <div className="border border-[#E7E7E7] p-[10px] rounded-[10px]">
              <img src={sliderCardImage} alt="therapist" />
              <div className="">
                <h4 className="text-sm font-medium mt-[20px] mb-[15px] text-[#232F3C] text-start">
                  Michael Smith
                </h4>
                <p className="flex items-center gap-2 w-full text-[13px] mb-[12px] text-[#5C635A]">
                  <FaLocationDot /> 123 Elm Street, New York
                </p>
                <p className="flex items-center gap-2 w-full text-[13px] text-[#5C635A]">
                  <FaCar /> Mobile & In-Studio
                </p>
              </div>
            </div>
            <div className="bg-[#156BCA] text-center rounded-b-[9px]">
              <button className="text-white text-sm py-2 underline">
                See Details
              </button>
            </div>
          </div>
          <div className="m-[30px] shrink-0 w-[200px]">
            <div className="border border-[#E7E7E7] p-[10px] rounded-[10px]">
              <img src={sliderCardImage} alt="therapist" />
              <div className="">
                <h4 className="text-sm font-medium mt-[20px] mb-[15px] text-[#232F3C] text-start">
                  Michael Smith
                </h4>
                <p className="flex items-center gap-2 w-full text-[13px] mb-[12px] text-[#5C635A]">
                  <FaLocationDot /> 123 Elm Street, New York
                </p>
                <p className="flex items-center gap-2 w-full text-[13px] text-[#5C635A]">
                  <FaCar /> Mobile & In-Studio
                </p>
              </div>
            </div>
            <div className="bg-[#156BCA] text-center rounded-b-[9px]">
              <button className="text-white text-sm py-2 underline">
                See Details
              </button>
            </div>
          </div>
          <div className="m-[30px] shrink-0 w-[200px]">
            <div className="border border-[#E7E7E7] p-[10px] rounded-[10px]">
              <img src={sliderCardImage} alt="therapist" />
              <div className="">
                <h4 className="text-sm font-medium mt-[20px] mb-[15px] text-[#232F3C] text-start">
                  Michael Smith
                </h4>
                <p className="flex items-center gap-2 w-full text-[13px] mb-[12px] text-[#5C635A]">
                  <FaLocationDot /> 123 Elm Street, New York
                </p>
                <p className="flex items-center gap-2 w-full text-[13px] text-[#5C635A]">
                  <FaCar /> Mobile & In-Studio
                </p>
              </div>
            </div>
            <div className="bg-[#156BCA] text-center rounded-b-[9px]">
              <button className="text-white text-sm py-2 underline">
                See Details
              </button>
            </div>
          </div>
          <div className="m-[30px] shrink-0 w-[200px]">
            <div className="border border-[#E7E7E7] p-[10px] rounded-[10px]">
              <img src={sliderCardImage} alt="therapist" />
              <div className="">
                <h4 className="text-sm font-medium mt-[20px] mb-[15px] text-[#232F3C] text-start">
                  Michael Smith
                </h4>
                <p className="flex items-center gap-2 w-full text-[13px] mb-[12px] text-[#5C635A]">
                  <FaLocationDot /> 123 Elm Street, New York
                </p>
                <p className="flex items-center gap-2 w-full text-[13px] text-[#5C635A]">
                  <FaCar /> Mobile & In-Studio
                </p>
              </div>
            </div>
            <div className="bg-[#156BCA] text-center rounded-b-[9px]">
              <button className="text-white text-sm py-2 underline">
                See Details
              </button>
            </div>
          </div>
        </div>

        {/* featured therapist slider right indicator */}
        <button
          className="absolute right-10 top-1/2 -translate-y-1/2 bg-[#D4E9FF] p-3 rounded-full text-[#152A16]"
          onClick={handleNextClick}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default FeaturedTherapist;
