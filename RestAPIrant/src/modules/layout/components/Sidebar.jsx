import { useContext, useEffect, useState } from "react";
import { BiSolidDashboard } from "react-icons/bi";
import { FaPlateWheat } from "react-icons/fa6";
import { BsPeopleFill } from "react-icons/bs";
import { RiFilePaper2Fill } from "react-icons/ri";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../auth/context/AuthContext";
import { IoLogOut } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";

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
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div>
      <aside
        className="rounded-[0px_40px_40px_0px] h-screen relative w-fit left-0 top-0
      bg-[linear-gradient(0deg,#E6ACF2,#E6ACF2_40%,#FDD6BB)] duration-300 [&>*]:duration-300
      overflow-y-auto overflow-x-clip scrollbar-thumb-rounded-full scrollbar-thumb-[#78787863] scrollbar-track-transparent scrollbar-corner-transparent scrollbar-thin !pb-0
    "
        style={{
          padding: showSidebar ? "2rem" : "0.5rem",
          width: showSidebar ? "19rem" : "fit-content",
          direction: "rtl",
        }}
      >
        <div
          className="flex flex-col items-center justify-between h-full gap-y-8"
          style={{
            width: showSidebar ? "15rem" : "4rem",
            paddingTop: showSidebar ? "0px" : "1rem",
            direction: "ltr",
          }}
        >
          <div
            className="flex flex-col gap-y-8 "
            style={{
              alignItems: showSidebar ? "center" : "flex-start",
              justifyContent: showSidebar ? "flex-start" : "space-between",
              height: showSidebar ? "auto" : "100%",
            }}
          >
            {/* logo app name */}
            <div
              className={`text-[#7F7F7F] font-black  w-full ${
                showSidebar ? "text-3xl" : "text-4xl text-center"
              } `}
            >
              {showSidebar ? "RestAPIrant" : "R"}

              {showSidebar || (
                <img
                  className="rounded-full object-cover duration-300 w-[3.5rem] h-[3.5rem] mt-5"
                  src={login.img}
                  alt="photo profile"
                />
              )}
            </div>

            {/* button toggle menu */}
            {!showSidebar || (
              <div
                className="h-9 w-12 bg-[#D2BFAE] absolute right-0 text-white flex items-center justify-center text-3xl  cursor-pointer [&_svg]:z-20"
                onClick={toggleSidebar}
              >
                <div
                  className="absolute top-0 -left-5 w-0 h-0 border-transparent"
                  style={{
                    borderWidth: "18px 20px 18px 0px",
                    borderRightColor: "#D2BFAE",
                  }}
                ></div>
                <FiMenu></FiMenu>
              </div>
            )}

            {/* separator */}
            {!showSidebar || (
              <div className="h-1 bg-white bg-opacity-20 my-[-1rem] w-full"></div>
            )}

            {/* profile img */}
            {!showSidebar || (
              <img
                className="rounded-full  object-cover duration-300 w-[9rem] h-[9rem]"
                src={login.img}
                alt="photo profile"
              />
            )}

            <div
              style={{ display: showSidebar ? "block" : "none" }}
              className="text-center text-black text-base bg-[#ECECEC] bg-opacity-35 rounded-md p-1"
            >
              <p className="font-semibold capitalize">Hello {login.username}</p>
              <p className="">It's 20 minutes until your next food</p>
            </div>

            {/* separator */}
            {!showSidebar || (
              <div className="h-1 bg-white bg-opacity-20 my-[-1rem] w-full"></div>
            )}

            {/* menu options */}
            <div className=" w-full flex flex-col gap-y-8 items-center">
              {showSidebar || (
                <div
                  className="h-12 w-12 border-[2px] hover:bg-white hover:text-black border-white text-white flex items-center justify-center text-3xl cursor-pointer rounded-[10px]"
                  onClick={toggleSidebar}
                >
                  <FiMenu></FiMenu>
                </div>
              )}
              {options.map((op, idx) => {
                return (
                  <NavLink
                    key={idx}
                    end
                    style={{ width: showSidebar ? "100%" : "fit-content" }}
                    className={({ isActive }) =>
                      [
                        isActive ? "!bg-white !text-black" : "",
                        "flex flex-row justify-start items-center text-lg gap-x-2 hover:bg-white rounded-[0.5rem] py-3 px-3 text-white hover:text-black",
                      ].join(" ")
                    }
                    to={op.link}
                  >
                    <span className="text-2xl">{op.icon}</span>
                    {!showSidebar || op.label}
                  </NavLink>
                );
              })}
            </div>

            {/* logout button mini */}
            {showSidebar || (
              <div style={{ borderBottom: "1.5rem solid transparent" }}>
                <button
                  onClick={handleLogout}
                  className="rounded-[0.5rem] text-black bg-white w-fit p-3 text-lg py-2 flex items-center justify-center hover:bg-opacity-50 "
                >
                  <IoLogOut className="text-2xl"></IoLogOut>
                </button>
              </div>
            )}
          </div>

          {/* logout button */}
          {!showSidebar || (
            <div style={{borderBottom:'2rem solid transparent'}} className="w-full">
              <button
                onClick={handleLogout}
                className="rounded-[1rem] text-black bg-white w-full text-lg py-2 flex items-center justify-center gap-x-2 hover:bg-opacity-50 "
              >
                <IoLogOut className="text-2xl"></IoLogOut>
                <p>Logout</p>
              </button>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
};
