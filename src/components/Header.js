import '../assets/css/Header.css'
import { database } from '../utils/firebase';
import { useState } from 'react';
import { collection, query, where, getDocs, limit, and } from 'firebase/firestore';
import Autocomplete from '@mui/material/Autocomplete';


function Header() {
  const recipeRef = collection(database, "recipe");
  const [result, setResult] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearch = (input) => {
    if (input) {
      console.log(input);
      //la requete
      let condition = null;
      condition = and(where('name', '>=',searchTerm), where('name', '<=', searchTerm+ '\uf8ff'));
      let q = query(recipeRef, condition, limit(10));
  
      let tmpRecipes = [];
      getDocs(q)
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            tmpRecipes.push(doc);
          });
  
          let recipeNames = tmpRecipes.map(doc => doc.data().name); //les nomes des recettes result.
          setResult(recipeNames); //result remplit de recipe name.
        })
        .catch((error) => {
          console.error(error);
        });

    }
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
          <div>
            <img alt='Logo barre de recherche' src='/assets/loupe.png' height='35' />
            <Autocomplete
              sx={{
                display: 'inline-block',
                '& input': {
                  width: 200,
                  bgcolor: 'background.paper',
                  color: (theme) =>
                    theme.palette.getContrastText(theme.palette.background.paper),
                },
              }}
              id="custom-input-demo"
              options={result}
              renderInput={(params) => (
                <div ref={params.InputProps.ref}>
                  <input type="text" onChange={handleSearch(params.inputProps.value)} {...params.inputProps} />
                </div>
              )}
            />
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
