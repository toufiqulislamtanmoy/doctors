import FeaturedTherapist from "../../Components/FeaturedTherapiest/FeaturedTherapiest";
import FTestimonial from "../../Components/FTestimonial/FTestimonial";
import HeroSection from "../../Components/Hero/HeroSection";
import PopularCity from "../../Components/PopularCity/PopularCity";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeaturedTherapist/>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:m-[30px] gap-[30px]">
        <FTestimonial />
        <PopularCity />
      </div>
    </>
  );
};

export default Home;
