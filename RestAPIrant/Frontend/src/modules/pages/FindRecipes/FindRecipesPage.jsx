import { Dropdown } from "../../components/Dropdown";
import { RecipeFilters } from "./components/RecipeFilters";

export const FindRecipesPage = () => {
  const recipesResult = [];

  const onFilterChange = (filters) => {
    console.log(filters);
  };

  return (
    <>
      <h1 className="font-semibold text-3xl">Find recipes</h1>
      <RecipeFilters onFiltersChange={onFilterChange}></RecipeFilters>
      {recipesResult.length > 0 ? (
        <h2 className="font-semibold text-2xl">
          {recipesResult.length} results:
        </h2>
      ) : (
        <div className="border w-full rounded-xl px-10 pt-4 pb-7 bg-black bg-opacity-10 text-xl flex items-center">
          <img src="/src/assets/table.png" alt="" className="w-[170px]" />
          <p className="px-10 font-black italic text-gray-400 w-full text-center">
            Con ganas de cocinar algo ?
            <br />
            Dale a buscar y encontremos la receta perfecta para tu paladar !
          </p>
          <img src="/src/assets/table.png" alt="" className="w-[170px]" />
        </div>
      )}
    </>
  );
};
