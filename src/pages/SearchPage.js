import '../assets/css/SearchPage.css';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { database } from '../utils/firebase';
import { collection, query, where, get, getDocs, doc, limit, and } from 'firebase/firestore';

function SearchPage() {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(true);
  };

  
  /* gérer les options qui s'ouvrent quand on clique sur un plus*/
  
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isCultureOpen, setIsCultureOpen] = useState(false);
  const [isDifficultyOpen, setIsDifficultyOpen] = useState(false);
  const [isTempsPreparationOpen, setIsTempsPreparationOpen] = useState(false);
  
  const handleCategoriesClick = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };
  const handleCultureClick = () => {
    setIsCultureOpen(!isCultureOpen);
  };
  const handleDifficultyClick = () => {
    setIsDifficultyOpen(!isDifficultyOpen);
  };
  const handleTempsPreparationClick = () => {
    setIsTempsPreparationOpen(!isTempsPreparationOpen);
  };
  
  
  /* gérer les checkbox */

  const [difficulty, setDifficulty] = useState({
    facile: false,
    moyen: false,
    difficile: false,
  });
  
  const [prepTime, setPrepTime] = useState({
    moins30m: false,
    moins1h: false,
    moins2h: false
  });
  
  const [categorie, setCategorie] = useState({
    accomp: false,
    plat: false,
    dessert: false
  });
  
  function handleClearClick() {
    setDifficulty({
      facile: false,
      moyen: false,
      difficile: false,
    });
    setPrepTime({
      moins30m: false,
      moins1h: false,
      moins2h: false
    });
    setCategorie({
      accomp: false,
      plat: false,
      dessert: false
    });
  }
  
  // TODO : factoriser
  const handleDiffCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setDifficulty((prevState) => ({ ...prevState, [name]: checked }));
  };

  const handlePrepCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setPrepTime((prevState) => ({ ...prevState, [name]: checked }));
  };

  const handleCatCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCategorie((prevState) => ({ ...prevState, [name]: checked }));
  }


  const [filteredRecipes, setFilteredRecipes] = useState([]);

  const filterRecipes = () => {
    const recipesRef = collection(database, "recipe");

    // let difficultyArray = [];
    // if (difficulty.facile) difficultyArray.push("facile");
    // if (difficulty.moyen) difficultyArray.push("moyen");
    // if (difficulty.difficile) difficultyArray.push("difficile");

    let prepTimeVal = 0;
    if (prepTime.moins2h) prepTimeVal = 120;
    if (prepTime.moins1h) prepTimeVal = 60;
    if (prepTime.moins30m) prepTimeVal = 30;

    let categorieArray = [];
    if (categorie.dessert) categorieArray.push("Dessert");
    if (categorie.plat) categorieArray.push("Plat principal");
    if (categorie.accomp) categorieArray.push("Accompagnement");


    let condition = null;

    if (categorieArray.length > 0) {
      condition = condition ? 
                      and(condition, where("categorie", "in", categorieArray)) :
                      where("categorie", "in", categorieArray);
    }
    // TODO : changer le temps dans la base de données en un entier
    // if (prepTimeVal != 0) {
    //   condition = condition ? 
    //                   and(condition, where("totalTime", "<=", prepTimeVal)) :
    //                   where("totalTime", "<=", prepTimeVal);
    // }

    let q = condition ? query(recipesRef, condition, limit(20)) : query(recipesRef, limit(20));

    let tmpRecipes = [];
    getDocs(q)
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          tmpRecipes.push(doc);
        });
        setFilteredRecipes(tmpRecipes);
        console.log("Received from database", tmpRecipes, "Args :", prepTimeVal, categorieArray);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {

  }, [filteredRecipes]);


  // Affiche toutes les recettes de base par défaut
  useEffect(() => {
    const recipesRef = collection(database, "recipe");
    let q = query(recipesRef, limit(21));
    let tmpRecipes = [];
    getDocs(q)
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          tmpRecipes.push(doc);
        });
        setFilteredRecipes(tmpRecipes);
        console.log("Received from database", tmpRecipes);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);


  return (
    <div id='SearchPage'>
      <Header />
      <div id="search-container">
        <div id="filter-column">
          <div class="filter-container">
            <div class="filter-header">
              <span class="filter-title" onClick={filterRecipes}>Appliquer les filtres</span>
              <span className="filter-clear" onClick={handleClearClick}>Réinitialiser</span>
            </div>
            <hr className="separator" />
            <div class="filter-typ">
              <div class="option-header" onClick={handleCategoriesClick}>
                <span class="option-title">Categories</span>
                <span className={isCategoriesOpen ? "toggle-minus" : "toggle-plus"}>
                  <FontAwesomeIcon icon={isCategoriesOpen ? faMinus : faPlus} /> </span>
              </div>

              <div className={`categories-options ${isCategoriesOpen ? 'open' : ''}`}>
                <div className="option">
                  <input
                    type="checkbox"
                    className='checkBoxOption'
                    id="plat"
                    name="plat"
                    checked={categorie.plat}
                    onChange={handleCatCheckboxChange}
                  />
                  <label for="plat">Plat principal</label>
                </div>
                <div className="option">
                  <input
                    type="checkbox"
                    className='checkBoxOption'
                    id="accomp"
                    name="accomp"
                    checked={categorie.accomp}
                    onChange={handleCatCheckboxChange}
                  />
                  <label for="entree">Accompagnement</label>
                </div>
                <div className="option">
                  <input
                    type="checkbox"
                    className='checkBoxOption'
                    id="dessert"
                    name="dessert"
                    checked={categorie.dessert}
                    onChange={handleCatCheckboxChange}
                  />

                  <label for="dessert">Dessert</label>
                </div>
              </div>
            </div>

            <div class="filter-typ">
              <div class="option-header" onClick={handleDifficultyClick}>
                <span class="option-title">Niveau de difficulté</span>
                <span className={isDifficultyOpen ? "toggle-minus" : "toggle-plus"}>
                  <FontAwesomeIcon icon={isDifficultyOpen ? faMinus : faPlus} /></span>
              </div>
              <div className={`categories-options ${isDifficultyOpen ? 'open' : ''}`}>
                <div className="option">
                  <input
                    type="checkbox"
                    className='checkBoxOption'
                    id="facile"
                    name="facile"
                    checked={difficulty.facile}
                    onChange={handleDiffCheckboxChange}
                  />
                  <label for="plat">Facile</label>
                </div>
                <div className="option">
                  <input
                    type="checkbox"
                    className='checkBoxOption'
                    id="moyen"
                    name="moyen"
                    checked={difficulty.moyen}
                    onChange={handleDiffCheckboxChange}
                  />
                  <label for="entree">Moyen</label>
                </div>
                <div className="option">
                  <input
                    type="checkbox"
                    className='checkBoxOption'
                    id="difficile"
                    name="difficile"
                    checked={difficulty.difficile}
                    onChange={handleDiffCheckboxChange}
                  />
                  <label for="difficile">difficile</label>
                </div>
              </div>
            </div>

            <div className="filter-typ">
              <div className="option-header" onClick={handleTempsPreparationClick}>
                <span className="option-title">Temps de preparation</span>
                <span className={isTempsPreparationOpen ? "toggle-minus" : "toggle-plus"}>
                  <FontAwesomeIcon icon={isTempsPreparationOpen ? faMinus : faPlus} />
                </span>
              </div>
              <div className={`categories-options ${isTempsPreparationOpen ? 'open' : ''}`}>
                <div className="option">
                  <input
                    type="checkbox"
                    className='checkBoxOption'
                    id="moins30m"
                    name="moins30m"
                    checked={prepTime.moins30m}
                    onChange={handlePrepCheckboxChange}
                  />
                  <label htmlFor="PlusUneHeure">Moins de 30 minutes</label>
                </div>
                <div className="option">
                  <input
                    type="checkbox"
                    className='checkBoxOption'
                    id="moins1h"
                    name="moins1h"
                    checked={prepTime.moins1h}
                    onChange={handlePrepCheckboxChange}
                  />
                  <label htmlFor="Moin30">Moins d'une heure</label>
                </div>
                <div className="option">
                  <input
                    type="checkbox"
                    className='checkBoxOption'
                    id="moins2h"
                    name="moins2h"
                    checked={prepTime.moins2h}
                    onChange={handlePrepCheckboxChange}
                  />
                  <label htmlFor="entre30-45">Moins de 2 heures</label>
                </div>
              </div>
            </div>

            <div class="filter-Typ">
              <div class="option-header" onClick={handleCultureClick}>
                <span class="option-title">Pays/Culture</span>
                <span className={isCultureOpen ? "toggle-minus" : "toggle-plus"}>
                  <FontAwesomeIcon icon={isCultureOpen ? faMinus : faPlus} />
                </span>
              </div>
              <div className={`categories-options ${isCultureOpen ? 'open' : ''}`}>
                <div className="option">
                  <input type="checkbox" className='checkBoxOption' id="française" name="française" value="française" />
                  <label for="plat">France</label>
                </div>
                <div className="option">
                  <input type="checkbox" className='checkBoxOption' id="Italienne" name="Italienne" value="Italienne" />
                  <label for="entree">Italie</label>
                </div>
                <div className="option">
                  <input type="checkbox" className='checkBoxOption' id="Japonaise" name="Japonaise" value="Japonaise" />
                  <label for="dessert">Japon</label>
                </div>
              </div>
            </div>



          </div>
        </div>
        <div id="result-column">
          <div id="result-recipes">
            <h1 className="block-title" style={{ textAlign: 'center' }}>Résultat recherche</h1>
            <div className="recipe-cards">
              {filteredRecipes.map((recipe) => (
                <RecipeCard image={recipe.data().image} title={recipe.data().name} link={"/recipe?id=" + recipe.id} />
              ))}

              {showMore && (
                <div>TODO</div>
              )}
            </div>
            {!showMore && (
              <a onClick={handleShowMore} className="block-link" href="#">
                View More Recipes
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
