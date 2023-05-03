import {
  Box,
  Card,
  Container,
  Grid,
  Toolbar,
  Button,
  Typography,
} from "@mui/material";
import Drawer from "../components/Drawer";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth, database } from "../utils/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import RecipeCard from "../components/RecipeCard";
import "../assets/css/RelatedRecipes.css";

export default function Mesrecettes() {
  const [userdetail, setUserdetail] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const [querySnapshot, setQuerySnapshot] = useState([]);
  const [page, setPage] = useState(1);
  const recipesPerPage = 3;

  const fetchrecipes = async () => {
    var Myrecipes = null;
    var q = null;

    Myrecipes = collection(database, "recipe");
    q = await query(Myrecipes, where("author", "==", userdetail.username));
    const querySnapshot = await getDocs(q);
    setQuerySnapshot(querySnapshot.docs);
  };

  useEffect(() => {
    fetchrecipes();
  }, []);

  const handleClick = (event, pageNumber) => {
    setPage(pageNumber);
  };

  const startIndex = (page - 1) * recipesPerPage;
  const endIndex = startIndex + recipesPerPage;

  return (
    <Card
      sx={{ paddingRight: 4, backgroundColor: "transparent" }}
      elevation={0}
    >
      <Grid container direction="row" spacing={1}>
        {querySnapshot.length != 0 ? (
          querySnapshot.slice(startIndex, endIndex).map((recipe, index) => (
            <Grid item xs={12} md={4} key={recipe.id}>
              <Card sx={{ height: 400, borderRadius: 3 }} elevation={5}>
                <Grid container>
                  <RecipeCard
                    key={"related-recipe-" + index}
                    title={recipe.data().name}
                    image={recipe.data().image}
                    link={"/recipe?id=" + recipe.id}
                    description=""
                  />
                </Grid>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography m={3} variant="h3">
            <strong>Vous n'avez pas de recettes !</strong>
          </Typography>
        )}
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 5 }}>
        <Button
          sx={{
            bgcolor: "#ff4838",
            ":hover": {
              bgcolor: "red",
            },
          }}
          variant="contained"
          disabled={page === 1}
          onClick={(event) => handleClick(event, page - 1)}
        >
          Precedent
        </Button>
        <Button
          sx={{
            bgcolor: "#ff4838",
            ":hover": {
              bgcolor: "red",
            },
          }}
          variant="contained"
          disabled={endIndex >= querySnapshot.length}
          onClick={(event) => handleClick(event, page + 1)}
        >
          Suivant
        </Button>
      </Box>
    </Card>
  );
}
