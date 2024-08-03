import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PopularCity = () => {
  const [cities, setCities] = useState([]);
  useEffect(() => {
      const res = fetch('/cities.json');
      res.then((data) => data.json()).then((data) => setCities(data));
  },[])
  console.log(cities);

  return (
    <div className="">
      <h1 className="text-[18px] font-medium mb-[18px] pl-4 lg:pl-0">
      Popular Cities
      </h1>
      <div className="bg-white lg:p-[30px] p-4 rounded-[10px] w-full grid grid-cols-3">
        {cities?.map((city,index) => (
          <Link to={city?.url} className={`py-3 text-sm text-[#156BCA] underline ${index === 0 ? '' : 'border-t border-[#E7E7E7]'}`} key={city?.id}>{city?.city_name}</Link>
        ))}
      </div>
    </div>
  );
};

export default PopularCity;
