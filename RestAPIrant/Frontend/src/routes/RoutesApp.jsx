import { useContext } from "react";
import { LoginPage } from "../auth/pages/LoginPage";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";
import { RoutesDashboard } from "../modules/routes/RoutesDashboard";
import { AuthLayout } from "../auth/pages/authLayout";
import { RegisterPage } from "../auth/pages/RegisterPage";

export const RoutesApp = () => {
  const { login } = useContext(AuthContext);
  return (
    <>
      <Routes>
        {!login.isAuth ? (
          <>
            <Route path="/auth" element={<AuthLayout></AuthLayout>}>
              <Route path='register' element={ <RegisterPage></RegisterPage> } ></Route>
              <Route path='login' element={<LoginPage></LoginPage>} ></Route>
              <Route path='' element={<Navigate to="/auth/login"></Navigate>} ></Route>
              <Route path='*' element={<Navigate to="/auth"></Navigate>} ></Route>
            </Route>
            <Route path="*" element={<Navigate to="/auth"></Navigate>}></Route>
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
