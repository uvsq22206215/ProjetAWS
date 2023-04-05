import './SearchPage.css';
import '../RecipeCard.css';
import Header from '../Header';
import ReceipCard from '../RecipeCard';
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
// partie filter 
</div>
        <div id="result-column">
          <div id="trending-recipes">
            <h1 className="block-title">Résultat recherche</h1>
            <div className="recipe-cards">
            <ReceipCard />
            <ReceipCard />
            <ReceipCard />
            <ReceipCard />
            <ReceipCard />
            <ReceipCard />
            <ReceipCard />
            <ReceipCard />
            <ReceipCard />
            
              {showMore && (
                <>
                 <ReceipCard />
                 <ReceipCard />
                 <ReceipCard />
                 <ReceipCard />
  
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
