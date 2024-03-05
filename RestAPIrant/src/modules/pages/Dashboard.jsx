import { useEffect, useState } from "react";
import { MealOfDay } from "../components/MealOfDay";
import {
  getAllRecipes,
  getFavoritesRecipes,
} from "../../services/recipesService";
import { SliderCard } from "../components/SliderCard";

export const Dashboard = () => {
  const [recipes, setRecipes] = useState(null);

  

  useEffect(() => {
    setRecipes({
      allRecipes: getAllRecipes(),
      favorites: getFavoritesRecipes(),
    });
  }, []);

  return (
    <div className="flex flex-row gap-x-4 max-w-full  h-[95%]">
      <div className="w-full max-w-[calc(100%_-_30rem)] space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <h2 className="font-regular text-2xl">Top recipes of the week
            </h2>
            <p className="font-light text-xl">
              {recipes?.allRecipes?.length + ' recipes'}
            </p>
          </div>
          <div className="max-w-full overflow-x-hidden">
            <SliderCard recipes={recipes?.allRecipes}></SliderCard> 
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <h2 className="font-regular text-2xl">Your favorites</h2>
            <p className="font-light text-xl">
              {recipes?.favorites?.length + ' recipes'}
            </p>
          </div>
          <div className="max-w-full overflow-x-hidden">
            <SliderCard recipes={recipes?.favorites}></SliderCard> 
          </div>
        </div>
      </div>
      <div className="w-[30rem] h-full flex items-start">
        <MealOfDay></MealOfDay>
      </div>
    </div>
  );
};
