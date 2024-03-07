import { BsFillStopwatchFill } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { StarsRate } from "../../../components/StarsRate";
import { useEffect, useState } from "react";
import { getRecipeOfDay } from "../../../../services/recipesService";
import { useNavigate } from "react-router-dom";

export const MealOfDay = ({onHide}) => {
  const [mealOfDay, setMealOfDay] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    setMealOfDay(getRecipeOfDay());
  }, []);

  const goToRecipe = () => {
    navigate("recipe/"+mealOfDay.id)
  }

  return (
    <div className="bg-[#FFF6ED] w-full overflow-hidden border-[#D2D2D2] border-[2px] shadow-[0px_0px_150px_rgba(0,0,0,0.15)] rounded-[20px]">
      {mealOfDay ? (
        <>
          <div className="w-full relative">
            <img
              src={mealOfDay.img}
              alt={mealOfDay.name + " img"}
              className="w-full h-[15rem] object-cover"
            />
            <div className="absolute bottom-1 right-0 px-4 py-2 bg-[#656565] bg-opacity-80 text-white font-bold">
              Meal Of the day!
            </div>
          </div>
          <div className="px-6 py-4 space-y-3 bg-[linear-gradient(10deg,#FFC9BD,#FAE3D7_50%,#FFF0E2)]">
            <h2 className="text-4xl font-semibold">{mealOfDay.name}</h2>
            <div className="flex flex-row items-center justify-between h-8 [&>div]:h-full [&>div]:rounded-[10px]">
              <div className="bg-[#BFE9B0] p-2 flex items-center gap-x-2 text-[#659D51]">
                <BsFillStopwatchFill></BsFillStopwatchFill>
                {mealOfDay.time}
              </div>
              <div className="p-2  bg-[#FFEFA8] text-[#B0AB92]">
                <StarsRate stars={mealOfDay.stars}></StarsRate>
              </div>
              <div className="bg-[#F8DBE7] text-[#D695B0] flex items-center justify-center font-semibold text-sm px-3">
                {mealOfDay.author}
              </div>
            </div>
            <div>
              <p className="text-2xl mt-4 mb-2 font-medium">Ingredients</p>
              <div className="grid grid-cols-3 font-light">
                {mealOfDay.ingredients.map((ingr, idx) => {
                  return <p key={idx}>. {ingr}</p>;
                })}
              </div>
            </div>
            <div>
              <p className="text-2xl mt-4 mb-2 font-medium">Instructions</p>
              <p className="font-light">{mealOfDay.instructions[0]}</p>
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-blue-400 px-3 py-1 rounded-md font-semibold hover:bg-blue-300 text-white"
              onClick={goToRecipe}
              >
                Go to recipe
              </button>
              <button className="bg-red-400 px-3 py-1 rounded-md font-semibold hover:bg-red-300 text-white"
              onClick={onHide}>
                Hide
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="p-4">
          <p>Oh... there isn't meal of the day for now :'{"("} </p>
        </div>
      )}
    </div>
  );
};
