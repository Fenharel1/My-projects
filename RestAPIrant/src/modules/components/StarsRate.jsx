import { FaRegStar, FaStar } from "react-icons/fa6";

export const StarsRate = ({ stars, size=16 }) => {
  return (
    <div className="flex justify-between gap-x-2 w-full">
      {new Array(5).fill(0).map((_, idx) => {
        return idx >= stars ? (
          <FaRegStar key={idx} size={size} ></FaRegStar>
        ) : (
          <FaStar key={idx} size={size}></FaStar>
        );
      })}
    </div>
  );
};
