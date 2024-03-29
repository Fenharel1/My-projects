import { FaRegStar, FaStar } from "react-icons/fa6";

export const StarsRate = ({ stars, size='1rem' }) => {
  return (
    <div className="flex justify-between gap-x-2 w-full" style={{fontSize:size}}>
      {/* {new Array(5).fill(0).map((_, idx) => {
        return idx >= stars ? (
          <FaRegStar key={idx}  ></FaRegStar>
        ) : (
          <FaStar key={idx} ></FaStar>
        );
      })} */}
      {
        new Array(5).fill(0).map((_,idx)=>{
          return (
            <div key={idx} style={{fontSize:size}}>
              {idx >= stars ? <FaRegStar></FaRegStar> : <FaStar></FaStar>}
            </div>
          )
        })
      }
    </div>
  );
};
