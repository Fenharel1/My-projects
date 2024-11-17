import { useState } from "react";

const initForm = {
  firstname: "",
  lastname: "",
  email: "",
  alias: "",
};

export const RegisterForm = ({onContinue, initData = initForm, errors = null}) => {
  const [formRegister, setFormRegister] = useState(initData);

  const labels = {
    firstname: 'First name',
    lastname: 'Last name',
    email: 'Email',
    alias: 'Alias'
  }

  const { firstname, lastname, email, alias } = formRegister;
  const InputTextStyle =
    "w-full h-[53px] border-[2px] border-[#E7E7E7] outline-none rounded-[5px] px-4 py-3";

  const handleChange = ({ target: { value, name } }) => {
    setFormRegister({ ...formRegister, [name]: value });
  };

  return (
    <form className="space-y-5">
      {Object.keys(formRegister ?? {}).map((fieldName, idx) => {
        return (
          <div key={idx}>
            <label className="font-medium text-lg block mb-2">
              {labels[fieldName]}
            </label>
            <input
              onChange={(e) => handleChange(e)}
              type="text"
              value={formRegister[fieldName]}
              name={fieldName}
              className={InputTextStyle}
            />
            <p className="text-red-400 my-1">{ !errors || errors[fieldName] }</p>
          </div>
        );
      })}
      <div className="mt-8">
        <button
          type="submit"
          className="w-1/2 px-5 py-3 rounded-[5px] bg-[#FBD8C8] hover:bg-[#FFBFA1] hover:text-white text-lg font-semibold"
          onClick={(e) => onContinue(e,formRegister)}
        >
          Continue
        </button>
      </div>
    </form>
  );
};
