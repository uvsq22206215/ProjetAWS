import "../assets/css/RecipeContent.css";
import { useState } from "react";
import { Button, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { UserAuth } from "../context/Usercontext";
import { database } from "../utils/firebase";
import { useNavigate } from "react-router";
import {
  collection,
  deleteDoc,
  doc,
  query,
  where,
  getDocs,
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

          {recipe.data().author === usr.data().username ? (
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
