import "../assets/css/CreateRecipePage.css";
import { database, storage } from "../utils/firebase";
import { useState } from "react";
import { addDoc, collection, setDoc, doc } from "firebase/firestore";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { UserAuth } from "../context/Usercontext";
import { useNavigate } from "react-router";

import { getDownloadURL, uploadBytesResumable, ref } from "firebase/storage";
import { Button, Stack } from "@mui/material";

function CreateRecipePage() {
  const { usr } = UserAuth();
  const [docRef, setDocRef] = useState(null);
  let history = useNavigate();

  const pushRecipe = (recipe) => {
    console.log(docRef);
    setDoc(collection(database, "recipe", docRef), recipe)
      .then(function (docRef) {
        //console.log("Document written with ID: ", docRef.id);
        history("/recipe?id=" + docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  };

  const [category, setCategory] = useState("Plat principal");
  const handleChangeSelectCategory = (e) => {
    switch (e.target.value) {
      case "platPrincipal":
        setCategory("Plat principal");
        break;
      case "moyenne":
        setCategory("Accompagnement");
        break;
      case "boisson":
        setCategory("Boisson");
        break;
      case "confiserie":
        setCategory("Confiserie");
        break;
      case "amuseGueule":
        setCategory("Amuse-gueule");
        break;
      default:
        break;
    }
  };

  const [cost, setCost] = useState("Bon marché");
  const handleChangeSelectCost = (e) => {
    switch (e.target.value) {
      case "bonMarche":
        setCost("Bon marché");
        break;
      case "moyen":
        setCost("Moyen");
        break;
      case "assezCher":
        setCost("Assez cher");
        break;
      default:
        break;
    }
  };

  const [difficulty, setDifficulty] = useState("Très facile");
  const handleChangeSelectDifficulty = (e) => {
    switch (e.target.value) {
      case "tresFacile":
        setDifficulty("Très facile");
        break;
      case "moyenne":
        setDifficulty("Moyenne");
        break;
      case "difficile":
        setDifficulty("Difficile");
        break;
      default:
        break;
    }
  };

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
    { quantity: "", name: "" },
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
  const [image, setImage] = useState();

  const [codeError, setCodeError] = useState("");

  const handleCreation = async () => {
    const reference = await doc(collection(database, "recipe"));
    setDocRef(reference.id);
    const promises = [];
    console.log(reference.id);
    const imageRef = ref(storage, "images/" + reference.id);
    promises.push(
      uploadBytesResumable(imageRef, image).then((uploadResult) => {
        return getDownloadURL(uploadResult.ref);
      })
    );
    const photos = await Promise.all(promises);
    setCodeError("");
    let ingrFiltered = listIngredients.filter((e) => e.name !== "");
    let instFiltered = instructions.filter((e) => e !== "");
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
    if (instFiltered.length === 0) {
      setCodeError("La recette doit contenir au moins une instruction.");
      return;
    }
    if (nbPersonnes == null) {
      setCodeError("Le nombre de personnes doit être renseigné.");
      return;
    }
    if (ingrFiltered.length === 0) {
      setCodeError("La recette doit contenir au moins un ingrédient.");
      return;
    }
    // TODO : check si l'utilisateur est connecté, generer les keywords

    listIngredients.forEach((ingr) => {
      ingr.quantity = parseInt(ingr.quantity) / nbPersonnes;
    });
    const recipe = {
      author: usr.data().username,
      categorie: category,
      cookTime: parseInt(cookTime),
      cost: cost,
      difficulty: difficulty,
      image: photos,
      name: name,
      numberPersons: parseInt(nbPersonnes),
      prepTime: parseInt(prepTime),
      recipeIngredient: ingrFiltered,
      recipeInstructions: instFiltered,
      totalTime: parseInt(prepTime) + parseInt(cookTime),
    };
    addDoc(collection(database, "recipe"), recipe)
      .then(function (docRef) {
        //console.log("Document written with ID: ", docRef.id);
        history("/recipe?id=" + docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  };

  return (
    <div id="createPage">
      <Header />
      <div id="resumePage">
        <h4 id="titleCreationPage">Création de recette</h4>
        <ul id="descriptionCreationPage">
          <li>Partagez vos recettes au monde entier !</li>
          <li>
            Contribuez à une base de données de plus de mille (et une) recettes
            !
          </li>
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
                <button
                  className="buttonMoreLess"
                  onClick={() => removeInstruction(index)}
                >
                  -
                </button>
              ) : (
                <button
                  className="buttonMoreLess"
                  onClick={() => setInstructions([...instructions, ""])}
                >
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
        <label id="leaveEmpty">
          Laisser le champ quantité vide si nécéssaire.
        </label>
        <div id="listIngredients">
          {listIngredients.map((ingredient, index) => (
            <div className="ingredientInput" key={"ingredient-" + index}>
              <input
                name="quantity"
                className="ingredientQuantityInput"
                type="number"
                placeholder="Quantité"
                onChange={(e) => handleChangeIngr(e, index)}
                value={listIngredients[index].quantity || ""}
              />
              <input
                name="name"
                type="text"
                placeholder="Ingrédient"
                onChange={(e) => handleChangeIngr(e, index)}
                value={listIngredients[index].name || ""}
              />
              {index ? (
                <button
                  onClick={() => removeIngr(index)}
                  className="buttonMoreLess"
                >
                  -
                </button>
              ) : (
                <button
                  className="buttonMoreLess"
                  onClick={() =>
                    setListIngredients([
                      ...listIngredients,
                      { quantity: "", name: "" },
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
            <select
              name="difficultyOption"
              className="createOptions"
              onChange={handleChangeSelectDifficulty}
            >
              <option value="tresFacile">Très facile</option>
              <option value="moyenne">Moyenne</option>
              <option value="difficile">Difficile</option>
            </select>
          </div>
          <div className="createSelectInput">
            <label>Coût :</label>
            <select
              name="costOption"
              className="createOptions"
              onChange={handleChangeSelectCost}
            >
              <option value="bonMarche">Bon marché</option>
              <option value="moyen">Moyen</option>
              <option value="assezCher">Assez cher</option>
            </select>
          </div>
          {/* Possibilité de rendre les catégories dynamiques ici */}
          <div className="createSelectInput">
            <label>Catégorie :</label>
            <select
              name="categoryOption"
              className="createOptions"
              onChange={handleChangeSelectCategory}
            >
              <option value="platPrincipal">Plat principal</option>
              <option value="accompagnement">Accompagnement</option>
              <option value="boisson">Boisson</option>
              <option value="confiserie">Confiserie</option>
              <option value="amuseGueule">Amuse-gueule</option>
            </select>
          </div>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Button
              id="createRecipeButton"
              variant="contained"
              component="label"
              sx={{ backgroundColor: "orange"}}
            >
              Uploader une image
              <input
                hidden
                accept="image/*"
                multiple
                type="file"
                onChange={(event) => setImage(event.currentTarget.files[0])}
              />
            </Button>
          </Stack>
          {codeError !== "" && <div>{codeError}</div>}
          <button id="createRecipeButton" onClick={handleCreation}>
            Créer la recette
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CreateRecipePage;
