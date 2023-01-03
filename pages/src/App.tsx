import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.scss";
import Recipe from "./Recipe";
import Recipes from "./Recipes";

const App = () => (
  <div >
   <BrowserRouter>
        <Routes>
          <Route path="/" element={<Recipes />} />
          <Route path="/recipes/:slug" element={<Recipe />} />
        </Routes>
      </BrowserRouter>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
