function RecipeCard(props) {
  return (
    <div className="recipe-card">
      <div className="card-image">
        <img src={props.image} alt={props.title}/>
      </div>
      <div className="card-desc">
        <div>
          <h1 className="card-title">{props.title}</h1>
          <p className="class-description">{props.description}</p>
          <a className="card-btn" href={props.link}>View Recipe</a>
        </div>
      </div>
    </div>
  );
}
export default RecipeCard;