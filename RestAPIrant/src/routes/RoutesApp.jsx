import { useContext } from "react";
import { LoginPage } from "../auth/pages/LoginPage";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";
import { Dashboard } from "../modules/pages/Dashboard";
import { RoutesDashboard } from "../modules/routes/RoutesDashboard";

export const RoutesApp = () => {
  const { login } = useContext(AuthContext);
  return (
    <>
      <Routes>
        {!login.isAuth ? (
          <>
            <Route path="/login" element={<LoginPage></LoginPage>}></Route>
            <Route path="*" element={<Navigate to="/login"></Navigate>}></Route>
          </>
        ) : (
          <>
            <Route path="/dashboard/*" element={
              <RoutesDashboard></RoutesDashboard>
            }></Route>
  
            <Route
              path="*"
              element={<Navigate to="/dashboard"></Navigate>}
            ></Route>
          </>
        )}
      </Routes>
    </>
  );
};
