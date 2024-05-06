import axios from "axios";

const login = async (username, password) => {
  response = await axios.post("http://localhost:5001/api/auth/login",{email: username, password});

  if(!response.data.errors){
    return true;
  }
  else{
    const errors = {username: '', password: ''}
    throw errors
  }
}

const register = (registerForm) => {
  response = axios.post("http://localhost:5001/api/auth/register",registerForm)
    .then((res)=>console.log(res));
}

export {login,register}