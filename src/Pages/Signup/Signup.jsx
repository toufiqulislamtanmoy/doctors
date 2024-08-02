import MobileSignUp from "../../Components/SignupComponents/MobileSignUp";
import WebSignUp from "../../Components/SignupComponents/WebSignUp";

const SignUp = () => {
    return (
        <section className="max-w-6xl mx-auto">
            {/* web sign up */}
            <WebSignUp/>
            {/* mobile sign up */}
            <MobileSignUp/>
        </section>
    );
};

export default SignUp;