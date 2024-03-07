import { BsFillStopwatchFill } from "react-icons/bs";
import { StarsRate } from "./StarsRate";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export const CardRecipe = ({ recipe }) => {

  const imgRef = useRef(null);

  const { name, author, img, time, stars } = recipe;

  const navigate = useNavigate();

  const goToDetails = () => {
    navigate('recipe/'+recipe.id)
  }

  const scaleImg = (scale) => {
    if(imgRef.current){
      imgRef.current.style.scale = scale?'1.15':'1'
    }
  }

  return (
    <div onClick={goToDetails} onMouseEnter={e=>scaleImg(true)} onMouseLeave={e=>scaleImg(false)} className="border-[3px] overflow-hidden min-w-[18rem] max-w-[18rem] rounded-[1rem] cursor-pointer">
      <div className="overflow-hidden w-full">
        <img ref={imgRef} className="object-cover w-full transition-all" src={img} alt={name + " img"} />
      </div>
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
