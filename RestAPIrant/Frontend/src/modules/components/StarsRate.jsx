import { FaRegStar, FaStar } from "react-icons/fa6";

export const StarsRate = ({ stars, size='1rem', showAll=true }) => {
  return (
    <div className="flex justify-start gap-x-2 w-full" style={{fontSize:size}}>
      {
        new Array(5).fill(0).map((_,idx)=>{
          if(idx < stars) return (
              <div key={idx} style={{fontSize:size}}>
                <FaStar></FaStar>
              </div>
          )
          if(idx >= stars && showAll) return (
              <div key={idx} style={{fontSize:size}}>
                <FaRegStar></FaRegStar>
              </div>
          )
        })
      }
    </div>
  );
};
