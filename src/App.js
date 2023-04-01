import './App.css';
import './RecipeCard.css';
import RecipeCard from './RecipeCard';
import Header from './Header'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='recipe-cards'>
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </div>
    </div>

  );
}

export default App;
