import { Navigate, Route, Routes } from "react-router"
import { LoginPage } from "../auth/pages/LoginPage";
import { CalendarPage } from "../calendar/pages/CalendarPage";
import { useAuthStore } from "../auth/hooks/useAuthStore";
import { useEffect } from "react";

export const AppRouter = () => {

    const { status, checkAuthToken } = useAuthStore();

    useEffect(() => {
        checkAuthToken();
    }, []);

  return (
    <Routes>
        {
            (status === 'not-authenticated')
                ? (
                    <>
                      <Route path="/auth/*" element={ <LoginPage /> } />
                      <Route path="/*" element={ <Navigate to="/auth/login" /> } />
                    </>
                  )
                : (
                    <>
                      <Route path="/" element={ <CalendarPage /> } />
                      <Route path="/*" element={ <Navigate to="/" /> } />
                    </>
                  )
        }
    </Routes>
  )
}
