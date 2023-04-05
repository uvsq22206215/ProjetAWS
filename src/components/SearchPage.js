import './SearchPage.css';
import '../ResultSearchCard.css';
import Header from '../Header';
import ResultSearchCard from '../ResultSearchCard';
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
    
        </div>
        <div id="result-column">
          <div id="trending-recipes">
            <h1 className="block-title">Résultat recherche</h1>
            <div className="result-cards">
              <ResultSearchCard />
              <ResultSearchCard />
              <ResultSearchCard />
              <ResultSearchCard />
              <ResultSearchCard />
              <ResultSearchCard />
              <ResultSearchCard />
              <ResultSearchCard />
              <ResultSearchCard />
              {showMore && (
                <>
                  <ResultSearchCard />
                  <ResultSearchCard />
                  <ResultSearchCard />
                  <ResultSearchCard />
                  <ResultSearchCard />
                  <ResultSearchCard />
                  <ResultSearchCard />
                  <ResultSearchCard />
                  <ResultSearchCard />
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
