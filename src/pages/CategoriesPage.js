import { collection, getDocs, query } from "firebase/firestore";
import { database } from "../utils/firebase";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import "../assets/css/CategoriesPage.css";
import Footer from "../components/Footer";

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
    .catch((e) => console.log("Erreur"));
    return null;
}

function CategoriesPage() { 

  const [categories, setCategories] = useState([]);

  getAllDistinctCategories();
  useEffect(() => {
    const q = query(collection(database, "categorie-recette"));
    getDocs(q)
      .then((snapshot) => setCategories(snapshot.docs))
      .catch((e) => console.log("Erreur"));
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
        <div key={'category-'+index} className="category-box" style={{ backgroundImage: `url(/assets/${category.data().img})` }}>
          
          <h1>{category.data().nom}</h1>
        </div>
        ))
      }
      </div>
      <Footer />
    </div>
  );
}

export default CategoriesPage;