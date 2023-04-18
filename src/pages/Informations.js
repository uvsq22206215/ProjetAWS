import { Box, Toolbar } from "@mui/material";
import Drawer from "../components/Drawer";
import React from "react";

export default function Information() {
  const drawerWidth = 240;
  return (
    <Box sx={{ display: "flex" }}>
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
        Information
      </Box>
    </Box>
  );
}
