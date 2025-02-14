import { Suspense } from "react";
import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router"
import logo from '../assets/react.svg'


export const Navigation = () => {
  return (
  <Suspense fallback={<span>Loading...</span> }>
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React Logo"/>
                    <ul>
                        <li>
                            <NavLink to='/home'> Home</NavLink>
                        </li>    
                        <li>
                            <NavLink to='/users'> Users</NavLink>
                        </li>    
                        <li>
                            <NavLink to='/about'> About</NavLink>
                        </li>    
                    </ul>
                </nav>
                
                <Routes>
                <Route path='home' element={ <h1>Home</h1> } />
                <Route path='users' element={ <h1>Users</h1> } />
                <Route path='about' element={ <h1>About</h1> } />

                <Route path='/*' element={ <Navigate to='/home' replace />} />
                </Routes>
            </div>
        </BrowserRouter></Suspense>
  )
}
