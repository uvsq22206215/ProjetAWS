import logo from './logo.svg';
import './App.css';
import './RecipeCard.css';
import RecipeCard from './RecipeCard';

function App() {
  return (
    <div className="App">
      <div className='recipe-cards'>
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </div>
    </div>
  );
}

export default App;
