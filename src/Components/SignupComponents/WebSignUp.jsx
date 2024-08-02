
import { FaRegEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import AuthSlider from "../AuthSlider/AuthSlider";
const WebSignUp = () => {
  return (
    <div className="hidden lg:flex min-h-screen items-center justify-around gap-10">
      {/* form input */}
      <div className="flex-1  ">
        <h1 className="text-[#4285F3] text-[40px] leading-10 font-PoorRichard">LOGO</h1>
        <h5 className="text-[#152A16] text-3xl font-semibold mt-8">
          Sign In To Your Account
        </h5>
        <p className="mt-6 mb-10">
          elcome Back! By click the sign up button, you&#39;re agree to Zenitood
          Terms and Service and acknlowledge the{" "}
          <Link to={"/privacy-policy"} className="hover:underline transition-all duration-700 text-[#4285F3] font-Poppins">
            {" "}
            Privacy and Policy
          </Link>
        </p>
        <form className="space-y-6">
          {/* name */}
          <div>
            <label
              htmlFor="name"
              className="text-[#152A16] font-medium text-base block"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="@username"
              className="mt-4 w-full border-[0.7px] border-[#E7E7E7] rounded-[10px] py-3 focus:outline-none pl-5"
            />
          </div>
          {/* email */}
          <div>
            <label
              htmlFor="email"
              className="text-[#152A16] font-medium text-base block"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="mt-4 w-full border-[0.7px] border-[#E7E7E7] rounded-[10px] py-3 focus:outline-none pl-5"
            />
          </div>
          {/* password */}
          <div>
            <label
              htmlFor="password"
              className="text-[#152A16] font-medium text-base block"
            >
              Password
            </label>
            <div className="flex items-center justify-between pr-5 mt-4 w-full border-[0.7px] border-[#E7E7E7] rounded-[10px]">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                className="w-full py-3 focus:outline-none pl-5"
              />
              {/* Show password button */}
              <button>
                <FaRegEyeSlash />
              </button>
            </div>
          </div>
          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="text-[#152A16] font-medium text-base block"
            >
              Password
            </label>
            <div className="flex items-center justify-between pr-5 mt-4 w-full border-[0.7px] border-[#E7E7E7] rounded-[10px]">
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Re-type password"
                className="w-full py-3 focus:outline-none pl-5"
              />
              {/* Show password button */}
              <button>
                <FaRegEyeSlash />
              </button>
            </div>
          </div>
          {/* terms and conditions checkbox */}
          <div>
            <input
              type="checkbox"
              name="terms"
              id="terms"
              className="mr-2"
            />
            <label
              htmlFor="terms"
              className="text-[#4285F3] text-sm"
            >
              I agree to the Terms and Conditions
            </label>
          </div>
          {/* submit button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#4285F3] text-white rounded-[10px] py-3 w-[271px]"
            >
              Sign Up
            </button>
          </div>
        </form>
        {/* footer  navigate to login page */}
        <div className="text-center mt-10">
          <p className="text-[#152A16]">
            Already have an account?{" "}
            <Link to="/login" className="text-[#4285F3] hover:underline transition-all duration-700">
              Log In
            </Link>
          </p>
        </div>
      </div>
      {/* slider image and information */}
      <div className="w-[50%] ">
        <AuthSlider sliderMessage1={"Create Account"} sliderMessage2={"Fill in Your Information"}/>
      </div>
    </div>
  );
};

export default WebSignUp;
