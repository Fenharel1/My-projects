import { useForm } from "react-hook-form"

export const PasswordForm = ({onBack, onSubmit}) => {

  const {register, handleSubmit, formState: {errors}, watch } = useForm();

  const InputTextStyle =
    "w-full h-[53px] border-[2px] border-[#E7E7E7] outline-none rounded-[5px] px-4 py-3";

  return (
    <form onSubmit={handleSubmit((data)=>{onSubmit(data)})} className="space-y-5">
      <div>
        <label className="font-medium text-lg block mb-2">
          Password:
        </label>
        <input
          type="password"
          className={InputTextStyle}
          {...register("password",{
            required: {value: true, message: "Password is required"},
            minLength: {value: 6, message: "Password should have at least 6 characters"},
            maxLength: {value: 12, message: "Password should have at maximum 12 characters"},
            validate: (val) => {
              if( ! /[A-Z]/.test(val) ) return "Password should contain at least one capital case letter";
              if( ! /[a-z]/.test(val) ) return "Password should contain at least one lower case letter";
              if( ! /\d/.test(val) ) return "Password should contain at least one number";
              return true;
            }
          })}
        />
        { errors.password && <span className="text-error">{errors.password.message}</span> }
      </div>
      <div>
        <label className="font-medium text-lg block mb-2">
          Confirm Password:
        </label>
        <input
          type="password"
          className={InputTextStyle}
          {...register("confirmPassword",{
            required: {value: true, message: "Confirm your password"},
            validate: val => val === watch("password") || "Passwords don't match"
          })}
        />
        { errors.confirmPassword && <span className="text-error">{errors.confirmPassword.message}</span> }
      </div>

      <div className="mt-8 flex flex-row flex-nowrap gap-x-2">
        <button
          type="button"
          className="w-1/2 px-5 py-3 rounded-[5px] bg-[#FBD8C8] hover:bg-[#FFBFA1] hover:text-white text-lg font-semibold"
          onClick={onBack}
        >
          Back
        </button>
        <button
          disabled={Object.keys(errors).length != 0}
          type="submit"
          className="w-1/2 px-5 py-3 rounded-[5px] bg-[#FBD8C8] hover:bg-[#FFBFA1] hover:text-white text-lg font-semibold disabled:opacity-50"
        >
          Register
        </button>
      </div>
    </form>
  )
}