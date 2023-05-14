import "../assets/css/RecipeContent.css";
import { useState, useEffect } from "react";
import { Button, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { UserAuth } from "../context/Usercontext";
import { database } from "../utils/firebase";
import { useNavigate } from "react-router";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  collection,
  deleteDoc,
  doc,
  query,
  where,
  getDocs,
  addDoc,
  limit,
  and,
} from "firebase/firestore";
function RecipeContent({ recipe }) {
  let history = useNavigate();
  const [nbPersons, setNbPersons] = useState(
    parseInt(recipe.data().numberPersons)
  );
  const { usr } = UserAuth();
  const tags = [];

  const [userdetail, setUserdetail] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const[isFavorite, setIsFavorite] = useState(false);
  const[favoriteId, setFavoriteId] = useState(null);

  const addClassRedFill = (id) => {
    const element = document.getElementById(id);
    element.classList.add("redFill");
  }

  const removeClassRedFill = (id) => {
    const element = document.getElementById(id);
    element.classList.remove("redFill");
  }
  

  const checkIfAssociationExists = async () => {
    await getDocs(
      query(
        collection(database, "favorite"),
        where("user", "==", userdetail.id), where("recipe", "==", recipe.id)
      ),
    ).then((snapshot) => {
        if (snapshot.empty) {
          console.log(`No document found in collection`);
          setIsFavorite(false);
          removeClassRedFill(recipe.id);
        } else {
          console.log(`Document found in collection.`);
          snapshot.docs.map((favorite, id)=> (setFavoriteId(favorite.id)));
          setIsFavorite(true);
          addClassRedFill(recipe.id);
        }
      })
      .catch((error) => {
        console.error(error);
        setIsFavorite(false);
        removeClassRedFill(recipe.id);
      });
  };

  const addToFavorite = async () => {
    checkIfAssociationExists();
    if(!isFavorite){
      const favorite = {recipe: recipe.id, user: userdetail.id}
      addDoc(collection(database, "favorite"), favorite)
        .then(function (docRef) {
          console.log("Document written with ID: ", docRef.id);
          addClassRedFill(recipe.id);
        })
        .catch(function (error) {
          console.error("Error adding document: ", error);
        });
    }
    else {
      const documentRef = doc(collection(database, "favorite"), favoriteId);
      await deleteDoc(documentRef);
      checkIfAssociationExists();
    }
  };

  const handleDelete = async () => {
    try {
      const documentRef = doc(collection(database, "recipe"), recipe.id);
      await deleteDoc(documentRef);
      console.log("Instance supprimée avec succès !");
      history("/Mes-recettes");
    } catch (error) {
      console.error("Erreur lors de la suppression de l'instance : ", error);
    }
  };
  if (recipe.data().cost) {
    tags.push({
      name: "€ " + recipe.cost,
      background: "#cbc300",
      color: "white",
    });
  }
  if (recipe.data().difficulty) {
    tags.push({
      name: recipe.data().difficulty,
      background: "#596bc3",
      color: "white",
    });
  }

  useEffect(() => {
    removeClassRedFill(recipe.id);
    checkIfAssociationExists();}, []);

  return (
    <div>
      <div id="recipe-header">
        <div id="recipeResume">
          <div id="recipeName">
            <h1>{recipe.data().name}</h1>
          </div>
          <div id="recipeRating"></div>
        </div>
        <div id="recipeTags">
          {tags.map((tag, index) => (
            <div className="tagContainer">
              <div
                className="tag"
                style={{
                  backgroundColor: tag.background,
                  borderColor:
                    tag.background === "white" ? "solid" : tag.background,
                  color: tag.color,
                }}
              >
                {tag.name}
              </div>
            </div>
          ))}
          <div className="printer-btn">
            <Button onClick={() => window.print()}>
              <img alt="printer logo" src="/assets/printer.png"></img>
            </Button>
          </div>
          <div id={recipe.id} className="favorite-btn">
            <i onClick={
                addToFavorite
              }
            >
              <FontAwesomeIcon icon={faHeart} />
            </i>
            <span>liked!</span>
          </div>
        </div>
        <div id="recipePhoto">
          <img src={recipe.data().image} />
        </div>
      </div>
      <div id="recipeContent">
        <div id="container">
          <div id="infoRecipe">
            <div className="containerTime">
              Temps de préparation : {recipe.data().prepTime} minutes
            </div>
            <div className="containerTime">
              Temps de cuisson : {recipe.data().cookTime} minutes
            </div>
            <div id="personsContainer">
              Ingrédients pour
              <div id="numberPersons">{nbPersons}</div>
              personnes
              <div id="moreLessButtons">
                <span
                  id="lessPersonButton"
                  onClick={() => {
                    setNbPersons(Math.max(nbPersons - 1, 1));
                  }}
                >
                  -
                </span>
                <span
                  id="morePersonButton"
                  onClick={() => {
                    setNbPersons(nbPersons + 1);
                  }}
                >
                  +
                </span>
              </div>
              :
            </div>
            <div id="ingredientsList">
              <ul>
                {recipe.data().recipeIngredient.map((ingredient, index) => (
                  <li className="ingredient" key={`ingredient-${index}`}>
                    {isNaN(ingredient.quantity)
                      ? ""
                      : Math.round(ingredient.quantity * nbPersons * 10) / 10 +
                        " "}
                    {ingredient.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div id="descriptionRecipe">
            <div id="recipeSteps">
              <ul>
                {recipe.data().recipeInstructions.map((instruction, index) => (
                  <li className="step" key={`step-${index}`}>
                    <div className="stepNumber">Etape {index + 1}</div>
                    <div className="stepInstruction">{instruction}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {recipe.data().author === usr.username ? (
            <Stack
              container
              direction="column"
              justifyContent="flex-end"
              alignItems="flex-end"
              mt={10}
            >
              <Button
                onClick={() => {
                  handleDelete();
                }}
              >
                <DeleteIcon
                  sx={{
                    color: "#ff4838",
                  }}
                  fontSize="large"
                ></DeleteIcon>
              </Button>
            </Stack>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default RecipeContent;
