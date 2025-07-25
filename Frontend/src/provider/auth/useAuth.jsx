import { useContext } from "react";
import { AuthContext } from "./authProvider";

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
