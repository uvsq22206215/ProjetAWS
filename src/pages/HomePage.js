import '../assets/css/HomePage.css'
import RecipeCard from '../components/RecipeCard';
import Header from '../components/Header';
import { useState, useEffect } from 'react';
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import Footer from '../components/Footer';
import { Link } from "react-router-dom";
import CreatorCard from '../components/CreatorCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import RelatedRecipes from '../components/RelatedRecipes';


function HomePage() {
  // const recipeSliderSettings = [
  //   {
  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 3,
  //     },
  //   },
  //   {
  //     breakpoint: 768,
  //     settings: {
  //       slidesToShow: 3,
  //     },
  //   },
  //   {
  //     breakpoint: 480,
  //     settings: {
  //       slidesToShow: 1,
  //     },
  //   },
  // ];

  const creatorSliderSettings = [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ];


  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // const getSlidesToShow = () => {
  //   for (let i = 0; i < recipeSliderSettings.length; i++) {
  //     if (windowWidth >= recipeSliderSettings[i].breakpoint) {
  //       return recipeSliderSettings[i].settings.slidesToShow;
  //     }
  //   }
  //   return recipeSliderSettings[recipeSliderSettings.length - 1].settings.slidesToShow;
  // };

  const getSlidesToShow2 = () => {
    for (let i = 0; i < creatorSliderSettings.length; i++) {
      if (windowWidth >= creatorSliderSettings[i].breakpoint) {
        return creatorSliderSettings[i].settings.slidesToShow;
      }
    }
    return creatorSliderSettings[creatorSliderSettings.length - 1].settings.slidesToShow;
  };
  

  return(
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

      <div id="trending-recipes">
        <RelatedRecipes title='Recettes tendance'/>
      </div>  
      <div id="recipe-gen-block">
        <div className='container'>
          <h1 className="block-title">VOUS NE SAVEZ<br />PAS QUOI CUISINER?</h1>
          <div className="block-btn">
            <Link to="/my-page">
              <button className='button'> Générer une recette</button>
            </Link>
          </div>
        </div>
        <div className='overlay'></div>
      </div>
      <div id="popular-creators">
        <div id="hp-creators">
          <h1 className='block-title'>Créateurs de recettes populaires</h1>
          <div className='creator-container'>
            <Slider 
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={5}
              slidesToScroll={1}
              responsive={creatorSliderSettings}
            >
              <CreatorCard name="Nom Prenom" image="/assets/chef.jpg" status="recipe creator" />
              <CreatorCard name="Nom Prenom" image="/assets/chef.jpg" status="recipe creator" />
              <CreatorCard name="Nom Prenom" image="/assets/chef.jpg" status="recipe creator" />
              <CreatorCard name="Nom Prenom" image="/assets/chef.jpg" status="recipe creator" />
              <CreatorCard name="Nom Prenom" image="/assets/chef.jpg" status="recipe creator" />
            </Slider>
          </div>
          
        </div>
        <div id="quotes">

        </div>
      </div>
      <Footer />
    </div>
    
  );
}

export default HomePage;