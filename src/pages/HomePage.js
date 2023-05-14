import "../assets/css/HomePage.css";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import CreatorCard from "../components/CreatorCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RelatedRecipes from "../components/RelatedRecipes";
import { useNavigate } from "react-router";


function HomePage() {
  let history = useNavigate();
  let generatorRedirect = () => {
    history("/recipe-generator");
  };
  
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
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="homepage">
      <Header />
      <div id="slider-hp">
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="carousel-image" style={{backgroundImage: 'url("/assets/slider1.jpg")'}}>
                  <div className="overlay"></div>
                  <div className="carousel-caption d-none d-md-block">
                    <h5 className="slider-title">First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="carousel-image" style={{backgroundImage: 'url("/assets/slider2.jpg")'}}>
                  <div className="overlay"></div>
                  <div className="carousel-caption d-none d-md-block">
                    <h5 className="slider-title">Second slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="carousel-image" style={{backgroundImage: 'url("/assets/slider3.jpg")'}}>
                  <div className="overlay"></div>
                  <div className="carousel-caption d-none d-md-block">
                    <h5 className="slider-title">Third slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </div>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
      </div>

      <div id="trending-recipes">
        <RelatedRecipes title="Recettes tendance" />
      </div>
      <div id="recipe-gen-block">
        <div className="container">
          <h1 className="block-title">
            VOUS NE SAVEZ
            <br />
            PAS QUOI CUISINER?
          </h1>
          <div className="block-btn">
            <button className="button" onClick={generatorRedirect}>Générer une recette</button>
          </div>
        </div>
        <div className="overlay"></div>
      </div>
      <div id="popular-creators">
        <div id="hp-creators">
          <h1 className="block-title">Créateurs de recettes populaires</h1>
          <div className="creator-container">
            <Slider
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={5}
              slidesToScroll={1}
              responsive={creatorSliderSettings}
            >
              <CreatorCard
                name="Oussama"
                image="/assets/chef.jpg"
                status="recipe creator"
              />
              <CreatorCard
                name="Younes"
                image="/assets/chef.jpg"
                status="recipe creator"
              />
              <CreatorCard
                name="Louis"
                image="/assets/chef.jpg"
                status="recipe creator"
              />
              <CreatorCard
                name="Tasneem"
                image="/assets/chef.jpg"
                status="recipe creator"
              />
              <CreatorCard
                name="Marmiton"
                image="/assets/chef.jpg"
                status="recipe creator"
              />
            </Slider>
          </div>
        </div>
        <div id="quotes"></div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
