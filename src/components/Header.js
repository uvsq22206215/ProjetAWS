import '../assets/css/Header.css'

function Header() {
  return (
    <header>
      <div id='container'>
        <div id='child1'>
          <a href='#'>
            <img alt='Logo menu' src='/assets/logoMenu.png' height='50'/>
          </a>
        </div>
        <div id='child2'>
          <a href='/'>
            <img alt='main logo' src='/assets/logo.webp'/>
          </a>
        </div>
        <div id='child3'>
          <div className='search-bar'>
            <img alt='Logo barre de recherche ' src='/assets/loupe.png' height='35'/>
            <input type='text' size='30'/>
          </div>
          <div className='account-icon'>
            <a href={`${process.env.REACT_APP_BASE_URL}/login`}><img alt='Logo utilisateur' src='/assets/utilisateur.png' height='50'/></a>
          </div>
        </div>

      </div>
    </header>
  );
}


export default Header;