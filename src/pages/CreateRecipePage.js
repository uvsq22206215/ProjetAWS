import { database } from "../utils/firebase";
import { useState } from "react";
import { getDocs, addDoc, collection, getFirestore } from "firebase/firestore";
import { IconButton } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RecipeCard from "../components/RecipeCard";
/* 
"name":"Salade César",
  "prepTime":"PT15M",
  "cookTime":"PT5M",
  "totalTime":"PT20M",a
  "recipeYield":"4 personnes",
  "recipeIngredient":[
    {"name" : "c.à.c de moutarde", "quantity" : 1/8},
    {"name" : "trait de tabasco", "quantity" : 1/4},
    {"name" : "cl d'huile", "quantity" : 15/4},
    {"name" : "poivre", "quantity" : NaN},
    {"name" : "sel", "quantity" : NaN},
    {"name" : "oeuf", "quantity" : 1/4},
    {"name" : "g de parmesan râpé", "quantity" : 25/4}, 
    {"name" : "c.à.c de câpres", "quantity" : 2/4},
    {"name" : "citron", "quantity" : NaN},
    {"name" : "gousse d'ail pelée", "quantity" : 1/4}, 
    {"name" : "c.à.s d'huile", "quantity" : 2/4},
    {"name" : "coeurs de laitue effeuillé", "quantity" : 2/4}, 
    {"name" : "g de Parmesan (copeaux)", "quantity" : 25/4},
    {"name" : "tranches de pain écroûtées", "quantity" : 4/4}
  ],
  "recipeInstructions":[
    "Faites dorer le pain, coupé en cubes,3 min dans un peu d'huile. ",
    "Déchirez les feuilles de romaine dans un saladier, et ajoutez les croûtons préalablement épongés dans du papier absorbant. ",
    "Préparez la sauce :\nFaites cuire l'oeuf 1 min 30 dans l'eau bouillante, et rafraîchissez-le.",
    "Cassez-le dans le bol d'un mixeur et mixez, avec tous les autres ingrédients; rectifiez l'assaissonnement et incorporez à la salade. ",
    "Décorez de copeaux de parmesan, et servez."],
  "author":"patricia_204",
  "description":"moutarde,tabasco,huile,poivre,sel,oeuf,parmesan râpé,câpres,citron,ail,huile,laitue,Parmesan,pain",
  "keywords":"Salade César,moutarde,tabasco,huile,poivre,sel,oeuf,parmesan râpé,câpres,citron,ail,huile,laitue,Parmesan,pain,salade Cesar,très facile,bon marché,rapide",
  "recipeCuisine":"Entrée",
  "aggregateRating":{"@type":"AggregateRating",
    "reviewCount":109,
    "ratingValue":4.7},
    "tags":[
      {
        nameTag: "🇮🇹 Italien",
        background: "white",
        textColor : "black"
      },
      {
        nameTag: "🌿 Vegan",
        background: "green",
        textColor : "white"
      },
      {
        nameTag: "🕒 Moins de 30 min",
        background: "grey",
        textColor : "white"
      },
      {
        nameTag: "🟢 Facile",
        background: "#f89837",
        textColor: "white"
      }
    ]
*/

function CreateRecipePage() {


  // const pushRecipe = () => {
  //   listeRecette.forEach(function(obj) {
  //     addDoc(collection(database, "recipe"), {
  //       name : obj.name,
  //       image : obj.image,
  //       cookTime : obj.cookTime,
  //       prepTime : obj.prepTime,
  //       totalTime : obj.totalTime,
  //       numberPersons : obj.numberPersons,
  //       recipeIngredient : obj.recipeIngredient,
  //       recipeInstructions : obj.recipeInstructions,
  //       categorie : obj.categorie,
  //       author : obj.author
  //     }).then(function(docRef) {
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
          <div>
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
          <div>
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
    </div>
  );
}

export default CreateRecipePage;
