import { useReducer } from "react"
import { loginReducer } from "../reducer/loginReducer"
import { login } from "../services/authService";
import { clearStorage, getItemStorage, setItemStorage, setRememberme } from "../services/storageService";
import { useNavigate } from "react-router-dom";


const initialLogin = getItemStorage('user') || {
  isAuth: false,
  user: undefined,
};

export const useAuth = () => {
  const [loginState, dispatch ] = useReducer(loginReducer, initialLogin);

  const navigate = useNavigate();

  const handleLogin = (username, password, rememberme) => {
    console.log(username, password)
    try{
      login(username, password)
      
      // get the user photo from the database
      const userImgUrl = "https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg"

      dispatch({type:'login',payload:{username, img: userImgUrl }})
      if(rememberme) setRememberme();
      setItemStorage('user',{isAuth: true, user: {username, img:userImgUrl}})
      navigate('/dashboard')
    }catch (error){
      dispatch({type:'error',payload: error})
    }
  }

  const handleLogout = () => {
    clearStorage();
    dispatch({type:'logout'})
  }

  return {
    login: {...loginState.user, isAuth: loginState.isAuth},
    errors: loginState.errors,
    handleLogin,
    handleLogout
  }
}