import React, { useEffect } from 'react';
import '../assets/css/RecipePage.css'
import Header from '../components/Header'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { collection, doc, getDoc } from 'firebase/firestore';
import RecipeCard from '../components/RecipeCard';
import { database } from '../utils/firebase';
import RecipeContent from '../components/RecipeContent';
import RelatedRecipes from '../components/RelatedRecipes';
/*
champs JSON scrapés utiles
*/
// const recipe = 
// {
// "name":"Salade César",
// "prepTime":"PT15M",
// "cookTime":"PT5M",
// "totalTime":"PT20M",
// "recipeYield":"4 personnes",
// "recipeIngredient":[
//   {"name" : "c.à.c de moutarde", "quantity" : 1/8},
//   {"name" : "trait de tabasco", "quantity" : 1/4},
//   {"name" : "cl d'huile", "quantity" : 15/4},
//   {"name" : "poivre", "quantity" : NaN},
//   {"name" : "sel", "quantity" : NaN},
//   {"name" : "oeuf", "quantity" : 1/4},
//   {"name" : "g de parmesan râpé", "quantity" : 25/4}, 
//   {"name" : "c.à.c de câpres", "quantity" : 2/4},
//   {"name" : "citron", "quantity" : NaN},
//   {"name" : "gousse d'ail pelée", "quantity" : 1/4}, 
//   {"name" : "c.à.s d'huile", "quantity" : 2/4},
//   {"name" : "coeurs de laitue effeuillé", "quantity" : 2/4}, 
//   {"name" : "g de Parmesan (copeaux)", "quantity" : 25/4},
//   {"name" : "tranches de pain écroûtées", "quantity" : 4/4}
// ],
// "recipeInstructions":[
//   "Faites dorer le pain, coupé en cubes,3 min dans un peu d'huile. ",
//   "Déchirez les feuilles de romaine dans un saladier, et ajoutez les croûtons préalablement épongés dans du papier absorbant. ",
//   "Préparez la sauce :\nFaites cuire l'oeuf 1 min 30 dans l'eau bouillante, et rafraîchissez-le.",
//   "Cassez-le dans le bol d'un mixeur et mixez, avec tous les autres ingrédients; rectifiez l'assaissonnement et incorporez à la salade. ",
//   "Décorez de copeaux de parmesan, et servez."
// ],
// "author":"patricia_204",
// "description":"moutarde,tabasco,huile,poivre,sel,oeuf,parmesan râpé,câpres,citron,ail,huile,laitue,Parmesan,pain",
// "keywords":"Salade César,moutarde,tabasco,huile,poivre,sel,oeuf,parmesan râpé,câpres,citron,ail,huile,laitue,Parmesan,pain,salade Cesar,très facile,bon marché,rapide",
// "recipeCuisine":"Entrée",
// "aggregateRating":{"@type":"AggregateRating",
//   "reviewCount":109,
//   "ratingValue":4.7},
//   "tags":[
//     {
//       nameTag: "🇮🇹 Italien",
//       background: "white",
//       textColor : "black"
//     },
//     {
//       nameTag: "🌿 Vegan",
//       background: "green",
//       textColor : "white"
//     },
//     {
//       nameTag: "🕒 Moins de 30 min",
//       background: "grey",
//       textColor : "white"
//     },
//     {
//       nameTag: "🟢 Facile",
//       background: "#f89837",
//       textColor: "white"
//     }
//   ]
// }

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function RecipePage() {

  const query = useQuery().get("id");
  console.log("Id parsé : ", query);

  const [useLoad, setLoad] = useState(false);
  const [useRecipe, setRecipe] = useState({});
  const [useNotFound, setNotFound] = useState(true);

  const loadRecipe = () => {
    if (query && !useLoad) { // 
      getDoc(doc(database, "recipe", query))
        .then((docRef) => {
          setLoad(true);
          if (docRef.exists()) {
            let data = docRef.data();
            setRecipe(data);
            setNotFound(false);
          }})
        .catch(() => console.log("Erreur"))
    } else {
      setLoad(true);
    }
  }

  useEffect(() => {
    loadRecipe();
  }, []);

  if (!useLoad) {
    return (
    <div id='containerPage'>
      <Header />
      <div>Loading...</div>
    </div>);
  }
  if (!useNotFound) {
    return (
      <div id='containerPage'>
        <Header />
        <RecipeContent recipe={useRecipe} />
        <RelatedRecipes />
      </div>
    );
  }
  return (
    <div id='containerPage'>
      <Header />
      <div>Recette non trouvée !</div>
    </div>
  );
}

export default RecipePage;