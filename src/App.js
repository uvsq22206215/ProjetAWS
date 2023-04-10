import "./assets/css/App.css";
import "./assets/css/RecipeCard.css";
import RecipeCard from "./components/RecipeCard";
import Header from "./components/Header";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import React, { useState } from "react";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import RecipePage from "./pages/RecipePage";
import CreateRecipePage from "./pages/CreateRecipePage";

function App() {
  const Main = () => (
    <div className="App">
      <HomePage />
    </div>
  );

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Main />} />
          <Route path="/recipe" element={<RecipePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/create" element={<CreateRecipePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
