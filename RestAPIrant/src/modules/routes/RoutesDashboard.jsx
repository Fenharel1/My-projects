import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Layout } from "../layout/LayoutApp";

export const RoutesDashboard = () => {
  return (
    <Layout>
      <Routes>
        <Route path="" element={<Dashboard></Dashboard>}></Route>
        <Route path="/byingredients" element={<p>by ingredients</p>}></Route>
        <Route path="/following" element={<p>Following</p>}></Route>
        <Route path="/recipes" element={<p>recipes</p>}></Route>
      </Routes>
    </Layout>
  );
};
