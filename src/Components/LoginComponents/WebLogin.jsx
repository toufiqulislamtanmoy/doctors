import { FaRegEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import AuthSlider from "../AuthSlider/AuthSlider";
import { FcGoogle } from "react-icons/fc";
import facebook from "../../assets/icon/facebook.png"
const WebLogin = () => {
  return (
    <div className="hidden lg:flex min-h-screen items-center justify-around gap-10">
      {/* form input */}
      <div className="flex-1  ">
        <h1 className="text-[#4285F3] text-[40px] leading-10 font-PoorRichard">
          LOGO
        </h1>
        <h5 className="text-[#152A16] text-3xl font-semibold mt-8">
          Log In To Your Account
        </h5>
        <p className="mt-6 mb-10">Welcome Back! Select a method to log in:</p>
        {/* provider logins */}
        <div className="flex items-center gap-10 justify-start">
            {/* google */}
            <button className="flex rounded-md items-center gap-2 bg-gradient-to-l to-[#E4E4E4] from-white py-2 px-6 shadow-md "><FcGoogle/> Google</button>
            {/* facebook */}
            <button className="flex rounded-md items-center gap-2 text-white bg-gradient-to-l to-[#0778F5] from-[#298FFF] py-2 px-6 shadow-md "> <img src={facebook} className="w-full" alt="" /> Facebook</button>
        </div>
        {/* divider */}
        <div className="divider mt-8">Or Continue with Email</div>
       
        <form className="space-y-6">
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

          {/* remember me checkbox and forgot password */}
          <div className="flex justify-between items-center">
            {/* remember me */}
            <div>
              <input type="checkbox" name="terms" id="terms" className="mr-2" />
              <label htmlFor="terms" className="text-[#4285F3] text-sm">
                Remember me
              </label>
            </div>
            {/* forgot password */}
            <button className="text-[#4285F3] text-sm hover:underline transition-all duration-700">Forgot password?</button>
          </div>
          {/* submit button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#4285F3] text-white rounded-[10px] py-3 w-[271px]"
            >
              Sign In
            </button>
          </div>
        </form>
        {/* footer  navigate to login page */}
        <div className="text-center mt-10">
          <p className="text-[#152A16]">
            Don&#39;t have an account?{" "}
            <Link
              to="/sign-up"
              className="text-[#4285F3] hover:underline transition-all duration-700"
            >
              Create Account
            </Link>
          </p>
        </div>
      </div>
      {/* slider image and information */}
      <div className="w-[50%] ">
        <AuthSlider sliderMessage1={"Sign In"} sliderMessage2={"to view all the massage therapists"}/>
      </div>
    </div>
  );
};

export default WebLogin;
