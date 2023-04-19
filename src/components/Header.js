import '../assets/css/Header.css'
import { database } from '../utils/firebase';
import { useState, useEffect } from 'react';


const searchRecipes = async (searchTerm) => {
  const recipeRef = database.collection('recipe');
  const query = recipeRef.where('name', '>=', searchTerm)
  .where('name', '<=', searchTerm + '\uf8ff');

  try {
    const snapshot = await query.get();
    const searchResults = snapshot.docs.map((doc) => doc.data());
    return searchResults;
  } catch (error) {
    console.error(error);
    return [];
  }
};


function Header() {
  const [isInputExpanded, setIsInputExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputClick = () => {
    setIsInputExpanded(true);
  };

  const handleInputBlur = () => {
    setIsInputExpanded(false);
  };

  
  const handleSearch = () => {
    if (searchTerm) {
      searchRecipes(searchTerm).then((results) => {
  
      });
    }
  };
  



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
          <div>
            <img alt='Logo barre de recherche' src='/assets/loupe.png' height='35' onClick={handleSearch} />
            <input
              type='text'
              size='30'
              placeholder='Rechercher une recette'
              onClick={handleInputClick}
              onBlur={handleInputBlur}
              className={isInputExpanded ? 'input-expanded' : ''}
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              id='search-input'
            />
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
