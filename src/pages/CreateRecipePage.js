import database from '../utils/firebase'
import { useState } from 'react';
import { getDocs, addDoc, collection, getFirestore } from 'firebase/firestore';

function CreateRecipePage() {

  const recipeRef = collection(database, 'recipe');

  const [name, setName] = useState();
  const [cookTime, setCookTime] = useState();

  const pushRecipe = () => {
    addDoc(recipeRef, {
      name : name,
      cookTime : cookTime
    });
  }

  return (
    // <div style={{marginTop : 250}}>
    //   <center>
    //   <input placeholder="Recipe name" value={name} 
    //   onChange={(e) => setName(e.target.value)}/>
    //   <br/><br/>
    //   <input placeholder="Recipe cook time" value={cookTime} 
    //   onChange={(e) => setCookTime(e.target.value)}/>
    //   <br/><br/> 
    //   <button onClick={pushRecipe}>PUSH</button>
    //   </center>
    // </div>
    <div></div>

  );
}

export default CreateRecipePage;