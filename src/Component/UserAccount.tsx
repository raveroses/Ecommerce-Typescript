import apiContext from "@/CustomHooks/createContext";
import { useContext } from "react";
import { CgProfile } from "react-icons/cg";
import { FaKey } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";
const UserAccount = () => {
  const context = useContext(apiContext);
  if (!context) return;

  const { userSession } = context;
  console.log(userSession);
  const userImage = userSession?.user.user_metadata.picture;
  const userEmail = userSession?.user.user_metadata.email;

  return (
    <>
      <div>
        <div className="bg-gray-200 shadow-xl rounded p-3 ">
          <div className="flex items-center gap-3">
            <img
              src={userImage}
              alt="peofile-image"
              className="rounded-full w-[50px]"
            />

            <div className="text-[16px] font-semibold">{userEmail}</div>
          </div>
          <hr className="mt-2 font-bold" />

          <div className="profile flex items-center gap-2 justify-center bg-gray-400 my-2 py-1 rounded cursor-pointer">
            <CgProfile className="text-[20px]" />
            <h3 className="text-[15px] font-semibold">View Profile</h3>
          </div>
        </div>
      </div>

      <div className="my-5">
        <div className="setting flex gap-4 items-center hover:bg-gray-200 p-1 rounded transition-all ease-in-out duration-2000 cursor-pointer">
          <div className="bg-gray-400 rounded-full text-center p-3 ">
            <FaKey className="text-[20px]" />
          </div>
          <h3 className="text-[16px] font-semibold">change password</h3>
        </div>
        <div className="logout flex gap-4 items-center hover:bg-gray-200 p-1 rounded transition-all ease-in-out duration-2000 cursor-pointer my-2">
          <div className="bg-gray-400 rounded-full text-center p-3 ">
            <FiLogOut className="text-[20px]" />
          </div>
          <h3 className="text-[16px] font-semibold"> Log out</h3>
        </div>
      </div>
    </>
  );
};

export default UserAccount;
