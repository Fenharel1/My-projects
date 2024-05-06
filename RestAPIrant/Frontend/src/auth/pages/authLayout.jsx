import React from 'react'
import { FormLogin } from "../components/LoginForm";
import { Outlet, Route, Routes } from 'react-router-dom';
import { LoginPage } from './LoginPage';
import { RegisterPage } from './RegisterPage';

export const AuthLayout = () => {
  return (
    <div className="h-screen w-screen bg-[#FFF1E4] flex items-center justify-center overflow-auto py-5">
      <div className="flex rounded-[15px] overdlow-auto md:overflow-hidden shadow-[4px_4px_140px_rgba(0,0,0,0.25)] h-screen w-screen  md:h-fit md:w-auto ">
        <div className="flex items-center justify-center bg-[linear-gradient(10deg,#FFDEBF,#E9BBFF)]">
          <h1 className="text-6xl text-center px-[12rem]">
            Welcome
            <br></br>
            to
            <br></br>
            <span className="font-bold text-7xl">RestAPIrant</span>
          </h1>
        </div>
        <div className="bg-white max-w-[33rem] py-[4rem] px-[5rem] flex flex-col justify-between space-y-12 shadow-[4px_4px_140px_rgba(0,0,0,0.25)] min-h-[47rem] max-h-[95vh] overflow-y-auto">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}
