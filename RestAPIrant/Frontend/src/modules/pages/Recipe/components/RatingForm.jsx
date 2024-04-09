import { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { Checkbox } from "../../../components/Checkbox";

export const RatingForm = () => {
  const [stars, setStars] = useState(3);
  const [prepared, setPrepared] = useState(false)
  const [comment, setComment] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(stars, prepared, comment)
  }

  const starsLabel = [
    null,
    "Muy malo",
    "Malo",
    "Regular",
    "Bueno",
    "Muy bueno",
  ];

  return (
    <form onSubmit={onSubmit} className="flex flex-row gap-x-5 items-center justify-center my-10">
      <div className="flex flex-col items-center gap-y-2">
        <div className="flex justify-evenly gap-x-2 w-full text-[#FFB800]">
          {new Array(5).fill(0).map((_, idx) => {
            return (
              <div
                className="text-2xl cursor-pointer"
                key={idx}
                onClick={(e) => setStars(idx + 1)}
              >
                {idx >= stars ? <FaRegStar></FaRegStar> : <FaStar></FaStar>}
              </div>
            );
          })}
        </div>
        <p className="text-[#A1A1A1] font-semibold text-2xl ">
          {starsLabel.map((l, i) => {
            return i == stars ? l : "";
          })}
        </p>
        <div className="flex flex-row flew-nowrap gap-x-2 items-center">
          <Checkbox checked={prepared} click={()=>setPrepared(!prepared)} ></Checkbox>
          <span>I prepared the recipe</span>
        </div>
        <button
          type="submit"
          className="text-white bg-[#88CB87] rounded-[5px] py-1 text-xl font-semibold px-10 mt-2"
        >
          Send
        </button>
      </div>
      <textarea value={comment} onChange={e=>setComment(e.target.value)} rows={7} className="flex-1 border-[3px] max-w-[35rem] min-w-[10rem] outline-none p-3 text-lg max-h-[10rem]"></textarea>
    </form>
  );
};
