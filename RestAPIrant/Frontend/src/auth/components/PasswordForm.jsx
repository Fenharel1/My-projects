import { useState } from "react";

const initForm = {
  password: "",
  confirmPassword: "",
};

export const PasswordForm = ({onBack, onSubmit} ) => {
  const [formPassword, setFormPassword] = useState(initForm);

  const labels = {
    password: 'Password',
    confirmPassword: 'Confirm password',
  }

  const InputTextStyle =
    "w-full h-[53px] border-[2px] border-[#E7E7E7] outline-none rounded-[5px] px-4 py-3";

  const handleChange = ({ target: { value, name } }) => {
    setFormPassword({ ...formPassword, [name]: value });
  };

  return (
    <form className="space-y-5">
      {Object.keys(formPassword ?? {}).map((fieldName, idx) => {
        return (
          <div key={idx}>
            <label className="font-medium text-lg block mb-2">
              {labels[fieldName]}
            </label>
            <input
              onChange={(e) => handleChange(e)}
              type="text"
              value={formPassword[fieldName]}
              name={fieldName}
              className={InputTextStyle}
            />
          </div>
        );
      })}
      <div className="mt-8 flex flex-row flex-nowrap gap-x-2">
        <button
          type="button"
          className="w-1/2 px-5 py-3 rounded-[5px] bg-[#FBD8C8] hover:bg-[#FFBFA1] hover:text-white text-lg font-semibold"
          onClick={onBack}
        >
          Back
        </button>
        <button
          type="submit"
          className="w-1/2 px-5 py-3 rounded-[5px] bg-[#FBD8C8] hover:bg-[#FFBFA1] hover:text-white text-lg font-semibold"
          onClick={(e)=>onSubmit(e,formPassword)}
        >
          Register
        </button>
      </div>
    </form>
  );
};

