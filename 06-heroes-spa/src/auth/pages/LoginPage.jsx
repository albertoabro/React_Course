import { useContext } from "react";
import {useNavigate } from "react-router"
import { AuthContext } from "../context/AuthContext";


export const LoginPage = () => {

    const {login} = useContext(AuthContext);
    const navigate = useNavigate();

    const onLogin = () => {

      /* Get lastPath before logout
        const lastPath = localStorage.getItem('lastPath') || '/'; 
      */
      login('Alberto Abad');

      navigate('/', {replace: true}); //Modify '/' to lastPath
    }

    return (
      <div className="container mt-5">
        <h1>Login</h1>
        <hr />

        <button 
          className="btn btn-primary"
          onClick={ onLogin }
        > 
          Login </button>
      </div>
    )
  }
  