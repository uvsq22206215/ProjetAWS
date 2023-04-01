import './Header.css'


function Header() {
  return (
    <header>
      <div id='container'>
        <div id='child1'><img alt='Logo menu' src='/assets/logoMenu.png' height='50'/></div>
        <div id='child2'><img alt='main logo' src='/assets/logo.webp'/></div>
        <div id='child3'>
          <img alt='Logo barre de recherche ' src='/assets/loupe.png' height='35'/>
          <input type='text' size='30'/>
          <img alt='Logo utilisateur' src='/assets/utilisateur.png' height='50'/>
        </div>

      </div>
    </header>
  );
}


export default Header;