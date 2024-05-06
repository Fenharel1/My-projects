import { NavLink  } from "react-router-dom";
import { RegisterForm } from "../components/RegisterForm";
import { PasswordForm } from "../components/PasswordForm";
import { useState } from "react";
import { register } from "../services/authService"

export const RegisterPage = () => {

  const [formRegister,setFormRegister] = useState(null);

  const [registrationStep, setRegistrationStep] = useState(0);

  const handleFirstStep = (e,dataform) => {
    e.preventDefault();
    setFormRegister(dataform);
    setRegistrationStep(1);
  }

  const handleBack = () => {
    setRegistrationStep(0);
  }
  const handleSubmit = (e,passform) => {
    e.preventDefault();
    console.log({...passform, ...formRegister})
    register({...passform, ...formRegister});
  }

  return (
    <>
      <div>
        <h2 className="text-4xl text-center font-semibold">Register</h2>
        <p className="text-base font-light my-5 ">
          You want to join us? Here complete the fields with the required
          information for create a new account!
        </p>
        { registrationStep == 0 ? 
          (<RegisterForm initData={formRegister ?? undefined} onContinue={handleFirstStep}></RegisterForm>)
          :
          (<PasswordForm onBack={handleBack} onSubmit={handleSubmit} ></PasswordForm>)
        }
      </div>
      <div className="text-right">
        <span className="mr-2">Already have an account?</span>
        <span
          className="font-bold cursor-pointer text-[#FFB58C]"
        >
          <NavLink to="/auth/login">Log In!</NavLink>
        </span>
      </div>
    </>
  );
};
