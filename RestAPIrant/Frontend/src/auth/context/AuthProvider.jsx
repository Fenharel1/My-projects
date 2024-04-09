import { useAuth } from "../hooks/useAuth"
import { AuthContext } from "./AuthContext"

export const AuthProvider = ({children}) => {

  const {login, handleLogin, handleLogout, errors} = useAuth();
  
  return (
    <AuthContext.Provider 
      value={{
        login, handleLogin, handleLogout, errors
      }}>
      {children}
    </AuthContext.Provider>       
  )
}