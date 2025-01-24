import { Navigate, Route, Routes } from "react-router";
import { useDispatch } from "react-redux";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { JournalRoutes } from "../journal/routes/JournalRoutes";
import { CheckingAuth } from "../components/CheckingAuth";
import { useCheckAuth } from "../hooks/useCheckAuth";
import { loadUserNotes } from "../helpers/loadingNote";

export const AppRouter = () => {
  const { status, uid } = useCheckAuth();
  const dispatch = useDispatch();

  if(status === "checking") return <CheckingAuth />;

  if( uid != null ) loadUserNotes(dispatch); 

  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path="/*" element={<JournalRoutes />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}

      <Route path="/*" element={<Navigate to="/auth/login" />} />
      <Route />
    </Routes>
  );
};
