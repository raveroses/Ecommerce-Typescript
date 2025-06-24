import apiContext from "@/CustomHooks/createContext";
import { useContext, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaKey } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";
import { FaCamera } from "react-icons/fa";
import { IoReturnUpBackOutline } from "react-icons/io5";
const UserAccount = () => {
  const [profile, setProfile] = useState(false);
  const viewProfile = () => {
    setProfile((prev) => !prev);
  };
  const context = useContext(apiContext);
  if (!context) return;

  const {
    userSession,
    handleLogOut,
    handlePasswordRequest,
    handleProfileImageChange,
    inputRef,
    triggerFileSelect,
    imageUrl,
  } = context;
  console.log(userSession);
  if (!userSession) return;

  const userImage = userSession?.user.user_metadata.picture;
  const userEmail = userSession?.user.user_metadata.email;
  const UserNameFinder = userEmail.indexOf("@");
  const userName = userEmail.slice(0, UserNameFinder);

  return (
    <section>
      <div className={`${profile ? "hidden" : "block"}`}>
        <div>
          <div className="bg-gray-200 shadow-xl rounded p-3 ">
            <div className="flex items-center gap-3">
              <img
                src={userImage || imageUrl.urls || "images/avatar2.jpg"}
                alt="peofile-image"
                className="rounded-full w-[50px] object-cover object-center w-[50px] h-[50px]"
              />

              <div className="text-[16px] font-semibold">
                {userEmail || "John Doe"}
              </div>
            </div>
            <hr className="mt-2 font-bold" />

            <div
              className="profile flex items-center gap-2 justify-center bg-gray-400 my-2 py-1 rounded cursor-pointer"
              onClick={viewProfile}
            >
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
            <h3
              className="text-[16px] font-semibold"
              onClick={handlePasswordRequest}
            >
              change password
            </h3>
          </div>
          <div className="logout flex gap-4 items-center hover:bg-gray-200 p-1 rounded transition-all ease-in-out duration-2000 cursor-pointer my-2">
            <div className="bg-gray-400 rounded-full text-center p-3 ">
              <FiLogOut className="text-[20px]" />
            </div>
            <h3 className="text-[16px] font-semibold" onClick={handleLogOut}>
              {" "}
              Log out
            </h3>
          </div>
        </div>
      </div>
      <div className={` ${profile ? "block" : "hidden"}`}>
        <IoReturnUpBackOutline
          className="text-[25px] inline-block font-bold text-left"
          onClick={viewProfile}
        />

        <div className="relative flex justify-center">
          <div className="">
            <img
              src={imageUrl.urls || userImage || "images/avatar2.jpg"}
              alt="profile-image"
              className=" rounded-full md:w-[80px] w-40 h-[160px] object-cover object-center border-4 border-gray-300 "
            />
          </div>
          <input
            type="file"
            ref={inputRef}
            accept="image/*"
            onChange={handleProfileImageChange}
            hidden
          />
          <button
            onClick={triggerFileSelect}
            className="text-red-500 absolute bottom-[2px] right-[150px]"
          >
            <FaCamera />
          </button>
        </div>
        <div className="userDetailDiv my-[10px] flex text-center gap-[4px] flex-col pb-[30px]">
          <div className="name">
            <h1 className="font-semibold">Profile Username</h1>
            <p className="text-20px">{userName}</p>
          </div>
          <div className="email">
            <h1 className="font-semibold">Email</h1>
            <p className="text-20px">{userEmail}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserAccount;
