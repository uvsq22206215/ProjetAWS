import React from "react";
import Drawer from "../components/Drawer";
import { Box, Toolbar } from "@mui/material";

export default function Contentprofil(props) {
  const drawerWidth = 240;
  return (
    <Box
      sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#F0F0F0" }}
    >
      <Drawer />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {props.children}
      </Box>
    </Box>
  );
}
