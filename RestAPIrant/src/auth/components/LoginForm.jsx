import { useState } from "react";
import { BsCheck } from 'react-icons/bs'

const initForm = {
  username: '',
  password: '',
  rememberme: false
};

export const FormLogin = () => {
  const [formLogin, setFormLogin] = useState(initForm);
  const { username, password, rememberme } = formLogin;

  const InputTextStyle = "w-full h-[53px] border-[2px] border-[#878787] outline-none rounded-[5px] px-4 py-3";

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("iniciando login", formLogin);
  };

  const handleChange = ({ target: { value, name } }) => {
    setFormLogin({ ...formLogin, [name]: value });
  };
  return (
    <form onSubmit={(e) => handleLogin(e)} className="space-y-9">
      <div>
        <label className="font-medium text-lg block mb-2" htmlFor="username">
          User Name
        </label>
        <input
          onChange={(e) => handleChange(e)}
          value={username}
          type="text"
          name="username"
          className={InputTextStyle}
        />
      </div>
      <div>
        <label className="font-medium text-lg block mb-2" htmlFor="password">
          Password
        </label>
        <input
          onChange={(e) => handleChange(e)}
          value={password}
          type="password"
          name="password"
          className={InputTextStyle}
        />
      </div>
      <div className="flex justify-between">
        <div className="space-x-3 flex items-center justify-between flex-row">
          <div 
            className="w-4 h-4 rounded-[5px] outline outline-[2px] outline-[#EFC7E5]"
            style={{backgroundColor: rememberme?'#EFC7E5':''}}
            onClick={e=>handleChange({target:{value:!rememberme,name:'rememberme'}})}
          >
            {!rememberme || <BsCheck className="text-white"></BsCheck> }
          </div>
          <label htmlFor="rememberme">Remember me</label>
        </div>
        <div>
          <p className="text-underline text-[#8D8D8D] cursor-pointer">
            Forget password?
          </p>
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="w-full py-3 rounded-[5px] bg-[#FBD8C8] hover:bg-[#FFBFA1] hover:text-white text-lg font-semibold"
        >
          Log In
        </button>
      </div>
    </form>
  );
};
