import { collection, getDocs, query } from "firebase/firestore";
import { database } from "../utils/firebase";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import "../assets/css/CategoriesPage.css";
import Footer from "../components/Footer";
import { useNavigate } from "react-router";

function getAllDistinctCategories() {
  const q2 = query(collection(database, "recipe"));
    getDocs(q2)
    .then((snapshot) => {
      // Get an array of all the values in the 'nom' field
      const categories = snapshot.docs.map(doc => doc.data().categorie);
      // Get an array of distinct values in the 'nom' field
      const distinctCategories = [...new Set(categories)];
      // Set the distinct categories state variable
      console.log(distinctCategories);
      return distinctCategories;
    })
    .catch((e) => console.error(e));
    return null;
}

function CategoriesPage() { 

  const history = useNavigate();

  const [categories, setCategories] = useState([]);

  getAllDistinctCategories();
  useEffect(() => {
    const q = query(collection(database, "category"));
    getDocs(q)
      .then((snapshot) => setCategories(snapshot.docs))
      .catch((e) => console.error(e));
  }, []);


  return (
    <div id="all-categories">
      <Header />
      <div className="title">
        <h1 className='block-title'>All Categories</h1>
      </div>
      <div className="categories-container">
      {
        categories.map((category, index) => (

        <div key={'category-'+index} className="category-box flip-card">
          <div className="flip-card-inner">
              <div className="flip-card-front" style={{ backgroundImage: `url(/assets/${category.data().img})` }}>
                  <p className="title">{category.data().nom}</p>
                  <p>Hover Me</p>
              </div>
              <div className="flip-card-back">
                  <p className="title">Description</p>
                  <a onClick={() => {history("/search?category=" + category.data().nom)}}>Click me!</a>
              </div>
          </div>
      </div>
        ))
      }
      </div>
      <Footer />
    </div>
  );
}

export default CategoriesPage;