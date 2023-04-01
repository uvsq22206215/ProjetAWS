import './App.css';
import './RecipeCard.css';
import RecipeCard from './RecipeCard';
import Header from './Header'

function App() {
  return (
    <div className="App">
      <Header />

      <div id='slider-hp'>

      </div>

      <div id='trending-recipes'>
        <h1 className='block-title'>Trending Recipes</h1>
        <div className='recipe-cards'>
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
        </div>
        <a className='block-link' href="#">View More Recipes</a>
      </div>
      
    </div>

  );
}

export default App;
