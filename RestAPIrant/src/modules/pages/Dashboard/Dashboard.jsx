import { useEffect, useState } from "react";
import { MealOfDay } from "./components/MealOfDay";
import {
  getAllRecipes,
  getFavoritesRecipes,
} from "../../../services/recipesService";
import { SliderCard } from "../../components/SliderCard";
import { CardRecipe } from "../../components/CardRecipe";

export const Dashboard = () => {
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    setRecipes({
      allRecipes: getAllRecipes(),
      favorites: getFavoritesRecipes(),
    });
  }, []);

  const [showMealOfDay, setShowMealOfDay] = useState(false);

  const onHideMealOfDay = () => setShowMealOfDay(false);
  const onShowMealOfDay = () => setShowMealOfDay(true);

  return (
    <div className="flex flex-row gap-x-4 max-w-full  h-[95%]">
      <div
        className="space-y-6 duration-500 pr-5 pb-14 overflow-y-auto"
        style={{
          minWidth: showMealOfDay ? "calc(100% - 30rem)" : "calc(100% + 1rem)",
        }}
      >
        {/* Top Recipes Recipes */}
        <div className="space-y-2">
          <div className="flex justify-between items-center sticky -top-0 z-30 bg-white">
            <h2 className="font-regular text-2xl ">Top recipes of the week</h2>
            <p className="font-light text-xl">
              {recipes?.allRecipes?.length + " recipes"}
            </p>
          </div>
          <div className="max-w-full overflow-x-hidden">
            <SliderCard recipes={recipes?.allRecipes}></SliderCard>
          </div>
        </div>
        {/* Favorites Recipes */}
        <div className="space-y-2">
          <div className="flex justify-between items-center sticky top-0 z-30 bg-white">
            <h2 className="font-regular text-2xl ">Your favorites</h2>
            <p className="font-light text-xl">
              {recipes?.favorites?.length + " recipes"}
            </p>
          </div>
          <div className="max-w-full overflow-x-hidden">
            <SliderCard recipes={recipes?.favorites}></SliderCard>
          </div>
        </div>
        {/* All recipes */}
        <div className="space-y-2">
          <div className="flex justify-between items-center sticky top-0 z-30 bg-white">
            <h2 className="font-regular text-2xl">What would you like to cook today?</h2>
            <p className="font-light text-xl">
              {recipes?.allRecipes?.length + " recipes"}
            </p>
          </div>
          <div className="max-w-full flex gap-x-3 gap-y-5 flex-row flex-wrap items-center justify-start">
            {recipes?.allRecipes.map((r,idx)=>{
              return (
                <CardRecipe key={idx} recipe={r}></CardRecipe>
              )
            })}
          </div>
        </div>
      </div>
      <div className="relative min-w-[30rem] max-w-[30rem] h-full flex items-start">
        <MealOfDay onHide={onHideMealOfDay}></MealOfDay>
      </div>
      <button
        disabled={showMealOfDay}
        onClick={onShowMealOfDay}
        style={{opacity:showMealOfDay?'0':'1'}}
        className="bg-[#FF9C86] shadow-[-4px_-4px_14px_rgba(0,0,0,0.45)] z-50 duration-300 rounded-[15px] text-white font-semibold px-3 h-10 flex items-center fixed bottom-3 right-10"
      >
        Meal of The day!
      </button>
    </div>
  );
};
