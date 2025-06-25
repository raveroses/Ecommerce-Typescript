import apiContext from "@/CustomHooks/createContext";
import { useContext, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
const PasswordUpdate = () => {
  const [passwordReveal, setPasswordReveal] = useState(false);
  const handlePasswordReveal = () => {
    setPasswordReveal((prev) => !prev);
  };
  const context = useContext(apiContext);
  if (!context) return;

  const { handleResetPasswordOnchange, handleUpdatePassword, resetPassword } =
    context;
  return (
    <section className="flex flex-col my-10 font-Afacad">
      <div className="mx-auto">
        <div className="mx-10 my-10">
          <img
            src="images/password.gif"
            alt="password gif"
            className="md:w-70 w-60"
          />
        </div>
        <form
          action=""
          className=" flex flex-col"
          onSubmit={handleUpdatePassword}
        >
          <div className="flex bg-gray-200 shadow-2xl items-center px-1 justify-between">
            <input
              type={passwordReveal ? "text" : "password"}
              value={resetPassword}
              onChange={handleResetPasswordOnchange}
              placeholder="Input new password"
              className="border-none outline-none p-2 md:w-[300px] rounded  placeholder:text-red-500 placeholder:text-center"
            />
            <div onClick={handlePasswordReveal}>
              {passwordReveal ? <FaRegEye /> : <FaRegEyeSlash />}
            </div>
          </div>

          <button
            type="submit"
            className=" bg-red-600 mx-[75px] my-5 text-white text-[14px] font-semibold cursor-pointer rounded py-2"
          >
            Update Password
          </button>
        </form>
      </div>
    </section>
  );
};

export default PasswordUpdate;
