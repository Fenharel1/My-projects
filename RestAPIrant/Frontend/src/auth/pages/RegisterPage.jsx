import { NavLink, useNavigate  } from "react-router-dom";
import { RegisterForm } from "../components/RegisterForm";
import { PasswordForm } from "../components/PasswordForm";
import { useState } from "react";
import { authService } from "../services/authService";
import toast from "react-hot-toast";

export const RegisterPage = () => {

  const [formRegister,setFormRegister] = useState(null);

  const [errors, setErrors] = useState({})

  const [registrationStep, setRegistrationStep] = useState(0);

  const navigate = useNavigate();

  const handleFirstStep = async (e,dataform) => {
    e.preventDefault();
    const response = await authService.validUserData(dataform);
    console.log(response);
    if(response.errors){
      if(errors.status) toast.error(errors.description)
      else setErrors(response.errors);
    }else{
      setFormRegister(dataform);
      setRegistrationStep(1);
    }
  }

  const handleBack = () => {
    setRegistrationStep(0);
  }
  const handleSubmit = (passform) => {
    const response = authService.register({...passform, ...formRegister});
    toast.success("You've been registered successfully!");
    navigate("/auth/login");  
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
          (<RegisterForm errors={errors} initData={formRegister ?? undefined} onContinue={handleFirstStep}></RegisterForm>)
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
