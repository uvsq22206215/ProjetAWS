import './App.css';
import './RecipeCard.css';
import RecipeCard from './RecipeCard';
import Header from './Header';
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import HomePage from './HomePage';

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
