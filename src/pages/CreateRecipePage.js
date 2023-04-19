import "../assets/css/CreateRecipePage.css"
import { database } from "../utils/firebase";
import { useState } from "react";
import { getDocs, addDoc, collection, getFirestore } from "firebase/firestore";
import { IconButton } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RecipeCard from "../components/RecipeCard";

function CreateRecipePage() {

  
  
  // const pushRecipe = () => {
    //   listeRecette.forEach(function(obj) {
      //     addDoc(collection(database, "recipe"), obj).then(function(docRef) {
        //       console.log("Document written with ID: ", docRef.id);
        //     })
        //     .catch(function(error) {
          //         console.error("Error adding document: ", error);
          //     });
    //   });
    // };
    
    const [instructions, setInstructions] = useState([""]);
    
    const removeInstruction = (index) => {
      let newList = [...instructions];
      newList.splice(index, 1);
      setInstructions(newList);
    };
    
    const handleChangeIns = (e, index) => {
      let tmp = [...instructions];
      tmp[index] = e.target.value;
      setInstructions(tmp);
    };

    const [listIngredients, setListIngredients] = useState([
      { quantite: "", nomIngr: "" },
  ]);

  const removeIngr = (index) => {
    let newList = [...listIngredients];
    newList.splice(index, 1);
    setListIngredients(newList);
  };
  
  const handleChangeIngr = (e, index) => {
    let tmp = [...listIngredients];
    tmp[index][e.target.name] = e.target.value;
    setListIngredients(tmp);
  };
  
  const [name, setName] = useState();
  const [cookTime, setCookTime] = useState();
  const [prepTime, setPrepTime] = useState();
  const [nbPersonnes, setNbPersonnes] = useState();
  
  const [codeError, setCodeError] = useState("");

  const handleCreation = () => {
    setCodeError("");
    let ingrFiltered = listIngredients.filter((e) => e.nomIngr != "");
    let instFiltered = instructions.filter((e) => e != "");
    if (name == null) {
      setCodeError("La recette doit être nomée.");
      return;
    }
    if (prepTime == null) {
      setCodeError("Le temps de préparation (même nul) doit être renseigné.");
      return;
    }
    if (cookTime == null) {
      setCodeError("Le temps de cuisson (même nul) doit être renseigné.");
      return;
    }
    if (instFiltered.length == 0) {
      setCodeError("La recette doit contenir au moins une instruction.");
      return;
    }
    if (nbPersonnes == null) {
      setCodeError("Le nombre de personnes doit être renseigné.");
      return;
    }
    if (ingrFiltered.length == 0) {
      setCodeError("La recette doit contenir au moins un ingrédient.");
      return;
    }
    // TODO : Push la recette dans la base de données
  };



  return (
    <div id="createPage">
      <Header />
      <div id="resumePage">
        <h4 id="titleCreationPage">Création de recette</h4>
        <ul id="descriptionCreationPage">
          <li>Partagez vos recettes au monde entier !</li>
          <li>Contribuez à une base de données de plus de mille (et une) recettes !</li>
        </ul>
      </div>
      <div id="createForm">
        <div className="createInput">
          <input
            placeholder="Nom de la recette"
            onChange={(e) => setName(e.target.value)}
            />
        </div>
        <div className="createInput">
          <input
            type="number"
            placeholder="Temps de préparation (en minutes)"
            onChange={(e) => setPrepTime(e.target.value)}
            />
        </div>
        <div className="createInput">
          <input
            type="number"
            placeholder="Temps de cuisson (en minutes)"
            onChange={(e) => setCookTime(e.target.value)}
            />
        </div>
        <div id="listInstructions">
          {instructions.map((instruction, index) => (
            <div className="instructionInput" key={"instruction-" + index}>
              <input
                placeholder={"Instruction " + (index + 1)}
                onChange={(e) => handleChangeIns(e, index)}
                value={instructions[index]}
              />
              {index ? (
                <button className="buttonMoreLess" onClick={() => removeInstruction(index)}>-</button>
              ) : (
                <button className="buttonMoreLess" onClick={() => setInstructions([...instructions, ""])}>
                  +
                </button>
              )}
            </div>
          ))}
        </div>
        <div className="createInput">
          <input
            type="number"
            placeholder="Nombre de personnes"
            onChange={(e) => setNbPersonnes(e.target.value)}
          />
        </div>
        <label id="leaveEmpty">Laisser le champ quantité vide si nécéssaire.</label>
        <div id="listIngredients">
          {listIngredients.map((ingredient, index) => (
            <div className="ingredientInput" key={"ingredient-" + index}>
              <input
                name="quantite"
                type="text"
                placeholder="Quantité"
                onChange={(e) => handleChangeIngr(e, index)}
                value={listIngredients[index].quantite || ""}
              />
              <input
                name="nomIngr"
                type="text"
                placeholder="Ingrédient"
                onChange={(e) => handleChangeIngr(e, index)}
                value={listIngredients[index].nomIngr || ""}
              />
              {index ? (
                <button
                  onClick={() => removeIngr(index)}
                  className="buttonMoreLess">
                  -
                </button>
              ) : (
                <button
                  className="buttonMoreLess"
                  onClick={() =>
                    setListIngredients([
                      ...listIngredients,
                      { quantité: "", nomIngr: "" },
                    ])
                  }
                >
                  +
                </button>
              )}
            </div>
          ))}
        <div className="createSelectInput">
          <label>Difficulté :</label>
          <select name="difficultyOption" className="createOptions">
            <option value="tresFacile">Très facile</option>
            <option value="moyenne">Moyenne</option>
            <option value="difficile">Difficile</option>
          </select>
        </div>
        <div className="createSelectInput">
          <label>Coût :</label>
          <select name="costOption" className="createOptions">
            <option value="bonMarche">Bon marché</option>
            <option value="moyen">Moyen</option>
            <option value="assezCher">Assez cher</option>
          </select>
        </div>
        {/* Possibilité de rendre les catégories dynamiques ici */}
        <div className="createSelectInput">
          <label>Catégorie :</label>
          <select name="categoryOption" className="createOptions">
            <option value="platPrincipal">Plat principal</option>
            <option value="accompagnement">Accompagnement</option>
            <option value="boisson">Boisson</option>
            <option value="co+nfiserie">Confiserie</option>
            <option value="amuseGueule">Amuse-gueule</option>
          </select>
        </div>
        {(codeError != "") && <div>{codeError}</div>}
        <button
          id="createRecipeButton"
          onClick={handleCreation}
        >
          Créer la recette
        </button>
        </div>
      </div>
      <Footer />
    </div>

  );
}

export default CreateRecipePage;
