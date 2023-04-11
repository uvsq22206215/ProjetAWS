import '../assets/css/HomePage.css'
import RecipeCard from '../components/RecipeCard';
import Header from '../components/Header';
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import Footer from '../components/Footer';
import RelatedRecipes from '../components/RelatedRecipes';

function HomePage() {
  return (
    <div id="homepage">
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

      <RelatedRecipes title='Recettes tendance'/>
      <Footer />
    </div>

  );
}

export default HomePage;