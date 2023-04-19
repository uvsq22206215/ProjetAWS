import '../assets/css/SideMenu.css';

import { faHome, faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

function SideMenu() {
  return (
    <SideNav
    onSelect={selected=> {
      console.log(selected);
    }}
    className="sidebar-menu"
    >
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
          <NavIcon><FontAwesomeIcon icon={faHome} /></NavIcon>
          <NavText>Accueil</NavText>
        </NavItem>
        <NavItem eventKey="recipe-categories">
          <NavIcon><FontAwesomeIcon icon={faBook} /></NavIcon>
          <NavText>Categories</NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
}
export default SideMenu;