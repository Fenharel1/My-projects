import { useReducer } from "react";
import { loginReducer } from "../reducer/loginReducer";
import { authService } from "../services/authService";
import {
  clearStorage,
  getItemStorage,
  setItemStorage,
  setRememberme,
} from "../services/storageService";
import { useNavigate } from "react-router-dom";

const initialLogin = getItemStorage("user") || {
  isAuth: false,
  user: undefined,
};

export const useAuth = () => {
  const [loginState, dispatch] = useReducer(loginReducer, initialLogin);

  const navigate = useNavigate();

  const handleLogin = async (email, password, rememberme) => {
    const response = await authService.login(email, password);
    if (!response.errors) {
      console.log(response);
      const userImgUrl =
        "https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg";

      dispatch({
        type: "login",
        payload: { username: email, img: userImgUrl },
      });
      if (rememberme) setRememberme();
      setItemStorage("user", {
        isAuth: true,
        user: { username: email, img: userImgUrl },
      });
      navigate("/dashboard");
    } else {
      dispatch({ type: "error", payload: response.errors });
    }

    // try{
    //   const response = authService.login(email, password)
    //   console.log(response)
    //   const userImgUrl = "https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg"

    //   dispatch({type:'login',payload:{username: email, img: userImgUrl }})
    //   if(rememberme) setRememberme();
    //   setItemStorage('user',{isAuth: true, user: {username: email, img:userImgUrl}})
    //   navigate('/dashboard')

    // }catch (error){
    //   dispatch({type:'error',payload: error})
    // }
  };

  const handleLogout = () => {
    clearStorage();
    dispatch({ type: "logout" });
  };

  return {
    login: { ...loginState.user, isAuth: loginState.isAuth },
    errors: loginState.errors,
    handleLogin,
    handleLogout,
  };
};
