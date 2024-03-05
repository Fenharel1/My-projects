import { FaRegStar, FaStar } from "react-icons/fa6";

export const StarsRate = ({ stars }) => {
  return (
    <div className="flex justify-between gap-x-2 w-full">
      {new Array(5).fill(0).map((_, idx) => {
        return idx >= stars ? (
          <FaRegStar key={idx}></FaRegStar>
        ) : (
          <FaStar key={idx}></FaStar>
        );
      })}
    </div>
  );
};
