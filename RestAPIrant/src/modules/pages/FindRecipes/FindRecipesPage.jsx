import { Dropdown } from "../../components/Dropdown"
import { RecipeFilters } from "./components/RecipeFilters"

export const FindRecipesPage = () => {

  return (
    <>
      <h1 className="font-semibold text-3xl">Find recipes</h1>
      <RecipeFilters></RecipeFilters>
    </>
  )
}
