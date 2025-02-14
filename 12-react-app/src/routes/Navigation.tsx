import { Suspense } from "react";
import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router"
import { routes } from './routes';
import logo from '../assets/react.svg'


export const Navigation = () => {
  return (
  <Suspense fallback={<span>Loading...</span> }>
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React Logo"/>
                    <ul>
                        {
                            routes.map( route => (
                                <li key={route.path}>
                                    <NavLink 
                                        to={ route.to}
                                        className={ ({ isActive }) => isActive ? 'nav-active' : '' }
                                    >
                                        {route.name}
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
                
                <Routes>
                {
                    routes.map( ({ path, Component}) => (

                        <Route key={path} path={path} element={ <Component /> }/>
                    ))
                }

                <Route path='/*' element={ <Navigate to={ routes[0].to } replace />} />
                </Routes>
            </div>
        </BrowserRouter></Suspense>
  )
}
