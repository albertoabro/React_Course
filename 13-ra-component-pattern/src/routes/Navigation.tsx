import { Suspense } from "react";
import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router"
import logo from '../02-component-patterns/assets/react.svg'
import { ShoppingPage } from "../02-component-patterns/pages/ShoppingPage";


export const Navigation = () => {
  return (
  <Suspense fallback={<span>Loading...</span> }>
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React Logo"/>
                    <ul>
                        <li>
                            <NavLink to='/' className="nav-active" > Shopping</NavLink>
                        </li>    
                        <li>
                            <NavLink to='/users' className="nav-active"> Users</NavLink>
                        </li>    
                        <li>
                            <NavLink to='/about'className="nav-active"> About</NavLink>
                        </li>    
                    </ul>
                </nav>
                
                <Routes>
                <Route path='/' element={ <ShoppingPage /> } />
                <Route path='users' element={ <h1>Users</h1> } />
                <Route path='about' element={ <h1>About</h1> } />

                <Route path='/*' element={ <Navigate to='/home' replace />} />
                </Routes>
            </div>
        </BrowserRouter></Suspense>
  )
}
