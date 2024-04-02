import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

export const Dropdown = ({
  options = [],
  onChange,
  placeholder = "",
  bg = "#F8DEEC",
  fg = "black",
}) => {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(placeholder);
  options = [{value: null, element: placeholder}].concat(options);
  const onSelect = (val) => {
    setSelected(val.element);
    setShow(false);
    onChange(val);
  };

  return (
    <>
      {!show || (
        <div
          className="z-[400] bg-black bg-opacity-0 fixed -top-4 left-0 right-0 bottom-0"
          onClick={(e) => setShow(false)}
        >
        </div>
      )}
      {/* <div className="relative text-lg z-[500]"> */}
      <div className="relative text-base z-[500]">
        <div
          className=" pl-4 pr-3 py-[6px] w-fit rounded-lg cursor-pointer flex gap-x-1 items-center justify-center"
          style={{ backgroundColor: bg, color: fg }}
          onClick={(e) => setShow(!show)}
        >
          {selected}
          {!show ? (
            <MdKeyboardArrowDown size={"1.5em"}></MdKeyboardArrowDown>
          ) : (
            <MdKeyboardArrowUp size={"1.5em"}></MdKeyboardArrowUp>
          )}
        </div>
        {!show || (
          <div
            className="absolute text-black left-0 w-max top-[115%] rounded-lg overflow-y-auto max-h-[20rem] custom-scroll border border-gray-400 p-2"
            style={{ backgroundColor: bg, color: fg }}
          >
            {options.map((op, idx) => (
              <div
                className="px-3 py-1 cursor-pointer hover:bg-white hover:bg-opacity-60 rounded-md"
                key={idx}
                onClick={(e) => onSelect(op)}
              >
                {op.element}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
