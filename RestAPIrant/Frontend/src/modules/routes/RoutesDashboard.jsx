import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "../layout/LayoutApp";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { RecipePage } from "../pages/Recipe/RecipePage";
import { FindRecipesPage } from "../pages/FindRecipes/FindRecipesPage";

export const RoutesDashboard = () => {
  return (
    <Layout>
      <Routes>
        <Route path="" element={<Dashboard></Dashboard>}></Route>
        <Route path="/byingredients" element={<p>by ingredients</p>}></Route>
        <Route path="/following" element={<p>Following</p>}></Route>
        <Route path="/find-recipes" element={<FindRecipesPage></FindRecipesPage>}></Route>
        <Route path="/recipe/:id" element={<RecipePage></RecipePage>}></Route>
        <Route path="/*" element={<Navigate to='/'></Navigate>}></Route>
      </Routes>
    </Layout>
  );
};
