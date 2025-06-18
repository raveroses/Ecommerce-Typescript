import { NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useEffect, useState } from "react";
import React from "react";
import { toast } from "react-toastify";
import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
  "https://wxijzyfbmmolulveeufe.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4aWp6eWZibW1vbHVsdmVldWZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyMDk4OTEsImV4cCI6MjA2NTc4NTg5MX0.zahPGgGGf2rnzQgOiC3Bn6seO_l13avPsK9HjIsH9yI"
);

type UserType = {
  userName: string;
  contact: string;
  password: string;
};
const SignUp = () => {
  const [user, setUser] = useState<UserType>({
    userName: "",
    contact: "",
    password: "",
  });
  console.log(user);

  const handleValidation = () => {
    const isPhone = /^(?:\+?234|0)\d{10}$/;
    const isEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(com)$/;

    if (!user.userName.trim() || !user.password.trim()) return false;

    const contactConversion = String(user.contact).trim();
    const contactValidation =
      isPhone.test(contactConversion) || isEmail.test(contactConversion);
    if (!contactValidation) {
      toast.error("Please enter valid mail or Number (+234 or (0))");
      return;
    }
    return true;
  };
  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const isValid = handleValidation();
      if (isValid) {
        const { data, error } = await supabase.auth.signUp({
          email: user.contact,
          password: user.password,
        });

        console.log(data);
        console.log(error);
      } else {
        toast("Please fill all the fields");
      }
    } catch (e) {
      if (e instanceof Error) {
        console.log(e.message);
      }
    }
  };

  const signingWithAuth = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    console.log(data, error);
  };
  return (
    <div className="w-[100%] flex">
      <section className="image md:w-[50%] md:block hidden">
        <img src="/images/signUp.svg" alt="hero-image" />
      </section>
      <section className="sign-up font-Afacad md:w-[50%] md:px-[180px] md:py-[55px] w-full px-[10px] py-[100px]">
        <h1 className="text-[26px] font-semibold">Create an account</h1>
        <h4 className="text-[14px]">Enter your details below</h4>
        <form onSubmit={handleFormSubmission}>
          <input
            type="text"
            placeholder="Name"
            name="userName"
            value={user.userName}
            onChange={handleOnchange}
            className="border-b-1 border-gray-400 outline-none md:w-[270px] w-full max-w-full
             pb-[5px] my-[15px] placeholder:text-[14px] text-red-600 placeholder:text-gray-400"
          />
          <input
            type="text"
            name="contact"
            value={user.contact}
            onChange={handleOnchange}
            placeholder="Email or Phone Number"
            className="border-b-1 border-gray-400 outline-none md:w-[270px] w-full max-w-full
             pb-[5px] my-[15px] placeholder:text-[14px] text-red-600 placeholder:text-gray-400"
          />
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleOnchange}
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
        </form>
        <button
          className="flex md:w-[270px] w-full max-w-full items-center gap-[10px] justify-center border-1 border-gray-400 
          py-[8px] mt-[10px] rounded  cursor-pointer"
          onClick={signingWithAuth}
        >
          <FcGoogle className="text-[25px]" />
          <p>Sign up with Google</p>
        </button>
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
