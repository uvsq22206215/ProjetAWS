import React, { useEffect } from 'react';
import '../assets/css/AuthorPage.css'
import Header from '../components/Header'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {getDocs,query, collection, where, limit } from 'firebase/firestore';
import { database } from '../utils/firebase';
import Footer from '../components/Footer';
import Error404 from '../components/Error404';
import { useParams } from "react-router-dom";
import RecipeCard from '../components/RecipeCard';
import { display } from '@mui/system';

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function AuthorPage() {
  const params = useParams();

 
  const [recipe, setRecipe] = useState([]);
 
  useEffect(() => {
    const fetchRecipes = async () => {
      const q = query(collection(database, 'recipe'), where('author', '==', params.name), limit(20));
      const recipes = await getDocs(q);
      console.log('Recipes:', recipes);
      setRecipe(recipes.docs);
    };
  
    fetchRecipes();
  }, [params.name]);
  
 
return (
      <div id='authorPage'>
        <Header />
        <div id='author-profile'>
          <div><img alt='chef-image' src='/assets/chef.jpg'/></div>
          <div className='info'>
            <div>
            <h1>{params.name}</h1>
              <p>Créateur de recettes</p>
            </div>
          </div>
          
        </div>
        <div id='author-recipes'>
        <div id='author-recipes'>
        <h3>Creations par cet auteur:</h3>
          <div id="id-recipeCard" className="recipe-cards"  style={{display: "flex", flexWrap: "wrap"}}>
            
        {recipe.map((recipe) => (
               <RecipeCard 
                key={recipe.id}
                image={recipe.data().image} 
                title={recipe.data().name} 
                id={recipe.id} 
                link={"/recipe?id=" + recipe.id} 
             />
           ))}
        </div>
</div>

        </div>
        <Footer />
      </div>);

}

export default AuthorPage;