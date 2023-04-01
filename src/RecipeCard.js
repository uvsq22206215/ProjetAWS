
function RecipeCard() {
  return (
    <div className="recipe-card">
      <div className="card-image">
        <img src="/assets/card-image.jpg" alt="card-image"/>
      </div>
      <div className="card-desc">
        <div>
          <h1 className="card-title">Title</h1>
          <p className="class-description">Lorem ipsum demet dolor...</p>
          <a class="card-btn" href="#">View Recipe</a>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;