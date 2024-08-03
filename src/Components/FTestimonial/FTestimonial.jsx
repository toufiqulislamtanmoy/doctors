import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination } from "swiper/modules";
import { FaLocationDot } from "react-icons/fa6";
import { useEffect, useState } from "react";

// Helper function to group testimonials in pairs
const groupTestimonials = (testimonials, groupSize) => {
  let result = [];
  for (let i = 0; i < testimonials.length; i += groupSize) {
    result.push(testimonials.slice(i, i + groupSize));
  }
  return result;
};
const FTestimonial = () => {
  const [groupedTestimonials, setGroupedTestimonials] = useState([]);

  useEffect(() => {
    // Fetch the testimonial data from the public directory
    const res = fetch("/testimonial.json");
    res
      .then((data) => data.json())
      .then((data) => setGroupedTestimonials(groupTestimonials(data, 2)));
  }, []);
  console.log(groupedTestimonials);

  return (
    //   testimonial section
    <div className="">
      <h1 className="text-[18px] font-medium mb-[18px] pl-4 lg:pl-0">
        Featured Testimonial
      </h1>
      <div className="bg-white lg:p-[30px] rounded-[10px] w-full">
        <Swiper
          pagination={true}
          modules={[Pagination]}
          className="mySwiper"
        >
          {groupedTestimonials.map((testimonialPair, index) => (
            <SwiperSlide key={index}>
              <div className="space-y-5">
                {testimonialPair.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="flex justify-start gap-4 p-[10px] rounded-[10px] border border-[#E7E7E7]"
                  >
                    <div className="w-[100px]">
                      <img
                        src={testimonial?.img}
                        alt={testimonial.title}
                        className="w-full rounded-[10px]"
                      />
                    </div>
                    <div className="w-2/3">
                      <p className="flex items-center gap-2 w-full text-[13px] text-[#5C635A]">
                        <FaLocationDot /> {testimonial.address}
                      </p>
                      <h4 className="text-sm font-medium mt-[15px] text-[#232F3C] text-start">
                        {testimonial.title}
                      </h4>
                      <p className="text-[13px] font-medium mt-[15px] line-clamp-3 text-[#5C635A] text-start">
                        {testimonial.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FTestimonial;
