import RecipeCard from "./RecipeCard";
import '../assets/css/RecipeContent.css'
import { useEffect, useState } from "react";
import { database } from "../utils/firebase";
import { doc, getDocs, query, limit, collection } from "firebase/firestore";
import RecipePage from "../pages/RecipePage";

function RecipeContent({ recipe }) {

  const [nbPersons, setNbPersons] = useState(parseInt(recipe.numberPersons));
  const [relatedRecipesLoaded, setRelRecLoaded] = useState(false);
  const [relRecipes, setRelRecipes] = useState([]);

  useEffect(() => {
    if (!relatedRecipesLoaded) {
      setRelRecLoaded(true);
      const q = query(collection(database, "recipe"), limit(3));
      getDocs(q)
        .then((snapshot) => setRelRecipes(snapshot.docs))
        .catch((e) => console.log("Erreur à catch", e));
    }
  });

  return (
    <div id='recipeContent'>
      <div id='container'>
        <div id='infoRecipe'>
          <div className='containerTime'>Temps de préparation : {recipe.prepTime}</div>
          <div className='containerTime'>Temps de cuisson : {recipe.cookTime}</div>
          <div id='personsContainer'>Ingrédients pour
            <div id='numberPersons'>{nbPersons}</div>
            personnes
            <div id='moreLessButtons'>
              <span id='lessPersonButton' onClick={() => { setNbPersons(Math.max(nbPersons - 1, 1)); }}>-</span>
              <span id='morePersonButton' onClick={() => { setNbPersons(nbPersons + 1); }}>+</span>
            </div>
            :
          </div>
          <div id='ingredientsList'>
            <ul>
              {recipe.recipeIngredient.map((ingredient) => (
                <li>
                  {isNaN(ingredient.quantity) ? '' : Math.round((ingredient.quantity * nbPersons) * 10) / 10 + ' '}
                  {ingredient.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div id='descriptionRecipe'>
          <div id='recipeResume'>
            <div id='recipeName'>{recipe.name}</div>
            <div id='recipeRating'></div>
          </div>
          <div id='recipePhoto'><img src={recipe.image} /></div>
          <div id='recipeTags'>
            {/* {recipe.tags.map((tag, index) => (
              <div className='tag' style={{
                backgroundColor: tag.background,
                borderColor: tag.background === "white" ? "solid" : tag.background,
                color: tag.textColor
              }}>{tag.nameTag}</div>
            ))} */}
          </div>
          <div id='recipeSteps'>
            <ul>
              {recipe.recipeInstructions.map((instruction, index) => (
                <li className='step' key={`step-${index}`}>
                  <div className='stepNumber'>Etape {index + 1}</div>
                  <div className='stepInstruction'>{instruction}</div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
      <div>
        <h1 id='relatedRecipesTitle'>Recettes associées</h1>
        {true &&
          <div id='relatedRecipes'>
            {relRecipes.map((recipe) => (
              <RecipeCard title={recipe.data().name} image={recipe.data().image} link={'/recipe?id=' + recipe.id} description=''/>
            ))}
          </div>
        }
      </div>
    </div>
  );
}

export default RecipeContent;