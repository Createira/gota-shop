import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage.jsx";
import CataloguePage from "../../pages/CataloguePage.jsx";
import ShoppingcartPage from "../../pages/ShoppingcartPage.jsx";
import ErrorPage from "../../pages/ErrorPage.jsx";

import Layout from "../Layout";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="catalogue" element={<CataloguePage />} />
          <Route path="shopping-cart" element={<ShoppingcartPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default Router;
