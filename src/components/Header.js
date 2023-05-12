import '../assets/css/Header.css'
import { database } from '../utils/firebase';
import { useState } from 'react';
import { collection, query, where, getDocs, limit, and } from 'firebase/firestore';
import Autocomplete from '@mui/material/Autocomplete';
import { Fragment } from 'react';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router';


function Header() {
  let history = useNavigate();
  const recipeRef = collection(database, "recipe");
  const [result, setResult] = useState([]);


  const execSearch = () => {
    if (result.length === 1) {
      history("/recipe?id=" + result[0].id);
      setResult([]);
    }
  };

  const handleSearch = (input) => {

    if (input && input.length >= 3) {
      let condition = null;
      input = input.charAt(0).toUpperCase() + input.slice(1);
      condition = and(where('name', '>=', input), where('name', '<=', input + '\uf8ff'));
      let q = query(recipeRef, condition, limit(10));

      let tmpRecipes = [];
      getDocs(q)
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            tmpRecipes.push(doc);
          });
          setResult(tmpRecipes); 
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
          <img onClick={() => {execSearch()}} alt='Logo barre de recherche' src='/assets/loupe.png' height='35' />
          <Autocomplete
            id="asynchronous-demo"
            freeSolo
            sx={{ width: 400 }}
            options={result}
            getOptionLabel={(recette) => recette.data().name}
            onInputChange={(e,v) => handleSearch(v)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Recherche de recette"
                InputProps={{
                  ...params.InputProps,
                }}
              />
            )}
          />
          <div className='account-icon'>
            <a href={JSON.parse(sessionStorage.getItem("user-signin")) == null ? "/login" : "/informations"}>
              <img alt='Logo utilisateur' src='/assets/utilisateur.png' height='50' />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
