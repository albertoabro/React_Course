import { useAuthStore } from "../auth/hooks/useAuthStore";
import { LanguageSwitcher } from "./LanguageSwitcher"


export const Navbar = ({ messages }) => {

    const { startLogout, user } = useAuthStore();

    const handleClickLogout = (event) => {
        event.preventDefault();
        startLogout ();
    };

  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4 ">
        <span className="navbar-brand">
            <i className="fas fa-calendar-alt"></i>
            &nbsp;
            {user.name}
        </span>

        <div className="d-flex">
            <LanguageSwitcher isNavbar={true}/>
        

            <button 
                className="btn btn-outline-danger"
                onClick={ handleClickLogout }
            >
                <i className="fas fa-sign-out-alt ms-2">
                    <span> { messages.logout } </span>
                </i>    
            </button>
        </div>      
    </div>
  )
}
