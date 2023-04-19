import React from 'react';
import RecipeCard from './RecipeCard';

function SearchResults({ results }) {
  return (
    <div>
      <h2>Résultats de recherche :</h2>
      <div className="recipe-list">
        {results.map((result) => (
          <RecipeCard key={result.id} recipe={result} />
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
