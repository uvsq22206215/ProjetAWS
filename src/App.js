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
import CategoriesPage from "./pages/CategoriesPage";
import Information from "./pages/Informations";
import Mesrecettes from "./pages/Mesrecettes";
import Drawer from "./components/Drawer";
import Contentprofil from "./pages/Contentprofil";
import { AuthContextProvider } from "./context/Usercontext";
import ProtectedRoute from "./context/Protectedroutes";
import SideMenu from "./components/SideMenu";
import AuthorPage from "./pages/AuthorPage";

function App() {
  const Main = () => (
    <div className="App">
      <HomePage />
    </div>
  );

  return (
    <BrowserRouter>
      <div>
        <SideMenu></SideMenu>
        <AuthContextProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Main />} />
            <Route path="/recipe" element={<RecipePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/create" element={<CreateRecipePage />} />
            <Route path="/all-categories" element={<CategoriesPage />} />
            <Route path="/author" element={<AuthorPage />} />
            <Route
              path="/Informations"
              element={
                <Contentprofil>
                  <Information />
                </Contentprofil>
              }
            />
            <Route
              path="/Mes-recettes"
              element={
                <Contentprofil>
                  <Mesrecettes />
                </Contentprofil>
              }
            />
          </Routes>
        </AuthContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
