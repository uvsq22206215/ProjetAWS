import '../assets/css/Header.css'
import { database } from '../utils/firebase';
import { useState } from 'react';
import { collection, query, where, getDocs, limit, and } from 'firebase/firestore';
import { UserAuth } from '../context/Usercontext';
import { Navigate } from 'react-router';


const SearchResult = (searchTerm) => {
  const recipeRef = collection(database, "recipe");
  const [result, setResult] = useState();
  let condition = null;

  condition = and(where('name', '>=', searchTerm), where('name', '<=', searchTerm + '\uf8ff'));

  let q = query(recipeRef, condition, limit(10));
  let tmpRecipes = [];

  getDocs(q)
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        tmpRecipes.push(doc);
      });
      setResult(tmpRecipes);
      //console.log("Received from database", tmpRecipes);
    })
    .catch((error) => {
      console.error(error);
    });
}


function Header() {
  const { usr } = UserAuth();
  const [isInputExpanded, setIsInputExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputClick = () => {
    setIsInputExpanded(true);
  };

  const handleInputBlur = () => {
    setIsInputExpanded(false);
  };


  const handleSearch = () => {

  };

  return (
    <header>
      <div id='container'>
        <div id='child1'>
          {/* <a href='#'>
            <img alt='Logo menu' src='/assets/logoMenu.png' height='50'/>
          </a> */}
        </div>
        <div id='child2'>
          <a href='/'>
            <img alt='main logo' src='/assets/logo.webp' />
          </a>
        </div>
        <div id='child3'>
          <div className='searchbar-desktop'>
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
            />
          </div>
          <div className='searchbar-mobile'>
            <a href='/search'><img alt='Logo barre de recherche' src='/assets/loupe.png' height='35' /></a>
          </div>
          <div className='account-icon'>
            <a href={JSON.parse(sessionStorage.getItem("user-signin")) == null ? "/login" : "/informations"}>
              <img alt='Logo utilisateur' src='/assets/utilisateur.png' height='50'/>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
