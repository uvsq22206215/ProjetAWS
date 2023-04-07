import '../assets/css/RecipePage.css'
import Header from '../components/Header'
import { useState } from 'react';
import RecipeCard from '../components/RecipeCard';

function RecipePage() {
  
  /*
  champs JSON scrapés utiles
  */
  const recipe = 
  {
  "name":"Salade César",
  "prepTime":"PT15M",
  "cookTime":"PT5M",
  "totalTime":"PT20M",
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
  }
  
  
  const [nbPersons, setNbPersons] = useState(parseInt(recipe.recipeYield))

  return(
    <div id='recipePage'>
      <Header />
      <div id='container'>
        <div id='infoRecipe'>
          <div class='containerTime'>Temps de préparation : {recipe["prepTime"].replace('PT','')}</div>
          <div class='containerTime'>Temps de cuisson : {recipe["cookTime"].replace('PT','')}</div>
          <div id='personsContainer'>Ingrédients pour
            <div id='numberPersons'>{nbPersons}</div>
            personnes 
            <div id='moreLessButtons'>
              <span id='lessPersonButton' onClick={() => {setNbPersons(Math.max(nbPersons - 1, 1));}}>-</span>
              <span id='morePersonButton' onClick={() => {setNbPersons(nbPersons + 1);}}>+</span>
            </div>
            :
          </div>
          <div id='ingredientsList'>
            <ul>
              {recipe["recipeIngredient"].map((ingredient) => (
                <li>
                  {isNaN(ingredient.quantity) ? '' : ingredient.quantity * nbPersons + ' '}
                  {ingredient.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div id='descriptionRecipe'>
          <div id='recipeResume'>
            <div id='recipeName'>{recipe.name}</div>
            <div id='recipeRating'></div>
          </div>
          <div id='recipeTags'>
            {recipe["tags"].map((tag, index) => (
              <div class='tag' style={{
                backgroundColor : tag.background,
                borderColor : tag.background === "white" ? "solid" : tag.background,
                color : tag.textColor
              }}>{tag.nameTag}</div>
            ))}
          </div>
          <div id='recipePhoto'></div>
          <div id='recipeSteps'>
            <ul>
              {recipe["recipeInstructions"].map((instruction, index) => (
                  <li class='step' key={`step-${index}`}>
                    <div class='stepNumber'>Etape {index + 1}</div>
                    <div class='stepInstruction'>{instruction}</div>
                  </li>
                ))}
            </ul>
          </div>

        </div>
      </div>
      <div id='relatedRecipes'>
        <RecipeCard 
          title="Pesto Pasta"
          image="/assets/pesto-pasta.jpg"
          description="This classic Italian dish features spaghetti tossed in a delicious homemade pesto sauce made with fresh basil, garlic, olive oil, and Parmesan cheese."
          link="#"
        />
        <RecipeCard 
          title="Pesto Pasta"
          image="/assets/pesto-pasta.jpg"
          description="This classic Italian dish features spaghetti tossed in a delicious homemade pesto sauce made with fresh basil, garlic, olive oil, and Parmesan cheese."
          link="#"
        />
        <RecipeCard 
          title="Pesto Pasta"
          image="/assets/pesto-pasta.jpg"
          //description="This classic Italian dish features spaghetti tossed in a delicious homemade pesto sauce made with fresh basil, garlic, olive oil, and Parmesan cheese."
          link="#"
        />
      </div>
    </div>
  );
}

export default RecipePage;