import React, { useEffect } from 'react';
import '../assets/css/RecipePage.css'
import Header from '../components/Header'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { database } from '../utils/firebase';
import RecipeContent from '../components/RecipeContent';
import RelatedRecipes from '../components/RelatedRecipes';


function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function RecipePage() {
  const query = useQuery().get("id");

  const [loaded, setLoaded] = useState(false);
  const [recipe, setRecipe] = useState({});
  const [found, setFound] = useState(false);

  useEffect(() => {
    setLoaded(true);
    if (query && !loaded) {
      console.log("request sent")
      getDoc(doc(database, "recipe", query))
        .then((docRef) => {
          setLoaded(true);
          if (docRef.exists()) {
            setRecipe(docRef.data());
            setFound(true);
          }
        })
        .catch(() => console.log("Erreur"))
    }
  }, [query, loaded]);

  if (!loaded) {
    return (
      <div id='containerPage'>
        <Header />
        <div>Loading...</div>
      </div>);
  }
  if (found) {
    return (
      <div id='containerPage'>
        <Header />
        <RecipeContent recipe={recipe} />
        <RelatedRecipes title='Recettes associées' />
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