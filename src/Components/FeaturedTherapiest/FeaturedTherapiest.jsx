import { FaLocationDot } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../Providers/AuthProider";
import { getTherapistData } from "../../Helper/TherapiestData";
import DetailsModal from "./DetailsModal";

const FeaturedTherapist = () => {
  const sliderRef = useRef(null);
  const scrollAmount = 300;
  const { searchText, setDetailsPopup, detailsPopup, setSingleDetails } =
    useContext(AuthContext);
  const [therapistData, setTherapistData] = useState([]);

  console.log(therapistData);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTherapistData(searchText);
      setTherapistData(data);
    };
    fetchData();
  }, [searchText]);

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
    <>
      <div className="lg:m-[30px] ">
        <h1 className="text-[18px] font-medium mb-[18px] pl-4 lg:pl-0">
          Featured Therapist
        </h1>

        <div className="bg-white rounded-[10px] relative">
          {/* featured therapist slider left indicator */}
          {therapistData?.length > 0 && (
            <button
              className="lg:block hidden absolute left-10 top-1/2 -translate-y-1/2 bg-[#D4E9FF] p-3 rounded-full text-[#152A16]"
              onClick={handlePrevClick}
            >
              <IoIosArrowBack />
            </button>
          )}
          {/* featured therapist slider card wrapper */}
          {therapistData?.length > 0 ? (
            <div
              className="flex items-center justify-start max-w-[225px]  lg:max-w-[80%] mx-auto overflow-auto lg:overflow-x-hidden scroll-smooth"
              ref={sliderRef}
            >
              {therapistData?.map((therapist) => (
                <div key={therapist?.id} className="m-[30px] shrink-0 wrap">
                  <div className="border border-[#E7E7E7] p-[10px] rounded-[10px]">
                    <img
                      src={therapist?.imageUrl}
                      alt="therapist"
                      className="w-ful"
                    />
                    <div className="">
                      <h4 className="text-sm font-medium mt-[20px] mb-[15px] text-[#232F3C] text-start">
                        {therapist?.name}
                      </h4>
                      <p className="flex items-center gap-2 w-full text-[13px] mb-[12px] text-[#5C635A]">
                        <FaLocationDot /> {therapist?.address?.street}
                        {", "} {therapist?.address?.city}
                      </p>
                      <p className="flex items-center gap-2 w-full text-[13px] text-[#5C635A]">
                        <FaCar />{" "}
                        {therapist?.mobileAndInStudio === 1
                          ? "Mobile"
                          : therapist?.mobileAndInStudio === 2
                          ? "In-Studio"
                          : "Mobile & In-Studio"}
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#156BCA] text-center rounded-b-[9px]">
                    <button
                      onClick={() => {
                        setDetailsPopup(true);
                        setSingleDetails(therapist);
                      }}
                      className="text-white text-sm py-2 underline"
                    >
                      See Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="min-h-[12vh] flex items-center justify-center">
              No Therapist Found In Searched City Or Zip
            </p>
          )}

          {/* featured therapist slider right indicator */}
          {therapistData?.length > 0 && (
            <button
              className="lg:block hidden absolute right-10 top-1/2 -translate-y-1/2 bg-[#D4E9FF] p-3 rounded-full text-[#152A16]"
              onClick={handleNextClick}
            >
              <IoIosArrowForward />
            </button>
          )}
        </div>
      </div>
      {detailsPopup && <DetailsModal/>}
    </>
  );
};

export default FeaturedTherapist;
