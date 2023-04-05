import "./App.css";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import "./RecipeCard.css";
import RecipeCard from "./RecipeCard";
import Header from "./Header";
import React, { useState } from "react";

function App() {
  const Main = () => (
    <div className="App">
      <Header />

      <div id="slider-hp"></div>

      <div id="trending-recipes">
        <h1 className="block-title">Trending Recipes</h1>
        <div className="recipe-cards">
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
        </div>
        <a className="block-link" href="#">
          View More Recipes
        </a>
      </div>
    </div>
  );
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
