import './App.css';
import './RecipeCard.css';
import RecipeCard from './RecipeCard';
import Header from './Header';
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";

function App() {
  const Main = () => (
    <div className="App">
      <Header />

      <div id="slider-hp">
        <MDBCarousel showIndicators showControls fade>
          <MDBCarouselItem
            className="w-100 d-block"
            itemId={1}
            src="/assets/slider1.jpg"
            alt="..."
          >
            <h5 className='slider-title'>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </MDBCarouselItem>

          <MDBCarouselItem
            className="w-100 d-block"
            itemId={2}
            src="/assets/slider2.jpg"
            alt="..."
          >
            {/* Pas besoin de mettre le contenu dans un div car un div(slider-caption) est automatiquement généré */}
            <h5 className='slider-title'>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </MDBCarouselItem>

          <MDBCarouselItem
            className="w-100 d-block"
            itemId={3}
            src="/assets/slider3.jpg"
            alt="..."
          >
            <h5 className='slider-title'>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </MDBCarouselItem>
        </MDBCarousel>
      </div>

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
