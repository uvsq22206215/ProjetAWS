import '../assets/css/SearchPage.css';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { database } from '../utils/firebase';
import { collection, query, where, getDocs, limit, and } from 'firebase/firestore';
import Footer from '../components/Footer';

function SearchPage() {
 
  /* gérer les options qui s'ouvrent quand on clique sur un plus*/
  
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  // const [isCultureOpen, setIsCultureOpen] = useState(false);
  const [isDifficultyOpen, setIsDifficultyOpen] = useState(false);
  const [isTempsPreparationOpen, setIsTempsPreparationOpen] = useState(false);
  const [isCostOpen, setCostOpen] = useState(false);
  
  const handleCategoriesClick = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  const handleDifficultyClick = () => {
    setIsDifficultyOpen(!isDifficultyOpen);
  };
  const handleTempsPreparationClick = () => {
    setIsTempsPreparationOpen(!isTempsPreparationOpen);
  };
  const handleCostClick = () => {
    setCostOpen(!isCostOpen);
  }
  
  
  /* gérer les checkbox */

  const [difficulty, setDifficulty] = useState({
    tresFacile : false,
    facile: false,
    moyenne: false,
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

  const [cost, setCost] = useState({
    bonMarche : false,
    moyen : false,
    assezCher : false
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
    setCost({
      bonMarche : false,
      moyen : false,
      assezCher : false
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

  const handleCostCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCost((prevState) => ({ ...prevState, [name]: checked }));
  }


  const [filteredRecipes, setFilteredRecipes] = useState([]);

  const filterRecipes = () => {
    const recipesRef = collection(database, "recipe");

    let difficultyArray = [];
    if (difficulty.tresFacile) difficultyArray.push("Très facile");
    if (difficulty.facile) difficultyArray.push("Facile");
    if (difficulty.moyenne) difficultyArray.push("Moyenne");
    if (difficulty.difficile) difficultyArray.push("Difficile");

    let prepTimeVal = 0;
    if (prepTime.moins2h) prepTimeVal = 120;
    if (prepTime.moins1h) prepTimeVal = 60;
    if (prepTime.moins30m) prepTimeVal = 30;

    let categorieArray = [];
    if (categorie.dessert) categorieArray.push("Dessert");
    if (categorie.plat) categorieArray.push("Plat principal");
    if (categorie.accomp) categorieArray.push("Accompagnement");

    let costArray = []
    if (cost.bonMarche) costArray.push("Bon marché");
    if (cost.moyen) costArray.push("Moyen");
    if (cost.assezCher) costArray.push("Assez cher");

    let condition = null;

    if (difficultyArray.length > 0) {
      condition = condition ?
                    and(condition, where("difficulty", "in", difficultyArray)) :
                    where("difficulty", "in", difficultyArray);
    }

    if (categorieArray.length > 0) {
      condition = condition ? 
                    and(condition, where("categorie", "in", categorieArray)) :
                    where("categorie", "in", categorieArray);
    }

    if (costArray.length > 0) {
      condition = condition ?
                    and(condition, "cost", "in", costArray) :
                    where("cost", "in", costArray);
    }

    if (prepTimeVal !== 0) {
      condition = condition ? 
                      and(condition, where("totalTime", "<=", prepTimeVal)) :
                      where("totalTime", "<=", prepTimeVal);
    }


    let q = condition ? query(recipesRef, condition, limit(21)) : query(recipesRef, limit(21));

    let tmpRecipes = [];
    getDocs(q)
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          tmpRecipes.push(doc);
        });
        setFilteredRecipes(tmpRecipes);
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
          <div className="filter-container">
            <div className="filter-header">
              <span className="filter-title" onClick={filterRecipes}>Appliquer les filtres</span>
              <span className="filter-clear" onClick={handleClearClick}>Réinitialiser</span>
            </div>
            <hr className="separator" />
            <div className="filter-typ">
              <div className="option-header" onClick={handleCategoriesClick}>
                <span className="option-title">Categories</span>
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
                  <label>Plat principal</label>
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
                  <label>Accompagnement</label>
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

                  <label>Dessert</label>
                </div>
              </div>
            </div>

            <div className="filter-typ">
              <div className="option-header" onClick={handleDifficultyClick}>
                <span className="option-title">Niveau de difficulté</span>
                <span className={isDifficultyOpen ? "toggle-minus" : "toggle-plus"}>
                  <FontAwesomeIcon icon={isDifficultyOpen ? faMinus : faPlus} /></span>
              </div>
              <div className={`categories-options ${isDifficultyOpen ? 'open' : ''}`}>
              <div className="option">
                  <input
                    type="checkbox"
                    className='checkBoxOption'
                    id="TresFacile"
                    name="tresFacile"
                    checked={difficulty.tresFacile}
                    onChange={handleDiffCheckboxChange}
                  />
                  <label>Très facile</label>
                </div>
                <div className="option">

                  <input
                    type="checkbox"
                    className='checkBoxOption'
                    id="facile"
                    name="facile"
                    checked={difficulty.facile}
                    onChange={handleDiffCheckboxChange}
                  />
                  <label>Facile</label>
                </div>
                <div className="option">
                  <input
                    type="checkbox"
                    className='checkBoxOption'
                    id="moyenne"
                    name="moyenne"
                    checked={difficulty.moyenne}
                    onChange={handleDiffCheckboxChange}
                  />
                  <label>Moyenne</label>
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
                  <label>Difficile</label>
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
                  <label>Moins de 30 minutes</label>
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
                  <label>Moins d'une heure</label>
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
                  <label>Moins de 2 heures</label>
                </div>
              </div>
            </div>
            <div className="filter-Typ">
              <div className="option-header" onClick={handleCostClick}>
                <span className="option-title">Coût</span>
                <span className={isCostOpen ? "toggle-minus" : "toggle-plus"}>
                  <FontAwesomeIcon icon={isCostOpen ? faMinus : faPlus} />
                </span>
              </div>
              <div className={`categories-options ${isCostOpen ? 'open' : ''}`}>
                <div className="option">
                  <input
                    type="checkbox"
                    className='checkBoxOption'
                    id="bonMarche"
                    name="bonMarche"
                    onChange={handleCostCheckboxChange}
                    checked={cost.bonMarche}
                  />
                  <label>Bon marché</label>
                </div>
                <div className="option">
                  <input
                    type="checkbox"
                    className='checkBoxOption'
                    id="moyen"
                    name="moyen"
                    onChange={handleCostCheckboxChange}
                    checked={cost.moyen}
                  />
                  <label>Moyen</label>
                </div>
                <div className="option">
                  <input
                    type="checkbox"
                    className='checkBoxOption'
                    id="assezCher"
                    name="assezCher"
                    onChange={handleCostCheckboxChange}
                    checked={cost.assezCher}/>
                  <label>Assez cher</label>
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
                <RecipeCard image={recipe.data().image} title={recipe.data().name} id={recipe.id} link={"/recipe?id=" + recipe.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SearchPage;
