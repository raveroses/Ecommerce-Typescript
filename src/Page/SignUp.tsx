import { NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
const SignUp = () => {
  return (
    <div className="w-[100%] flex">
      <section className="image md:w-[50%] md:block hidden">
        <img src="/images/signUp.svg" alt="hero-image" />
      </section>
      <section className="sign-up font-Afacad md:w-[50%] md:px-[180px] md:py-[55px] w-full px-[10px] py-[100px]">
        <h1 className="text-[26px] font-semibold">Create an account</h1>
        <h4 className="text-[14px]">Enter your details below</h4>
        <form action="">
          <input
            type="text"
            placeholder="Name"
            className="border-b-1 border-gray-400 outline-none md:w-[270px] w-full max-w-full
             pb-[5px] my-[15px] placeholder:text-[14px] text-red-600 placeholder:text-gray-400"
          />
          <input
            type="email"
            name=""
            id=""
            placeholder="Email or Phone Number"
            className="border-b-1 border-gray-400 outline-none md:w-[270px] w-full max-w-full
             pb-[5px] my-[15px] placeholder:text-[14px] text-red-600 placeholder:text-gray-400"
          />
          <input
            type="password"
            name=""
            id=""
            placeholder="Password"
            className="border-b-1 border-gray-400 outline-none md:w-[270px] w-full max-w-full
             pb-[5px] my-[15px] placeholder:text-[14px] text-red-600 placeholder:text-gray-400"
          />
          <button
            type="submit"
            className="text-center text-white bg-red-600 rounded text-[15px] md:w-[270px] w-full max-w-full py-[8px]
             cursor-pointer"
          >
            Create Account
          </button>
          <button
            className="flex md:w-[270px] w-full max-w-full items-center gap-[10px] justify-center border-1 border-gray-400 
          py-[8px] mt-[10px] rounded  cursor-pointer"
          >
            <FcGoogle className="text-[25px]" />
            <p>Sign up with Google</p>
          </button>
        </form>
        <p className="text-[14px] text-center py-[10px]">
          Already have an account?{" "}
          <NavLink to={"/login"} className="underline">
            Log in
          </NavLink>
        </p>
      </section>
    </div>
  );
};

export default SignUp;
