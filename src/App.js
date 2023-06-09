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
import Recettefavoris from "./pages/Recettes-favorites";
import Contentprofil from "./pages/Contentprofil";
import Contact from "./pages/Contact";
import { AuthContextProvider } from "./context/Usercontext";
import SideMenu from "./components/SideMenu";
import AuthorPage from "./pages/AuthorPage";
import RecipeGenerator from "./pages/RecipeGenerator";
import ProtectedRoute from "./context/Protectedroutes";
import Error404 from "./components/Error404";
import ScrollToTop from "./utils/ScrollToTop";
import Support from "./pages/SupportPage";
import Conditions from "./pages/ConditionsPage";

function App() {
  const Main = () => (
    <div className="App">
      <HomePage />
    </div>
  );

  const login = window.location.pathname === '/login';

  return (
    <BrowserRouter>
      <div>
        {!login && <SideMenu></SideMenu>}
        
        <AuthContextProvider>
          <ScrollToTop />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Main />} />
            <Route path="/recipe" element={<RecipePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/supportpage" element={<Support />} />
            <Route path="/conditions" element={<Conditions />} />
            <Route path="/author/:name" element={<AuthorPage />} />
            <Route path="/*" element={<Error404 />} />
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
              path="Recettes-aimees"
              element={
                <ProtectedRoute>
                  <Contentprofil>
                    <Recettefavoris />
                  </Contentprofil>
                </ProtectedRoute>
              }
            />
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
