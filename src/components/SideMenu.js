import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBook,
  faEye,
  faUser,
  faLink,
  faPlus,
  faPlateWheat
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "../assets/css/SideMenu.css";
import { useState } from "react";

function SideMenu() {
  let history = useNavigate();
  const url = useLocation();
  const path = url.pathname; // Extract the path from the current location
  const [opened, setOpened] = useState(false);

  return (
    <SideNav
      onSelect={(selected) => {
        history(selected);
        setOpened(false);
      }}
      className="sidebar-menu"
      expanded={opened}
      onToggle={(e) => {console.log(e); setOpened(e);}}
    >
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected={path}>
        <NavItem eventKey="/">
          <NavIcon>
            <FontAwesomeIcon icon={faHome} />
          </NavIcon>
          <NavText>Accueil</NavText>
        </NavItem>
        <NavItem eventKey="/all-categories">
          <NavIcon>
            <FontAwesomeIcon icon={faBook} />
          </NavIcon>
          <NavText>Categories</NavText>
        </NavItem>
        <NavItem eventKey="/search">
          <NavIcon>
            <FontAwesomeIcon icon={faEye} />
          </NavIcon>
          <NavText>Chercher une recette</NavText>
        </NavItem>
        <NavItem eventKey="create">
          <NavIcon><FontAwesomeIcon icon={faPlus} /></NavIcon>
          <NavText>Créer une recette</NavText>
        </NavItem>
        <NavItem eventKey="recipe-generator">
          <NavIcon><FontAwesomeIcon icon={faPlateWheat} /></NavIcon>
          <NavText>Générer une recette</NavText>
        </NavItem>
        {
          JSON.parse(sessionStorage.getItem("user-signin")) == null ?
            <NavItem eventKey="/login">
              <NavIcon>
                <FontAwesomeIcon icon={faLink} />
              </NavIcon>
              <NavText>Connexion / Inscription</NavText>
            </NavItem> 
            :
            <NavItem eventKey="Informations">
              <NavIcon><FontAwesomeIcon icon={faUser} /></NavIcon>
              <NavText>Mon Profil</NavText>
            </NavItem>
        }
      </SideNav.Nav>
    </SideNav>
  );
}
export default SideMenu;
