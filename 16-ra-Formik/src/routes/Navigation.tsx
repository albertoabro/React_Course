import { Suspense } from "react";
import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router"
import logo from '../react.svg'
import { RegisterPage } from "../03-forms/pages/RegisterPage";
import { FormikBasicPage } from "../03-forms/pages/FormikBasicPage";
import { FormikYupPage } from "../03-forms/pages/FormikYupPage";
import { FormikComponents } from "../03-forms/pages/FormikComponents";
import { FormikAbstraction } from "../03-forms/pages/FormikAbstraction";


export const Navigation = () => {
  return (
  <Suspense fallback={<span>Loading...</span> }>
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React Logo"/>
                    <ul>
                        <li>
                            <NavLink to='/register' className={({isActive}) => isActive ? "nav-active" : ""} > Register Page</NavLink>
                        </li>    
                        <li>
                            <NavLink to='/formik-basic' className={({isActive}) => isActive ? "nav-active" : ""}> Formik Basic</NavLink>
                        </li>    
                        <li>
                            <NavLink to='/formik-yup'className={({isActive}) => isActive ? "nav-active" : ""}> Formik Yup</NavLink>
                        </li>    
                        <li>
                            <NavLink to='/formik-component'className={({isActive}) => isActive ? "nav-active" : ""}> Formik Components</NavLink>
                        </li>    
                        <li>
                            <NavLink to='/formik-abstraction'className={({isActive}) => isActive ? "nav-active" : ""}> Formik Abstraction</NavLink>
                        </li>    
                    </ul>
                </nav>
                
                <Routes>
                <Route path='/register' element={ <RegisterPage /> } />
                <Route path='/formik-basic' element={ <FormikBasicPage /> } />
                <Route path='/formik-yup' element={ <FormikYupPage />} />
                <Route path='/formik-component' element={ <FormikComponents />} />
                <Route path='/formik-abstraction' element={ <FormikAbstraction />} />

                <Route path='/*' element={ <Navigate to='/register' replace />} />
                </Routes>
            </div>
        </BrowserRouter></Suspense>
  )
}
