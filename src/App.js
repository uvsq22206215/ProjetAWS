import "./App.css";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import "./RecipeCard.css";
import RecipeCard from "./RecipeCard";
import Header from "./Header";

function App() {
  const Main = () => <h1>Hello world</h1>;
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
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
}

export default App;
