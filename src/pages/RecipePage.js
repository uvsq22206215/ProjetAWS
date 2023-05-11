import React, { useEffect } from "react";
import "../assets/css/RecipePage.css";
import Header from "../components/Header";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { database } from "../utils/firebase";
import RecipeContent from "../components/RecipeContent";
import RelatedRecipes from "../components/RelatedRecipes";
import Footer from "../components/Footer";
import { Button } from "@mui/material";

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function RecipePage() {
  const query = useQuery().get("id");

  const [loaded, setLoaded] = useState(false);
  const [found, setFound] = useState(false);
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    if (query && !loaded) {
      getDoc(doc(database, "recipe", query))
        .then((docRef) => {
          setLoaded(true);
          if (docRef.exists()) {
            setRecipe(docRef.data());
            setFound(true);
          }
          setLoaded(true);
        })
        .catch((e) => console.error(e));
    }
    if (!query) {
      setLoaded(true);
    }
  }, [query, loaded]);

  if (!loaded) {
    return (
      <div id="containerPage">
        <Header />
        <div>Loading...</div>
      </div>
    );
  }

  if (found) {
    return (
      <div id="containerPage">
        <Header />
        <RecipeContent recipe={recipe} />
        <RelatedRecipes title="Recettes associées" />{" "}
        {/*TODO : Ajouter criteres de similarité */}
        <Footer />
      </div>
    );
  }
  return (
    <div id="containerPage">
      <Header />
      <div>Recette non trouvée !</div>
      <Footer />
    </div>
  );
}

export default RecipePage;
