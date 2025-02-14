import { Navigate, NavLink, Route, Routes } from "react-router";
import LazyPage1 from "../pages/LazyPage1";
import LazyPage3 from "../pages/LazyPage3";
import LazyPage2 from "../pages/LazyPage2";

export const LazyLayout = () => {
  return (
    <div>
      <h1>LazyLayout Page</h1>


      <ul>
        <li>
          <NavLink to="/lazyLayout/lazy1"> Lazy 1 </NavLink>
        </li>
        <li>
          <NavLink to="/lazyLayout/lazy2"> Lazy 2 </NavLink>
        </li>
        <li>
          <NavLink to="/lazyLayout/lazy3"> Lazy 3 </NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="lazy1" element={ <LazyPage1 /> }/>
        <Route path="lazy2" element={ <LazyPage2 /> }/>
        <Route path="lazy3" element={ <LazyPage3 /> }/>

        <Route path="*" element={ <Navigate to="/lazyLayout/lazy1" replace /> }/>
      </Routes>
    </div>
  )
}

export default LazyLayout;
