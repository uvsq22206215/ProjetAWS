import RecipeCard from "./RecipeCard";
import "../assets/css/RecipeContent.css";
import { useEffect, useState } from "react";
import { database } from "../utils/firebase";
import { doc, getDocs, query, limit, collection } from "firebase/firestore";
import RecipePage from "../pages/RecipePage";
import RelatedRecipes from "./RelatedRecipes";
import { Box, Button, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconContext } from "react-icons";
import { UserAuth } from "../context/Usercontext";

function RecipeContent({ recipe }) {
  const [nbPersons, setNbPersons] = useState(parseInt(recipe.numberPersons));
  const { usr } = UserAuth();
  const tags = [];

  if (recipe.cost) {
    tags.push({
      name: "€ " + recipe.cost,
      background: "#cbc300",
      color: "white",
    });
  }
  if (recipe.difficulty) {
    tags.push({
      name: recipe.difficulty,
      background: "#596bc3",
      color: "white",
    });
  }

  return (
    <div id="recipeContent">
      <div id="container">
        <div id="infoRecipe">
          <div className="containerTime">
            Temps de préparation : {recipe.prepTime} minutes
          </div>
          <div className="containerTime">
            Temps de cuisson : {recipe.cookTime} minutes
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
              {recipe.recipeIngredient.map((ingredient, index) => (
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
          <div id="recipeResume">
            <div id="recipeName">{recipe.name}</div>
            <div id="recipeRating"></div>
          </div>
          <div id="recipeTags">
            {tags.map((tag, index) => (
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
            ))}
          </div>
          <div id="recipePhoto">
            <img src={recipe.image} />
          </div>
          <div id="recipeSteps">
            <ul>
              {recipe.recipeInstructions.map((instruction, index) => (
                <li className="step" key={`step-${index}`}>
                  <div className="stepNumber">Etape {index + 1}</div>
                  <div className="stepInstruction">{instruction}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {recipe.author === usr.data().username ? (
          <Stack
            container
            direction="column"
            justifyContent="flex-end"
            alignItems="flex-end"
            mt={10}
          >
            <Button>
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
  );
}

export default RecipeContent;
