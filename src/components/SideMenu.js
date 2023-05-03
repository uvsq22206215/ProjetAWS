import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBook,
  faEye,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "../assets/css/SideMenu.css";

function SideMenu() {
  let history = useNavigate();
  const url = useLocation();
  const path = url.pathname; // Extract the path from the current location

  return (
    <SideNav
      onSelect={(selected) => {
        history(selected);
      }}
      className="sidebar-menu"
    >
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected={path}>
        <NavItem eventKey="home">
          <NavIcon>
            <FontAwesomeIcon icon={faHome} />
          </NavIcon>
          <NavText>Accueil</NavText>
        </NavItem>
        <NavItem eventKey="all-categories">
          <NavIcon>
            <FontAwesomeIcon icon={faBook} />
          </NavIcon>
          <NavText>Categories</NavText>
        </NavItem>
        <NavItem eventKey="search">
          <NavIcon>
            <FontAwesomeIcon icon={faEye} />
          </NavIcon>
          <NavText>Chercher une recette</NavText>
        </NavItem>
        <NavItem eventKey="login">
          <NavIcon>
            <FontAwesomeIcon icon={faUser} />
          </NavIcon>
          <NavText>Connexion / Inscription</NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
}
export default SideMenu;
