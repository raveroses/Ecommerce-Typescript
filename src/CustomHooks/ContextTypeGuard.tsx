import { useContext } from "react";
import MyContext from "./MyContext";

const ContextTypeGuard = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyContext.Provider");
  }

  return context;
};
export default ContextTypeGuard;
