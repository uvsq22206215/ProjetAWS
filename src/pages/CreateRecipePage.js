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

  return (
    <div id="createPage">
      <Header />
      <div id="createForm">
        <h4 id='createTitle'>Création de recette</h4>
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
        <div id="listInstructions">
          {instructions.map((instruction, index) => (
            <div className="instructionInput" key={"instruction-" + index}>
              <input
                placeholder={"Instruction " + index}
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
        <label>Laisser le champ quantité vide si nécéssaire.</label>
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
        {/* <button onClick={pushRecipe}>PUSH</button> */}
        </div>
      </div>
      <Footer />
    </div>

  );
}

export default CreateRecipePage;
