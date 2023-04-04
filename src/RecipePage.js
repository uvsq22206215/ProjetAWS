import './RecipePage.css'
import Header from './Header'

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
"recipeIngredient":["1/2 c.à.c de moutarde",
  "1 trait de tabasco",
  "15 cl d'huile",
  "poivre",
  "sel",
  "1 oeuf",
  "25 g de parmesan râpé",
  "2 c.à.c de câpres",
  "citron",
  "1 gousse d'ail pelée",
  "2 c.à.s d'huile",
  "2 coeurs de laitue effeuillé",
  "25 g de Parmesan (copeaux)",
  "4 tranches de pain écroûtées"],
"recipeInstructions":[{"@type":"HowToStep",
  "text":"Faites dorer le pain,coupé en cubes,3 min dans un peu d'huile. "},
  {"@type":"HowToStep",
  "text":"Déchirez les feuilles de romaine dans un saladier,et ajoutez les croûtons préalablement épongés dans du papier absorbant. "},
  {"@type":"HowToStep",
  "text":"Préparez la sauce :\nFaites cuire l'oeuf 1 min 30 dans l'eau bouillante,et rafraîchissez-le."},
  {"@type":"HowToStep",
  "text":"Cassez-le dans le bol d'un mixeur et mixez,avec tous les autres ingrédients; rectifiez l'assaissonnement et incorporez à la salade. "},
  {"@type":"HowToStep",
  "text":"Décorez de copeaux de parmesan,et servez."}],
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
      background: "white"
    },
    {
      nameTag: "🕒Moins de 30 min",
      background: "grey"
    },
    {
      nameTag: "🌿 Vegan",
      background: "green"
    },
  ]
}




function RecipePage() {
  return(
    <div id='recipePage'>
      <Header />
      <div id='container'>
        <div id='infoRecipe'>
          <div class='containerTime'>Temps de préparation : {recipe["prepTime"]}</div>
          <div class='containerTime'>Temps de cuisson : {recipe["cookTime"]}</div>
          <div id='personsContainer'>Ingrédients pour {recipe.recipeYield}
            <div id='morePersonButton'>+</div>
            <div id='lessPersonButton'>-</div>
          </div>
          <div id='ingredientsList'>
            <ul>
              {recipe["recipeIngredient"].map((ingredient) => (
                <li>{ingredient}</li>
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
              <div class='tag' style={{backgroundColor : tag.background}}>{tag.nameTag}</div>
            ))}
          </div>
          <div id='recipePhoto'></div>
          <div id='recipeSteps'>
            <ul>
              {recipe["recipeInstructions"].map((instruction, index) => (
                  <li class='step' key={`step-${index}`}>
                    <div>Etape {index + 1}</div>
                    <div>{instruction["text"]}</div>
                  </li>
                ))}
            </ul>
          </div>

        </div>
      </div>

    </div>
  );
}

export default RecipePage;