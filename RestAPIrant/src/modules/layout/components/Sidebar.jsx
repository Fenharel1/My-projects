import { useContext, useEffect } from "react";
import { BiSolidDashboard } from "react-icons/bi";
import { FaPlateWheat } from "react-icons/fa6";
import { BsPeopleFill } from "react-icons/bs";
import { RiFilePaper2Fill } from "react-icons/ri";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../auth/context/AuthContext";
import { IoLogOut } from "react-icons/io5";

const options = [
    {
      label: "Dashboard",
      icon: <BiSolidDashboard></BiSolidDashboard>,
      link: "",
    },
    {
      label: "By Ingredients",
      icon: <FaPlateWheat></FaPlateWheat>,
      link: "byingredients",
    },
    {
      label: "Following",
      icon: <BsPeopleFill></BsPeopleFill>,
      link: "following",
    },
    {
      label: "Your Recipes",
      icon: <RiFilePaper2Fill></RiFilePaper2Fill>,
      link: "recipes",
    },
  ];

export const Sidebar = () => {
  const { handleLogout, login } = useContext(AuthContext);
  const navigate = useNavigate();


  return (
    <aside className=" rounded-[0px_40px_40px_0px] h-screen p-8 relative w-fit left-0 top-0
      bg-[linear-gradient(0deg,#E6ACF2,#E6ACF2_40%,#FDD6BB)] 
    ">
      <div className="flex flex-col items-center justify-between h-full w-[15rem]">
        <div className="flex flex-col items-center gap-y-8">
          <p className="text-[#7F7F7F] font-black text-4xl">RestAPIrant</p>
          <div className="w-full h-1 bg-white bg-opacity-20 my-[-1rem]"></div>
          <img
            className="rounded-full h-[9rem] w-[9rem] object-cover"
            src={login.img}
            alt="photo profile"
          />
          <div className="text-center text-black text-base">
            <p className="font-semibold capitalize">Hello {login.username}</p>
            <p className="">It's 20 minutes until your next food</p>
          </div>
          <div className="w-full h-1 bg-white bg-opacity-20 my-[-1rem]"></div>
          <div className="space-y-8 w-full">
            {options.map((op, idx) => {
              return (
                  <NavLink key={idx}
                  end
                  className={({isActive})=>[
                    isActive?"!bg-white !text-black" :"",
                    "flex flex-row justify-start items-center text-lg gap-x-2 w-full hover:bg-white rounded-[0.5rem] py-3 px-3 text-white hover:text-black"
                  ].join(" ")}
                  to={op.link}
                  >
                    <span className="text-2xl">{op.icon}</span> 
                    {op.label}
                  </NavLink>
              );
            })}
          </div>
        </div>
        <button onClick={handleLogout} className="rounded-[1rem] text-black bg-white w-full text-lg py-2 flex items-center justify-center gap-x-2 hover:bg-opacity-50 ">
          <IoLogOut className="text-2xl"></IoLogOut>
          <p>Logout</p>
        </button>
      </div>
    </aside>
  );
};
