import { useContext, useEffect } from "react";
import { AuthContext } from "../../Providers/AuthProider";

const DetailsModal = () => {
  const { detailsPopup, setDetailsPopup, singleDetails } =
    useContext(AuthContext);

  useEffect(() => {
    console.log(detailsPopup);
    console.log(singleDetails);
  }, [detailsPopup, singleDetails, setDetailsPopup]);
  return (
    <div
      className={`absolute top-1/2 translate-y-[-40%] lg:translate-y-[-65%] left-1/2 translate-x-[-50%] w-[100vw] lg:w-[50vw] mx-auto min-h-[80vh] lg:min-h-[60vh] overflow-y-auto bg-[rgba(112,109,109,0.5)] p-14 rounded-[10px] z-50`}
    >
      <div className="w-full mx-auto mt-14 bg-white rounded-xl  shadow-md overflow-hidden md:max-w-2xl">
        <div className="flex items-center justify-center mt-5">
          <img
            className="h-48 w-48 lg:w-full object-cover md:w-48 rounded-[10px]"
            src={singleDetails.imageUrl}
            alt={singleDetails.name}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {singleDetails.specialties.join(", ")}
          </div>
          <h1 className="block mt-1 text-lg leading-tight font-medium text-black">
            {singleDetails.name}
          </h1>
          <p className="mt-2 text-gray-500">{singleDetails.bio}</p>
          <div className="mt-4">
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Experience:</span>{" "}
              {singleDetails.yearsOfExperience} years
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Languages:</span>{" "}
              {singleDetails.languages.join(", ")}
            </p>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Phone:</span>{" "}
              {singleDetails.phone}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Email:</span>{" "}
              {singleDetails.email}
            </p>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Address:</span>
            </p>
            <p className="text-sm text-gray-600">
              {singleDetails?.address?.street}, {singleDetails?.address?.city},{" "}
              {singleDetails?.address?.zip}
            </p>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Availability:</span>
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600">
              {Object?.entries(singleDetails.availability)?.map(
                ([day, hours]) => (
                  <li key={day}>
                    {day.charAt(0).toUpperCase() + day.slice(1)}: {hours}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
        <div className="text-right">
          <button onClick={()=>setDetailsPopup(false)} className="bg-[#156BCA] p-2 text-white rounded-tl-[10px]">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsModal;
