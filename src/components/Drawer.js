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
import { useNavigate } from "react-router";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth, database } from "../utils/firebase";

const drawerWidth = 240;

export default function ResponsiveDrawer(props) {
  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  let history = useNavigate();
  var myObject = {
    Informations: <InfoIcon sx={{ color: "black" }} />,
    "Mes recettes": <MilitaryTechIcon sx={{ color: "black" }} />,
    "Recettes aimées": <FavoriteIcon sx={{ color: "black" }} />,
    Logout: <LogoutIcon sx={{ color: "black" }} />,
  };
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
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
    } else history("/");
  };
  const drawer = (
    <div>
      <Typography id="profil">Mon profil</Typography>
      <Divider />
      <List>
        {Object.keys(myObject).map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              onClick={() => changePage(text)}
              sx={{ marginTop: 3 }}
            >
              <ListItemIcon>{myObject[text]}</ListItemIcon>
              <ListItemText primary={text} sx={{ color: "white" }} />
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
            backgroundColor: "#e9e9e9",
          }}
        >
          <Toolbar>
            <IconButton
              color="#ff5b00ba"
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
                backgroundColor: "#ff5b00ba",
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              backgroundColor: "#e4a11b33",
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                backgroundColor: "#ff5b00ba",
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
        </Box>
      </Box>
    </div>
  );
}
