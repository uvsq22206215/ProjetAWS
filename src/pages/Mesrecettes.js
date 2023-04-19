import { Box, Toolbar } from "@mui/material";
import Drawer from "../components/Drawer";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth, database } from "../utils/firebase";

export default function Mesrecettes() {
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const [user, setUser] = useState({});
  let history = useNavigate();
  const drawerWidth = 240;
  const logout = async () => {
    try {
      await signOut(auth);
      history("/");
    } catch (error) {
      console.log(error);
    }
  };
  const changePage = (text) => {
    if (text === "Logout") {
      logout();
    } else history("/" + text);
  };
  return (
    <Box
      sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#F0F0F0" }}
    >
      <Drawer text="Mes-recettes" onClick={changePage} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        Information
      </Box>
    </Box>
  );
}
