import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProider";
import { useForm } from "react-hook-form";

const ForgetPassword = () => {
  const { setForgetPassPopup, forgetPassword } = useContext(AuthContext);
  const [forgetPasswordMessage, setForgetPasswordMessage] = useState("");
  const [btnVeriy, setBtnVeriy] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    forgetPassword(data?.email).then(() => {
      setForgetPasswordMessage("Please check your email");
      setBtnVeriy(true);
    });
  };
  return (
    <div
      className={`absolute top-1/2 translate-y-[-90%] lg:translate-y-[-65%] left-1/2 translate-x-[-50%] w-[100vw] lg:w-[50vw] mx-auto min-h-[60vh] bg-[rgba(112,109,109,0.5)] p-14 rounded-[10px] z-50`}
    >
      <div className="w-full mx-auto mt-14 bg-white rounded-xl max-h-[80vh] overflow-y-auto shadow-md overflow-hidden md:max-w-2xl">
        <h5 className="text-[#152A16] text-xl text-center font-semibold mt-8">
          Forgot Your Account Password
        </h5>
        <form onSubmit={handleSubmit(onSubmit)} className="p-8 mt-5">
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
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-400 text-xs pl-2">
                Email is required
              </span>
            )}
          </div>

          {/* submit button */}
          <div className="text-center mt-5">
            <button
              type="submit"
              className="bg-[#4285F3] text-white rounded-[10px] py-3 w-full"
            >
              Forgot
            </button>
          </div>
          {btnVeriy && (
            <>
              <p className="text-center mt-5 text-sm text-[#b4b027]">
                {forgetPasswordMessage}
              </p>
              <p 
              onClick={()=>{
                setForgetPassPopup(false);
                setBtnVeriy(false);
                setForgetPasswordMessage("");
                reset();
              }
            }
              className="text-center cursor-pointer mt-5 text-sm text-[#156BCA] hover:underline">
                Proceed Now
              </p>
            </>
          )}
        </form>
        <div className="text-right">
          <button
            onClick={() => setForgetPassPopup(false)}
            className="bg-[#156BCA] p-2 text-white rounded-tl-[10px]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
