import React from "react";
import { BsCheck } from "react-icons/bs";

export const Checkbox = ({click, checked=false}) => {
  return (
    <div
      className="w-4 h-4 rounded-[5px] outline outline-[2px] outline-[#EFC7E5]"
      style={{ backgroundColor: checked ? "#EFC7E5" : "" }}
      onClick={click}
    >
      {!checked || <BsCheck className="text-white"></BsCheck>}
    </div>
  );
};
