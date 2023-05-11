import "./assets/css/App.css";
import "./assets/css/RecipeCard.css";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import RecipePage from "./pages/RecipePage";
import CreateRecipePage from "./pages/CreateRecipePage";
import CategoriesPage from "./pages/CategoriesPage";
import Information from "./pages/Informations";
import Mesrecettes from "./pages/Mesrecettes";
import Contentprofil from "./pages/Contentprofil";
import { AuthContextProvider } from "./context/Usercontext";
import SideMenu from "./components/SideMenu";
import AuthorPage from "./pages/AuthorPage";
import RecipeGenerator from "./pages/RecipeGenerator";
import ProtectedRoute from "./context/Protectedroutes";

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
            <Route
              path="/create"
              element={
                <ProtectedRoute>
                  <CreateRecipePage />
                </ProtectedRoute>
              }
            />
            <Route path="/all-categories" element={<CategoriesPage />} />
            <Route path="/author" element={<AuthorPage />} />
            <Route path="recipe-generator" element={<RecipeGenerator />} />
            <Route
              path="/Informations"
              element={
                <ProtectedRoute>
                  <Contentprofil>
                    <Information />
                  </Contentprofil>
                </ProtectedRoute>
              }
            />
            <Route
              path="/Mes-recettes"
              element={
                <ProtectedRoute>
                  <Contentprofil>
                    <Mesrecettes />
                  </Contentprofil>
                </ProtectedRoute>
              }
            />
          </Routes>
        </AuthContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
