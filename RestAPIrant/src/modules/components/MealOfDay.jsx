import { BsFillStopwatchFill } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const mealOfDay = {
  img: "https://www.gastrolabweb.com/u/fotografias/m/2020/7/24/f1280x720-2014_133689_5050.jpg",
  name: "Ceviche",
  time: "30 min",
  stars: 4,
  author: "Juana torrez delgado",
  ingredients: ["Pescado", "Sal", "Pimienta", "Arroz", "Maiz","Pescado", "Sal", "Pimienta", "Arroz", "Maiz","Pescado", "Sal", "Pimienta", "Arroz", "Maiz"],
  instructions:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non... Ver mas",
};

export const MealOfDay = () => {
  return (
    <div className="bg-[#FFF6ED] w-full overflow-hidden border-[#D2D2D2] border-[2px] shadow-[0px_0px_150px_rgba(0,0,0,0.15)] rounded-[20px]">
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
      <div className="px-6 py-4 space-y-3">
        <h2 className="text-4xl font-semibold">{mealOfDay.name}</h2>
        <div className="flex flex-row items-center justify-between h-8 [&>div]:h-full [&>div]:rounded-[10px]">
          <div className="bg-[#BFE9B0] p-2 flex items-center gap-x-2 text-[#659D51]">
            <BsFillStopwatchFill></BsFillStopwatchFill>
            {mealOfDay.time}
          </div>
          <div className="p-2 flex items-center gap-x-2 bg-[#FFEFA8] text-[#B0AB92]">
            {new Array(5).fill(0).map((_, idx) => {
              return idx >= mealOfDay.stars ? (
                <FaRegStar key={idx}></FaRegStar>
              ) : (
                <FaStar key={idx}></FaStar>
              );
            })}
          </div>
          <div className="bg-[#F8DBE7] text-[#D695B0] flex items-center justify-center font-semibold text-sm px-3">
            {mealOfDay.author}
          </div>
        </div>
        <div>
          <p className="text-2xl mt-4 mb-2 font-medium">Ingredients</p>
          <div className="grid grid-cols-3 font-light">
            {
              mealOfDay.ingredients.map((ingr,idx) => {
                return <p key={idx}>. {ingr}</p>
              })
            }
          </div>
        </div>
        <div>
          <p className="text-2xl mt-4 mb-2 font-medium">Instructions</p>
          <p className="font-light">
            {mealOfDay.instructions}
          </p>
        </div>
      </div>
    </div>
  );
};
