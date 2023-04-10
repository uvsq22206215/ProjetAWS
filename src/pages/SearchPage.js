import '../assets/css/SearchPage.css';
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
     
      <div class="filter-container">
    <h2>Filter</h2>
  <form>
    <div class="filter-group">
      <h3>Category</h3>
      <div class="filter-option">
        <input type="checkbox" id="entree" name="category" value="entree"/>
        <label for="entree">Entrée</label>
      </div>
      <div class="filter-option">
        <input type="checkbox" id="plat" name="category" value="plat"/>
        <label for="plat">Plat</label>
      </div>
      <div class="filter-option">
        <input type="checkbox" id="dessert" name="category" value="dessert"/>
        <label for="dessert">Dessert</label>
      </div>
    </div>

    <div class="filter-group">
      <h3>Preparation Time</h3>
      <div class="filter-option">
        <input type="checkbox" id="15min" name="preparation-time" value="15min"/>
        <label for="15min">- de 15 minutes</label>
      </div>
      <div class="filter-option">
        <input type="checkbox" id="15to30min" name="preparation-time" value="15to30min"/>
        <label for="15to30min">de 15 à 30 minutes</label>
      </div>
      <div class="filter-option">
        <input type="checkbox" id="30min+" name="preparation-time" value="30min+"/>
        <label for="30min+">+ de 30 minutes</label>
      </div>
    </div>

    <div class="filter-group">
      <h3>Difficulty Level</h3>
      <div class="filter-option">
        <input type="checkbox" id="easy" name="difficulty-level" value="easy"/>
        <label for="easy">Easy</label>
      </div>
      <div class="filter-option">
        <input type="checkbox" id="medium" name="difficulty-level" value="medium"/>
        <label for="medium">Medium</label>
      </div>
      <div class="filter-option">
        <input type="checkbox" id="hard" name="difficulty-level" value="hard"/>
        <label for="hard">Hard</label>
      </div>
    </div>

    <div class="filter-group">
      <h3>Culture</h3>
      <div class="filter-option">
        <input type="checkbox" id="french" name="culture" value="french"/>
        <label for="french">French</label>
      </div>
      <div class="filter-option">
        <input type="checkbox" id="italian" name="culture" value="italian"/>
        <label for="italian">Italian</label>
      </div>
      <div class="filter-option">
        <input type="checkbox" id="asian" name="culture" value="asian"/>
        <label for="asian">Asian</label>
      </div>
    </div>

    <button type="submit">Apply Filters</button>
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
