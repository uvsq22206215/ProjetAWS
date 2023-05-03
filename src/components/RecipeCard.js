import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../assets/css/RecipeCard.css'
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function RecipeCard(props) {
  
  const addToFavorite = () => {
    console.log(props.title);
  };

  return (
    <div className="recipe-card">
      <div className="card-image">
        <div className='favorite-btn'>
          <i  onClick={addToFavorite}><FontAwesomeIcon icon={faHeart} /></i>
          <span>liked!</span>
        </div>
        <img src={props.image} alt={props.title}/>
      </div>
      <div className="card-desc">
        <div>
          <h1 className="card-title">{props.title}</h1>
          <p className="class-description">{props.description}</p>
          <a className="card-btn" href={props.link}>Voir la recette</a>
        </div>
      </div>
      
    </div>
  );
}
export default RecipeCard;