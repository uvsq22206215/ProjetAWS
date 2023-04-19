import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/core/Autocomplete';
import { searchRecipes } from './Header'; 

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = async (searchTerm) => {
    const results = await searchRecipes(searchTerm);
    setSuggestions(results);
  };

  return (
    <Autocomplete
      freeSolo
      options={suggestions}
      getOptionLabel={(option) => option.name}
      onInputChange={(event, newInputValue) => {
        setSearchTerm(newInputValue);
        handleSearch(newInputValue);
      }}
      renderInput={(params) => (
        <TextField {...params} label="Search recipes" variant="outlined" />
      )}
    />
  );
};

export default SearchBar;
