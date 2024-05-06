import React from "react";
import { FormLogin } from "../components/LoginForm";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {

  const navigate = useNavigate();

  const goToRegister = () => {
    navigate("/auth/register");
  }

  return (
    <>
      <div>
        <h2 className="text-4xl text-center font-semibold">Login</h2>
        <p className="text-base font-light my-10 ">
          Are you hungry? No more, login to your account and start to discover
          delicious recipes around the world!
        </p>
        <FormLogin></FormLogin>
      </div>
      <div className="text-right">
        <span className="mr-2">
          Don't have an account?
        </span>
        <span
          className="font-bold cursor-pointer text-[#FFB58C]"
          onClick={(e) => goToRegister()}
        >
          Register Now!
        </span>
      </div>
    </>
  );
};