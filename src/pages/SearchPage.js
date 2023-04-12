import '../assets/css/SearchPage.css';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { database } from '../utils/firebase';

function SearchPage() {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(true);
  };

  function handleClearClick() {
    // Code pour effacer les filtres ici
  }

  function handleApplyClick() {
    // Valider les filtres et lancer la recherche
    // Code à ajouter ici
  }
  


  /* gérer les options qui s'ouvrent quand on clique sur un plus*/

  const [isCatergoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isCultureOpen, setIsCultureOpen] = useState(false);
  const [isDifficultyOpen, setIsDifficultyOpen] = useState(false);
  const [isTempsPreparationOpen, setIsTempsPreparationOpen] = useState(false);

  const handleCategoriesClick = () => {
    setIsCategoriesOpen(!isCatergoriesOpen);
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
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setDifficulty((prevState) => ({ ...prevState, [name]: checked }));
  };

  const filterRecipes = () => {
    const recipesRef = database.collection("recipe");

    let difficultyArray = [];
    if (difficulty.facile) difficultyArray.push("facile");
    if (difficulty.moyen) difficultyArray.push("moyen");
    if (difficulty.difficile) difficultyArray.push("difficile");

    let query = recipesRef;
    if (difficultyArray.length > 0) {
      query = query.where("difficulte", "in", difficultyArray);
    }

let filteredRecipes = [];
    query
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          filteredRecipes.push(doc.data());
        });
        setFilteredRecipes(filteredRecipes);
      })
      .catch((error) => {
        console.error(error);
      });
  };


  return (
    <div id='SearchPage'>
      <Header />
      <div id="search-container">
        <div id="filter-column">
          <div class="filter-container">
            <div class="filter-header">
              <span class="filter-title" onClick={handleApplyClick}>Filter Search</span>
              <span className="filter-clear" onClick={handleClearClick}>Clear</span>
            </div>
            <hr className="separator" />
            <div class="filter-typ">
              <div class="option-header" onClick={handleCategoriesClick}>
                <span class="option-title">Categories</span>
                <span className={isCatergoriesOpen ? "toggle-minus" : "toggle-plus"}>
                  <FontAwesomeIcon icon={isCatergoriesOpen ? faMinus : faPlus} /> </span>
              </div>

              <div className={`categories-options ${isCatergoriesOpen ? 'open' : ''}`}>
                <div className="option">
                  <input type="checkbox" id="plat" name="plat" value="plat" />
                  <label for="plat">Plat</label>
                </div>
                <div className="option">
                  <input type="checkbox" id="entree" name="entree" value="entree" />
                  <label for="entree">Entrée</label>
                </div>
                <div className="option">
                  <input type="checkbox" id="dessert" name="dessert" value="dessert" />

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
                    id="facile"
                    name="facile"
                    checked={difficulty.facile}
                    onChange={handleCheckboxChange}
                  />
                  <label for="plat">Facile</label>
                </div>
                <div className="option">
                  <input
                    type="checkbox"
                    id="moyen"
                    name="moyen"
                    checked={difficulty.moyen}
                    onChange={handleCheckboxChange}
                  />
                  <label for="entree">Moyen</label>
                </div>
                <div className="option">
                  <input
                    type="checkbox"
                    id="difficile"
                    name="difficile"
                    checked={difficulty.difficile}
                    onChange={handleCheckboxChange}
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
                  <input type="checkbox" id="PlusUneHeure" name="PlusUneHeure" value="PlusUneHeure" />
                  <label htmlFor="PlusUneHeure">Plus d'une heure</label>
                </div>
                <div className="option">
                  <input type="checkbox" id="entre30-45" name="entre30-45" value="entre30-45" />
                  <label htmlFor="entre30-45">entre 30 et 45 mins</label>
                </div>
                <div className="option">
                  <input type="checkbox" id="Moin30" name="Moin30" value="Moin30" />
                  <label htmlFor="Moin30">moins de 30 mins</label>
                </div>
              </div>
            </div>

            <div class="filter-Typ">
              <div class="option-header" onClick={handleCultureClick}>
                <span class="option-title">Culture</span>
                <span className={isCultureOpen ? "toggle-minus" : "toggle-plus"}>
                  <FontAwesomeIcon icon={isCultureOpen ? faMinus : faPlus} />
                </span>
              </div>
              <div className={`categories-options ${isCultureOpen ? 'open' : ''}`}>
                <div className="option">
                  <input type="checkbox" id="française" name="française" value="française" />
                  <label for="plat">française</label>
                </div>
                <div className="option">
                  <input type="checkbox" id="Italienne" name="Italienne" value="Italienne" />
                  <label for="entree">Italienne</label>
                </div>
                <div className="option">
                  <input type="checkbox" id="Japonaise" name="Japonaise" value="Japonaise" />
                  <label for="dessert">Japonaise</label>
                </div>
              </div>
            </div>

        

          </div>
        </div>
        <div id="result-column">
          <div id="trending-recipes">
            <h1 className="block-title" style={{ textAlign: 'center' }}>Résultat recherche</h1>
            <div className="recipe-cards">
              <RecipeCard
                title="Pesto Pasta"
                image="/assets/slider1.jpg"
                description="This classic Italian dish features spaghetti tossed in a delicious homemade pesto sauce made with fresh basil, garlic, olive oil, and Parmesan cheese."
                link="#"
              />
              <RecipeCard
                title="Pesto Pasta"
                image="/assets/slider2.jpg"
                description="This classic Italian dish features spaghetti tossed in a delicious homemade pesto sauce made with fresh basil, garlic, olive oil, and Parmesan cheese."
                link="#"
              />
              <RecipeCard
                title="Pesto Pasta"
                image="/assets/slider3.jpg"
                description="This classic Italian dish features spaghetti tossed in a delicious homemade pesto sauce made with fresh basil, garlic, olive oil, and Parmesan cheese."
                link="#"
              />
              <RecipeCard
                title="Pesto Pasta"
                image="/assets/pesto-pasta.jpg"
                description="This classic Italian dish features spaghetti tossed in a delicious homemade pesto sauce made with fresh basil, garlic, olive oil, and Parmesan cheese."
                link="#"
              />
              <RecipeCard
                title="Pesto Pasta"
                image="/assets/pesto-pasta.jpg"
                description="This classic Italian dish features spaghetti tossed in a delicious homemade pesto sauce made with fresh basil, garlic, olive oil, and Parmesan cheese."
                link="#"
              />
              <RecipeCard
                title="Pesto Pasta"
                image="/assets/pesto-pasta.jpg"
                description="This classic Italian dish features spaghetti tossed in a delicious homemade pesto sauce made with fresh basil, garlic, olive oil, and Parmesan cheese."
                link="#"
              />
              <RecipeCard
                title="Pesto Pasta"
                image="/assets/slider2.jpg"
                description="This classic Italian dish features spaghetti tossed in a delicious homemade pesto sauce made with fresh basil, garlic, olive oil, and Parmesan cheese."
                link="#"
              />
              <RecipeCard
                title="Pesto Pasta"
                image="/assets/slider3.jpg"
                description="This classic Italian dish features spaghetti tossed in a delicious homemade pesto sauce made with fresh basil, garlic, olive oil, and Parmesan cheese."
                link="#"
              />
              <RecipeCard
                title="Pesto Pasta"
                image="/assets/pesto-pasta.jpg"
                description="This classic Italian dish features spaghetti tossed in a delicious homemade pesto sauce made with fresh basil, garlic, olive oil, and Parmesan cheese."
                link="#"
              />

              {showMore && (
                <>
                  <RecipeCard
                    title="Pesto Pasta"
                    image="/assets/slider1.jpg"
                    description="This classic Italian dish features spaghetti tossed in a delicious homemade pesto sauce made with fresh basil, garlic, olive oil, and Parmesan cheese."
                    link="#"
                  />
                  <RecipeCard
                    title="Pesto Pasta"
                    image="/assets/slider1.jpg"
                    description="This classic Italian dish features spaghetti tossed in a delicious homemade pesto sauce made with fresh basil, garlic, olive oil, and Parmesan cheese."
                    link="#"
                  />
                  <RecipeCard
                    title="Pesto Pasta"
                    image="/assets/slider1.jpg"
                    description="This classic Italian dish features spaghetti tossed in a delicious homemade pesto sauce made with fresh basil, garlic, olive oil, and Parmesan cheese."
                    link="#"
                  />

                </>
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
