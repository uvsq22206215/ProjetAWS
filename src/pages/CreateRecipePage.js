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

  const [name, setName] = useState();
  const [cookTime, setCookTime] = useState();
  const [prepTime, setPrepTime] = useState();

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

  return (
    <div id="createPage">
      <Header />
      {
        //console.log(name, prepTime, cookTime, instructions, listIngredients)
      }
      <div>Création de recette</div>
      <input
        placeholder="Nom de la recette"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Temps de préparation"
        onChange={(e) => setPrepTime(e.target.value)}
      />
      <input
        placeholder="Temps de cuisson"
        onChange={(e) => setCookTime(e.target.value)}
      />
      <div id="listInstructions">
        {instructions.map((instruction, index) => (
          <div key={"instruction-"+index}>
            <input
              placeholder={"Instruction " + index}
              onChange={(e) => handleChangeIns(e, index)}
              value={instructions[index]}
            />
            {index ? (
              <button onClick={() => removeInstruction(index)}>-</button>
            ) : (
              <button onClick={() => setInstructions([...instructions, ""])}>
                +
              </button>
            )}
          </div>
        ))}
      </div>
      Laisser le champ quantité vide si nécéssaire.
      <div id="listIngredients">
        {listIngredients.map((ingredient, index) => (
          <div key={"ingredient-" + index}>
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
              <button onClick={() => removeIngr(index)}>-</button>
            ) : (
              <button
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
      </div>
      {/* <button onClick={pushRecipe}>PUSH</button> */}
    </div>
  );
}

export default CreateRecipePage;
