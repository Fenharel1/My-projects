import { SearchForm } from "./SearchForm"
import { MdNotificationsNone } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from "../../../auth/context/AuthContext";
import { FaAngleDown } from "react-icons/fa6";

export const Navbar = () => {
  const {login:{username}} = useContext(AuthContext)
  return (
    <nav className="flex flex-row justify-between items-center">
      <div className="max-w-[25rem] w-full ">
        <SearchForm placeholder={'Search recipes'}></SearchForm> 
      </div>
      <div className="flex gap-x-5">
        <div className=" relative w-min h-min">
          <div className="animate-bounce text-white bg-blue-400 text-xs font-bold rounded-full w-4 h-4 absolute right-0 flex items-center justify-center">2</div>
          <MdNotificationsNone className="text-3xl">
          </MdNotificationsNone>
        </div>
        <div>
          <IoSettingsOutline className="text-3xl"></IoSettingsOutline>
        </div>
        <div className="capitalize flex gap-x-2 items-center">
          {username}
          <FaAngleDown className="text-xl"></FaAngleDown>
        </div>
      </div>
    </nav>
  )
}