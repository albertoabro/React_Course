import { useContext } from "react"
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../auth/context/AuthContext"

export const PrivateRoute = ({children}) => {

   const{logged} = useContext(AuthContext);
   const {pathname, search} = useLocation();

   /* Record the last path before logout
   const lastPath = pathname * search;
   localStorage.setItem('lastPath', lastPath);

   Should create a memo or useEffect for memorize this path
  */
  return (logged)
    ? children
    : <Navigate to={"/login"} />
}

