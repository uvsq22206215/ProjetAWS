import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBook, faEye, faUser, faLink } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import '../assets/css/SideMenu.css';

function SideMenu() {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname; // Extract the path from the current location

  return (
    <SideNav
    onSelect={selected=> {
      console.log('/'+selected);
      if (selected !== "home") {
        navigate('/' + selected);
      }
      else {
        navigate('/');
      }
    }}
    className="sidebar-menu"
    >
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected={path === "/" ? "home" : path.replace('/', '')}>
        <NavItem eventKey="home">
          <NavIcon><FontAwesomeIcon icon={faHome} /></NavIcon>
          <NavText>Accueil</NavText>
        </NavItem>
        <NavItem eventKey="all-categories">
          <NavIcon><FontAwesomeIcon icon={faBook} /></NavIcon>
          <NavText>Categories</NavText>
        </NavItem>
        <NavItem eventKey="search">
          <NavIcon><FontAwesomeIcon icon={faEye} /></NavIcon>
          <NavText>Chercher une recette</NavText>
        </NavItem>
        {/* <NavItem eventKey="Informations">
          <NavIcon><FontAwesomeIcon icon={faUser} /></NavIcon>
          <NavText>Mon Profile</NavText>
        </NavItem> */}
        <NavItem eventKey="login">
          <NavIcon><FontAwesomeIcon icon={faLink} /></NavIcon>
          <NavText>Connexion / Inscription</NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
}
export default SideMenu;