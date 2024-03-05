import { BsFillStopwatchFill } from "react-icons/bs";
import { StarsRate } from "./StarsRate";
import { useNavigate } from "react-router-dom";

export const CardRecipe = ({ recipe }) => {
  const { name, author, img, time, stars } = recipe;

  const navigate = useNavigate();

  const goToDetails = () => {
    console.log(name)
  }

  return (
    <div onClick={goToDetails} className="border-[3px] overflow-hidden min-w-[18rem] max-w-[18rem] rounded-[1rem]">
      <img className="object-cover w-full" src={img} alt={name + " img"} />
      <div className="p-4">
        <p className="font-bold text-lg">{name}</p>
        <p className="font-regular ">{author}</p>
        <div className="text-[#FFE03C] text-2xl flex items-center justify-between w-full">
          <div className="w-[8rem]">
            <StarsRate stars={stars}></StarsRate>
          </div>
          <div className="text-xs font-bold whitespace-nowrap bg-[#BFE9B0] p-2 flex items-center gap-x-2 text-[#659D51] rounded-[10px]">
            <BsFillStopwatchFill></BsFillStopwatchFill>
            {time}
          </div>
        </div>
      </div>
    </div>
  );
};
