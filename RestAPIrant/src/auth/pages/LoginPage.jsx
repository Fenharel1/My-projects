import React from "react";
import { FormLogin } from "../components/LoginForm";

export const LoginPage = () => {
  return (
    <div className="h-screen w-screen bg-[#FFF1E4] flex items-center justify-center">
      <div className="flex flex-row rounded-[15px] overflow-hidden shadow-[4px_4px_140px_rgba(0,0,0,0.25)]">
        <div className="flex items-center justify-center bg-[linear-gradient(10deg,#FFDEBF,#E9BBFF)]">
          <h1 className="text-6xl text-center px-[12rem]">
            Welcome
            <br></br>
            to
            <br></br>
            <span className="font-bold text-7xl">RestAPIrant</span>
          </h1>
        </div>
        <div className="bg-white max-w-[33rem] py-[4rem] px-[5rem] flex flex-col justify-between space-y-12 shadow-[4px_4px_140px_rgba(0,0,0,0.25)]">
          <div>
            <h2 className="text-4xl text-center font-semibold">Login</h2>
            <p className="text-base font-light my-10 ">
              Are you hungry? No more, login to your account and start to
              discover delicious recipes around the world!
            </p>
            <FormLogin></FormLogin>
          </div>
          <div className="text-right">
            Don't have an account? <span className="font-bold cursor-pointer text-[#FFB58C]" onClick={e=>alert('Not yet implemented')} >Register Now!</span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};