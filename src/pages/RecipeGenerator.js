import Header from "../components/Header";
import Footer from "../components/Footer";
import RecipeCard from "../components/RecipeCard";
import { useState } from "react";
import { collection, query, limit, getDocs, where, addDoc } from "firebase/firestore";
import { database } from "../utils/firebase";
import "../assets/css/RecipeGenerator.css"

function RecipeGenerator() {

  const [inputs, setInputs] = useState(["", "", ""]);

  const handleInputChange = (index, input) => {
    let tmp = inputs;
    tmp[index] = input;
    setInputs(tmp);
  };


  const [recipes, setRecipes] = useState([]);

  const generateRecipes = () => {
    let validInputs = inputs.filter((input) => input != "");
    
    if (validInputs.length > 0) {
      let q = query(collection(database, "recipe"), where("keywords", "array-contains-any", validInputs), limit(21));
      let tmpRecipes = [];
      getDocs(q)
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          tmpRecipes.push(doc.data());
          console.log(doc.data())
        });
        setRecipes(tmpRecipes);
        console.log("Received from database", tmpRecipes);
      })
      .catch((error) => {
        console.error(error);
      });
    } else {
      // Erreur
      console.error("Erreur");
    }
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
              {recipes.map((recipe) => (
                <RecipeCard image={recipe.image} title={recipe.name} link={"/recipe?id=" + recipe.id} />
              ))}
            </div>
        <Footer />

      </div>
    </div>
  );
}


export default RecipeGenerator;