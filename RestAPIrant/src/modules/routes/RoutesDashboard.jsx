import { Route, Routes } from "react-router-dom";
import { Layout } from "../layout/LayoutApp";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { RecipePage } from "../pages/Recipe/RecipePage";

export const RoutesDashboard = () => {
  return (
    <Layout>
      <Routes>
        <Route path="" element={<Dashboard></Dashboard>}></Route>
        <Route path="/byingredients" element={<p>by ingredients</p>}></Route>
        <Route path="/following" element={<p>Following</p>}></Route>
        <Route path="/recipes" element={<p>recipes</p>}></Route>
        <Route path="/recipe/:id" element={<RecipePage></RecipePage>}></Route>
      </Routes>
    </Layout>
  );
};
