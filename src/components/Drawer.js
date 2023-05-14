import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import "../assets/css/Profile.css";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "@fontsource/italianno";
import InfoIcon from "@mui/icons-material/Info";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LogoutIcon from "@mui/icons-material/Logout";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router";
import { UserAuth } from "../context/Usercontext";
import { makeStyles } from "@mui/styles";
import { Avatar } from "@mui/material";
import { Stack, color } from "@mui/system";
//
const drawerWidth = 240;
const useStyles = {
  selecteditem: {
    mr: 1,
    borderRadius: 10,
    marginTop: 3,

    backgroundColor: "#ff8c00",
    "&:hover": {
      backgroundColor: "#ff8c00",
      opacity: 1,
    },
  },
  notselecteditem: {
    mr: 1,
    borderRadius: 10,
    marginTop: 3,

    backgroundColor: "rgba(255,255,255,0.2)",
    "&:hover": {
      backgroundColor: "#ff5b00",
      opacity: 1,
    },
  },
};
export default function ResponsiveDrawer(props) {
  const classes = useStyles;
  let history = useNavigate();
  const { logout } = UserAuth();
  var myObject = {
    Informations: <InfoIcon sx={{ color: "white" }} />,
    "Mes-recettes": <MilitaryTechIcon sx={{ color: "white" }} />,
    "Recettes-aimees": <FavoriteIcon sx={{ color: "white" }} />,
    Logout: <LogoutIcon sx={{ color: "white" }} />,
  };
  const url = useLocation();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="drawerStyles">
      <Stack
        justifyContent={"center"}
        direction="column"
        alignItems={"center"}
        mt={3}
      >
        <strong>
          {" "}
          <Typography id="profil" variant="h4">
            Mon profil
          </Typography>
        </strong>
      </Stack>

      <List>
        {Object.keys(myObject).map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              onClick={() => {
                if (text === "Logout") logout();
                else history("/" + text);
              }}
              sx={
                url.pathname.split("/").at(-1) === text
                  ? classes.selecteditem
                  : classes.notselecteditem
              }
            >
              <ListItemIcon>{myObject[text]}</ListItemIcon>
              <ListItemText primary={text} sx={{ color: "#FFF" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            backgroundColor: "#FFF",
          }}
        >
          <Toolbar>
            <IconButton
              color="#FF5B00"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <div id="child2">
              <a href="/">
                <img alt="main logo" src="/assets/logo.webp" />
              </a>
            </div>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{
            width: { sm: drawerWidth },
            flexShrink: { sm: 0 },
          }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                backgroundColor: "#ff4838",
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                backgroundColor: "#ff4838",
                background: "rgb(131,58,180)",
                background:
                  "linear-gradient(0deg, rgba(131,58,180,1) 0%, rgba(252,176,69,1) 0%,rgba(253,29,29,1) % )",
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </div>
  );
}
