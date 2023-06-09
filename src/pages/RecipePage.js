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
import Error404 from "../components/Error404";

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function RecipePage() {
  const query = useQuery().get("id");

  const [recipe, setRecipe] = useState({});
  const [notFound, setNotFound] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (query) {
      getDoc(doc(database, "recipe", query))
        .then((docRef) => {
          if (docRef.exists()) {
            setRecipe(docRef);
            setNotFound(false);
          }
          setLoading(false);
        })
        .catch((e) => console.error(e));
    }
  }, [query]);

  return (
    <div id="containerPage">
      <Header />
      {loading ? (
        <div id="loadingRecipeText">
          <div id="root">
            <div className="loader-wrapper">
              <div className="loader"></div>
            </div>
          </div>
        </div>
      ) : notFound ? (
        <Error404 />
      ) : (
        <div>
          <RecipeContent recipe={recipe} />
          <RelatedRecipes title="Recettes associées" />
        </div>
      )}

      <Footer />
    </div>
  );
}

export default RecipePage;
