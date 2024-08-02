import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination } from "swiper/modules";
import sliderImage from "../../assets/images/slider_iamge.png";

const AuthSlider = ({sliderMessage1,sliderMessage2}) => {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
      <SwiperSlide>
          <div className="relative">
            <img src={sliderImage} alt="" className="w-full " />
            <div className="bg-[#152A16] opacity-75 p-5  rounded-[10px]  absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
              <h4 className=" text-2xl">
                <span className="text-[#156BCA]">{sliderMessage1}</span>  <span className="text-white">{sliderMessage2}</span></h4>
              
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={sliderImage} alt="" className="w-full " />
            <div className="bg-[#152A16] opacity-75 p-5  rounded-[10px]  absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
              <h4 className=" text-2xl">
                <span className="text-[#156BCA]">{sliderMessage1}</span>  <span className="text-white">{sliderMessage2}</span></h4>
              
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={sliderImage} alt="" className="w-full " />
            <div className="bg-[#152A16] opacity-75 p-5  rounded-[10px]  absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
              <h4 className=" text-2xl">
                <span className="text-[#156BCA]">{sliderMessage1}</span>  <span className="text-white">{sliderMessage2}</span></h4>
              
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default AuthSlider;
