import { collection, getDocs, limit, query } from "firebase/firestore";
import { database } from "../utils/firebase";
import { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";


function RelatedRecipes({ title }) {
  const [relRecipes, setRelRecipes] = useState([]);
  const [relatedRecipesLoaded, setRelRecLoaded] = useState(false);

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
    <div>
        <h1 id='relatedRecipesTitle'>{title}</h1>
        {true &&
          <div id='relatedRecipes'>
            {relRecipes.map((recipe) => (
              <RecipeCard title={recipe.data().name} image={recipe.data().image} link={'/recipe?id=' + recipe.id} description=''/>
            ))}
          </div>
        }
      </div>
  );
}

export default RelatedRecipes;