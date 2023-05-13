import '../assets/css/RelatedRecipes.css'
import { collection, getDocs, limit, query } from "firebase/firestore";
import { database } from "../utils/firebase";
import { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";


// Le prop filters permet de séléctionner des filtres de recherche
// Utile pour par exemple séléctionner rapidement des recettes d'un seul utilisateur
// On passe ainsi en paramètre filters = [{attribut : "author", op : "==", value : "toto"}]
// On peut ajouter plusieurs filtres, ex : les desserts d'un utilisateur donné
function RelatedRecipes({ title, maxLimit, filters }) { 
  const [relRecipes, setRelRecipes] = useState([]);

  useEffect(() => {
    const q = query(collection(database, "recipe"), limit(maxLimit ? maxLimit : 3));
    getDocs(q)
      .then((snapshot) => setRelRecipes(snapshot.docs))
      .catch((e) => console.error(e));
  }, []);


  return (
    <div id="related-recipes-block">
      <h1 id='relatedRecipesTitle'>{title}</h1>
      {true &&
        <div id='relatedRecipes'>
          {relRecipes.map((recipe, index) => (
            <RecipeCard 
              key={'related-recipe-' + index}
              title={recipe.data().name}
              image={recipe.data().image}
              id={recipe.id}
              link={'/recipe?id=' + recipe.id}
              description=''
            />
          ))}
        </div>
      }
    </div>
  );
}

export default RelatedRecipes;