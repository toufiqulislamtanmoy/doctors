import { FaRegEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import AuthSlider from "../AuthSlider/AuthSlider";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProider";
const WebSignUp = () => {
  const imgUrl = "https://i.ibb.co/q7mJKSk/user.png";
  const { createUser,updateUserInFo } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const [termsCondition, setTermsCondition] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Watch password and confirmPassword fields
  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  const onSubmit = (data) => {
    createUser(data?.email, data?.password).then((logedUser) => {
      console.log(logedUser);
      reset();
      updateUserInFo(data?.name, imgUrl).then(() => {
        // console.log("Profile updated");
        navigate("/", { replace: true });
      });
    });
  };

  return (
    <div className="hidden lg:flex min-h-screen items-center justify-around gap-10">
      {/* form input */}
      <div className="flex-1">
        <h1 className="text-[#4285F3] text-[40px] leading-10 font-PoorRichard">
          LOGO
        </h1>
        <h5 className="text-[#152A16] text-3xl font-semibold mt-8">
          Sign In To Your Account
        </h5>
        <p className="mt-6 mb-10">
          Welcome Back! By clicking the sign-up button, you&#39;re agreeing to
          Zenitood Terms and Service and acknowledge the{" "}
          <Link
            to={"/privacy-policy"}
            className="hover:underline transition-all duration-700 text-[#4285F3] font-Poppins"
          >
            Privacy and Policy
          </Link>
        </p>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
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
              {...register("name", { required: true })}
              placeholder="@username"
              className="mt-4 w-full border-[0.7px] border-[#E7E7E7] rounded-[10px] py-3 focus:outline-none pl-5"
            />
            {errors.name && (
              <span className="text-red-400 text-xs pl-2">
                Name is required
              </span>
            )}
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
              {...register("email", { required: true })}
              placeholder="Enter your email"
              className="mt-4 w-full border-[0.7px] border-[#E7E7E7] rounded-[10px] py-3 focus:outline-none pl-5"
            />
            {errors.email && (
              <span className="text-red-400 text-xs pl-2">
                Email is required
              </span>
            )}
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
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Enter your password"
                className="w-full py-3 focus:outline-none pl-5"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern:
                    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()\-=_+{};':"\\|,.<>/?]).+$/,
                })}
              />
              {/* Show password button */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </button>
            </div>
            {errors.password?.type === "minLength" && (
              <p className="text-red-400 text-xs pl-2">
                Password Must be 6 Characters Long
              </p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-400 text-xs pl-2">
                Password must have one uppercase, lowercase, symbol, and number
              </p>
            )}
            {errors.password?.type === "required" && (
              <span className="text-red-400 text-xs pl-2">
                Password is required
              </span>
            )}
          </div>
          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="text-[#152A16] font-medium text-base block"
            >
              Confirm Password
            </label>
            <div className="flex items-center justify-between pr-5 mt-4 w-full border-[0.7px] border-[#E7E7E7] rounded-[10px]">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Re-type password"
                className="w-full py-3 focus:outline-none pl-5"
                {...register("confirmPassword", { required: true })}
              />
              {/* Show password button */}
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </button>
            </div>
            {errors.confirmPassword && (
              <span className="text-red-400 text-xs pl-2">
                Confirm Password is required
              </span>
            )}
            {confirmPassword && password !== confirmPassword && (
              <p className="text-red-400 text-xs pl-2">
                Passwords do not match
              </p>
            )}
          </div>
          {/* terms and conditions checkbox */}
          <div>
            <input
              type="checkbox"
              onClick={() => setTermsCondition(!termsCondition)}
              name="terms"
              id="terms"
              className="mr-2"
            />
            <label htmlFor="terms" className="text-[#4285F3] text-sm">
              I agree to the Terms and Conditions
            </label>
          </div>
          {/* submit button */}
          <div className="text-center">
            <button
              disabled={!termsCondition || password !== confirmPassword}
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
            <Link
              to="/login"
              className="text-[#4285F3] hover:underline transition-all duration-700"
            >
              Log In
            </Link>
          </p>
        </div>
      </div>
      {/* slider image and information */}
      <div className="w-[50%]">
        <AuthSlider
          sliderMessage1={"Create Account"}
          sliderMessage2={"Fill in Your Information"}
        />
      </div>
    </div>
  );
};

export default WebSignUp;
