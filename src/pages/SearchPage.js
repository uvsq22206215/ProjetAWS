import '../assets/css/SearchPage.css';
import '../assets/css/RecipeCard.css';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import { useState } from 'react';

function SearchPage() {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(true);
  };

  return (
    <div id='SearchPage'>
      <Header />
      <div id="search-container">
      <div id="filter-column">
        <div class="filter">
          <h2>Rechercher</h2>
          <form>
            <div class="form-group">
              <label for="ingredients">Ingrédients :</label>
              <input type="text" id="ingredients" name="ingredients" placeholder="Ajouter des ingrédients" />
            </div>
            <div class="form-group">
              <label for="category">Catégorie :</label>
              <select id="category" name="category">
                <option value="">--Choisir une catégorie--</option>
                <option value="entree">Entrée</option>
                <option value="plat">Plat</option>
                <option value="dessert">Dessert</option>
              </select>
            </div>
            <div class="form-group">
              <label for="time">Temps de préparation :</label>
              <select id="time" name="time">
                <option value="">--Choisir un temps--</option>
                <option value="10">Moins de 10 minutes</option>
                <option value="20">Moins de 20 minutes</option>
                <option value="30">Moins de 30 minutes</option>
                <option value="60">Moins de 1 heure</option>
                <option value="120">Moins de 2 heures</option>
              </select>
            </div>
            <div class="form-group">
              <label for="difficulty">Niveau de difficulté :</label>
              <select id="difficulty" name="difficulty">
                <option value="">--Choisir un niveau--</option>
                <option value="facile">Facile</option>
                <option value="moyen">Moyen</option>
                <option value="difficile">Difficile</option>
              </select>
            </div>
            <div class="form-group">
              <label for="culture">Culture :</label>
              <select id="culture" name="culture">
                <option value="">--Choisir une culture--</option>
                <option value="francaise">Française</option>
                <option value="italienne">Italienne</option>
                <option value="asiatique">Asiatique</option>
                <option value="mexicaine">Mexicaine</option>
              </select>
            </div>
            <div class="form-group">
              <button type="submit">Rechercher</button>
            </div>
          </form>
        </div>
      </div>
        <div id="result-column">
          <div id="trending-recipes">
            <h1 className="block-title">Résultat recherche</h1>
            <div className="recipe-cards">
            <RecipeCard 
                title="Pesto Pasta"
                image="/assets/slider1.jpg"
                description="This classic Italian dish features spaghetti tossed in a delicious homemade pesto sauce made with fresh basil, garlic, olive oil, and Parmesan cheese."
                link="#"
              />
             <RecipeCard 
                title="Pesto Pasta"
                image="/assets/slider2.jpg"
                description="This classic Italian dish features spaghetti tossed in a delicious homemade pesto sauce made with fresh basil, garlic, olive oil, and Parmesan cheese."
                link="#"
              />
                <RecipeCard 
                title="Pesto Pasta"
                image="/assets/slider3.jpg"
                description="This classic Italian dish features spaghetti tossed in a delicious homemade pesto sauce made with fresh basil, garlic, olive oil, and Parmesan cheese."
                link="#"
              />
                <RecipeCard 
                title="Pesto Pasta"
                image="/assets/pesto-pasta.jpg"
                description="This classic Italian dish features spaghetti tossed in a delicious homemade pesto sauce made with fresh basil, garlic, olive oil, and Parmesan cheese."
                link="#"
              />
                <RecipeCard 
                title="Pesto Pasta"
                image="/assets/pesto-pasta.jpg"
                description="This classic Italian dish features spaghetti tossed in a delicious homemade pesto sauce made with fresh basil, garlic, olive oil, and Parmesan cheese."
                link="#"
              />
                <RecipeCard 
                title="Pesto Pasta"
                image="/assets/pesto-pasta.jpg"
                description="This classic Italian dish features spaghetti tossed in a delicious homemade pesto sauce made with fresh basil, garlic, olive oil, and Parmesan cheese."
                link="#"
              />
                <RecipeCard 
                title="Pesto Pasta"
                image="/assets/slider2.jpg"
                description="This classic Italian dish features spaghetti tossed in a delicious homemade pesto sauce made with fresh basil, garlic, olive oil, and Parmesan cheese."
                link="#"
              />
                <RecipeCard 
                title="Pesto Pasta"
                image="/assets/slider3.jpg"
                description="This classic Italian dish features spaghetti tossed in a delicious homemade pesto sauce made with fresh basil, garlic, olive oil, and Parmesan cheese."
                link="#"
              />
                <RecipeCard 
                title="Pesto Pasta"
                image="/assets/pesto-pasta.jpg"
                description="This classic Italian dish features spaghetti tossed in a delicious homemade pesto sauce made with fresh basil, garlic, olive oil, and Parmesan cheese."
                link="#"
              />

            
            
              {showMore && (
                <>
                   <RecipeCard 
                title="Pesto Pasta"
                image="/assets/slider1.jpg"
                description="This classic Italian dish features spaghetti tossed in a delicious homemade pesto sauce made with fresh basil, garlic, olive oil, and Parmesan cheese."
                link="#"
              />
                <RecipeCard 
                title="Pesto Pasta"
                image="/assets/slider1.jpg"
                description="This classic Italian dish features spaghetti tossed in a delicious homemade pesto sauce made with fresh basil, garlic, olive oil, and Parmesan cheese."
                link="#"
              />
                <RecipeCard 
                title="Pesto Pasta"
                image="/assets/slider1.jpg"
                description="This classic Italian dish features spaghetti tossed in a delicious homemade pesto sauce made with fresh basil, garlic, olive oil, and Parmesan cheese."
                link="#"
              />
  
                </>
              )}
            </div>
            {!showMore && (
              <a onClick={handleShowMore} className="block-link" href="#">
                View More Recipes
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
