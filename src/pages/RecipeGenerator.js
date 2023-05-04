import Header from "../components/Header";
import Footer from "../components/Footer";
import RecipeCard from "../components/RecipeCard";
import { useState } from "react";
import { collection, query, getDocs, where } from "firebase/firestore";
import { database } from "../utils/firebase";
import "../assets/css/RecipeGenerator.css"

function RecipeGenerator() {

  const [inputs, setInputs] = useState(["", "", ""]);

  const handleInputChange = (index, input) => {
    let tmp = [...inputs];
    tmp[index] = input;
    setInputs(tmp);
  };


  const [recipes, setRecipes] = useState([]);

  const intersectionRecipes = (recipes1, recipes2) => {
    let tmp = [];
    console.log("args :", recipes1.rec, recipes2.rec);
    for (let i = 0; i < recipes1.rec.length; i++) {
      for (let k = 0; k < recipes2.rec.length; k++) {
        if ((recipes1.rec)[i].data().name === (recipes2.rec[k]).data().name) {
          tmp.push(recipes1.rec[i]);
        }
      }
    }
    if (tmp.length === 0) {
      console.log("intersection vide");
    } else {
      console.log("tmp :", tmp);
    }

    return {ingrNames : [...new Set([...recipes1.ingrNames, ...recipes2.ingrNames])], rec : [...tmp]};
  };

  const generateRecipes = async () => {
    let validInputs = inputs.filter((input) => input !== "");
    
    const tmpRecipes = [];
    for (let i = 0; i < validInputs.length; i++) {
      tmpRecipes.push({ingrNames : [validInputs[i]], rec : []});
      await getDocs(query(collection(database, "recipe"), where("keywords", "array-contains", validInputs[i])))
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          tmpRecipes[i].rec.push(doc);
        });
      })
      .catch((error) => {
        console.error(error);
      });
    }

    // tmpRecipes contient pour chaque ingrédient mis en input les résultats de la BD
    // A nous de faire l'intersection
    let result = null;
    for (let i = 0; i < tmpRecipes.length; i++) {
      if (result == null) {
        result = tmpRecipes[0];
      } else {
        result = intersectionRecipes(result, tmpRecipes[i])
      } 
      console.log("resultat intersection", i, ":", result);
    }
    if (result != null) {
      setRecipes(result);
    }
    //console.log("résultat intersection des 3 :", result);
  }

  return (
    <div id="RecipeGeneratorRoot">
      <Header />
      <div id="RecipeGeneratorContent">
        <div id="ingredients-inputs">
          <input
            className="ingredientInput"
            placeholder="Nom de l'ingrédient"
            onChange={(e) => handleInputChange(0, e.target.value)}
          >
          </input>
          <input
            className="ingredientInput"
            placeholder="Nom de l'ingrédient"
            onChange={(e) => handleInputChange(1, e.target.value)}
          >
          </input>
          <input
            className="ingredientInput"
            placeholder="Nom de l'ingrédient"
            onChange={(e) => handleInputChange(2, e.target.value)}
          >
          </input>


        </div>
        <button onClick={generateRecipes}>Générer recettes</button>
        <div className="recipe-cards">
              {recipes.rec && recipes.rec.map((recipe) => (
                <RecipeCard image={recipe.data().image} title={recipe.data().name} link={"/recipe?id=" + recipe.id} />
              ))}
            </div>
        <Footer />

      </div>
    </div>
  );
}


export default RecipeGenerator;