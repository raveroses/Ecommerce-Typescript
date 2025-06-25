import { NavLink } from "react-router-dom";
import { useContext } from "react";
import apiContext from "@/CustomHooks/createContext";
type List = {
  navbarsList: Record<string, string>[];
};

const Navbar = (element: List) => {
  const context = useContext(apiContext);
  if (!context) return;

  const { userSession, click, handleClickedSign } = context;

  const isUserLoggedIn = userSession?.user.email;

  const filters = element.navbarsList.filter((nav) => nav.list !== "Sign Up");

  const ListMap = isUserLoggedIn
    ? filters.map((nav, index) => {
        return (
          <li
            className={`md:text-black text-red-600 font-semibold md:font-medium cursor-pointer
           transition-all duration-200 hover:text-red-600 text-[14px] hover:text-[16px] md:hover:scale-105 ${
             click === nav.list
               ? "md:border-b-2 md:border-gray-600 "
               : "border-none "
           }`}
            onClick={() => handleClickedSign(nav.list)}
            key={index}
          >
            <NavLink to={nav.path}>{nav.list}</NavLink>
          </li>
        );
      })
    : element.navbarsList.map((nav, index) => {
        return (
          <li
            className={`md:text-black text-red-600 font-semibold md:font-medium cursor-pointer
           transition-all duration-200 hover:text-red-600 text-[14px] hover:text-[16px] md:hover:scale-105 ${
             click === nav.list
               ? "md:border-b-2 md:border-gray-600 "
               : "border-none "
           }`}
            onClick={() => handleClickedSign(nav.list)}
            key={index}
          >
            <NavLink to={nav.path}>{nav.list}</NavLink>
          </li>
        );
      });
  // nav.list.
  return <>{ListMap}</>;
};
export default Navbar;
