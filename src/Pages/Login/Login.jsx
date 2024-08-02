import MobileLogin from "../../Components/LoginComponents/MobileLogin";
import WebLogin from "../../Components/LoginComponents/WebLogin";

const Login = () => {
    return (
        <section className="max-w-6xl mx-auto">
            {/* web sign up */}
            <WebLogin/>
            {/* mobile sign up */}
            <MobileLogin/>
        </section>
    );
};

export default Login;