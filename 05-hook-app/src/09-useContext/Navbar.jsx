import { NavLink } from "react-router"

export const Navbar = () => {
    return (
      <>
        <NavLink to="/" className={ ({isActive}) => `a ${ isActive ? 'font-bold' : '' }`}>Home</NavLink>
        <NavLink to="/about" className={ ({isActive}) => `a ${ isActive ? 'font-bold' : '' }`}>About</NavLink>
        <NavLink to="/login" className={ ({isActive}) => `a ${ isActive ? 'font-bold' : '' }`}>Login</NavLink>
      </>
    )
  }