import { LoginPage } from "@/auth/pages/LoginPage"
import { HeroesRoutes } from "@/heroes/routes/HeroesRoutes"
import { Route, Routes } from "react-router"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"



export const AppRouter = () => {
  return (

      <Routes>

          <Route path="/login" element={
            <PublicRoute >
              <LoginPage />
              {/* For list distinct publics routes
                <Routes>
                  <Route path="/*" element={}/>
                  <Route path="/*" element={}/>
                  <Route path="/*" element={}/>
                  <Route path="/*" element={}/>
                </Routes>
              */}
            </PublicRoute>
          } />

          <Route path="/*" element={
            <PrivateRoute> 
              <HeroesRoutes /> 
            </PrivateRoute>
          } />
      </Routes>

  )
}
