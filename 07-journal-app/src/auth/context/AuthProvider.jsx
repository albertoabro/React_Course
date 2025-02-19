import PropTypes from "prop-types";
import { AuthContext } from "./AuthContext"


export const AuthProvider = ({children}) => {
  return (
    <AuthContext.Provider value={{}} >
        {children}
    </AuthContext.Provider>
  );
}

