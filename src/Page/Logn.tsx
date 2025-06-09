import { NavLink } from "react-router-dom";
const Login = () => {
  return (
    <div className="w-[100%] flex">
      <section className="image md:w-[50%] md:block hidden">
        <img src="/images/signUp.svg" alt="hero-image" />
      </section>
      <section className="sign-up font-Afacad md:w-[50%] md:px-[180px] md:pt-[150px] w-full px-[10px] py-[100px]">
        <h1 className="text-[26px] font-semibold">Log in to Exclusive Store</h1>
        <h4 className="text-[14px]">Enter your details below</h4>
        <form action="">
          <input
            type="text"
            placeholder="Name"
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
          <div className="flex justify-between gap-[14px]">
            <button
              type="submit"
              className="text-center cursor-pointer bg-red-600 py-[6px] px-[50px] rounded text-white mt-[8px]"
            >
              Log In
            </button>
            <button className="cursor-pointer text-[14px] text-red-600">
              Forgot Password?
            </button>
          </div>
        </form>
        <p className="text-[14px] text-center py-[10px]">
          Don't have an account?
          <NavLink to={"/login"} className="underline">
            Sign Up
          </NavLink>
        </p>
      </section>
    </div>
  );
};

export default Login;
