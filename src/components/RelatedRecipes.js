import '../assets/css/RelatedRecipes.css'
import { collection, getDocs, limit, query } from "firebase/firestore";
import { database } from "../utils/firebase";
import { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";

// TODO : ajouter prop qui donne les attributs de séléction pour la requête
function RelatedRecipes({ title }) { 
  const [relRecipes, setRelRecipes] = useState([]);

  useEffect(() => {
    const q = query(collection(database, "recipe"), limit(3));
    console.log("request related recipes sent");
    getDocs(q)
      .then((snapshot) => setRelRecipes(snapshot.docs))
      .catch((e) => console.log("Erreur"));
  }, []);


  return (
    <div>
      <h1 id='relatedRecipesTitle'>{title}</h1>
      {true &&
        <div id='relatedRecipes'>
          {relRecipes.map((recipe, index) => (
            <RecipeCard key={'related-recipe'+index}title={recipe.data().name} image={recipe.data().image} link={'/recipe?id=' + recipe.id} description='' />
          ))}
        </div>
      }
    </div>
  );
}

export default RelatedRecipes;