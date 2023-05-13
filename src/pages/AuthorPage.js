import React, { useEffect } from 'react';
import '../assets/css/AuthorPage.css'
import Header from '../components/Header'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { database } from '../utils/firebase';
import Footer from '../components/Footer';
import Error404 from '../components/Error404';

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function AuthorPage() {
  const query = useQuery().get("id");

  const [loaded, setLoaded] = useState(false);
  const [found, setFound] = useState(false);
  const [author, setAuthor] = useState({});

  useEffect(() => {
    if (query && !loaded) {
      console.log("request sent")
      getDoc(doc(database, "users", query))
      .then((docRef) => {
        setLoaded(true);
        if (docRef.exists()) {
          setAuthor(docRef.data());
          setFound(true);
        }
        setLoaded(true);
      })
      .catch(() => console.log("Erreur"))
    }
    if (!query) {
      setLoaded(true);
    }
  }, [query, loaded]);

  if (!loaded) {
    return (
      <div id='authorPage'>
        <div id="root">
            <div className="loader-wrapper">
              <div className="loader"></div>
            </div>
          </div>
      </div>);
  }

  if (found) {
    return (
      <div id='authorPage'>
        <Header />
        <div id='author-profile'>
          <div><img alt='chef-image' src='/assets/chef.jpg'/></div>
          <div className='info'>
            <div>
              <h1>{author.username}</h1>
              <p>Créateur de recettes</p>
            </div>
          </div>
          
        </div>
        <div id='author-recipes'>
          <div className="recipe-cards">
            <h3>Creations par cet auteur:</h3>

          </div>
        </div>
        <Footer />
      </div>);
  }
  return (
    <Error404 />);
}

export default AuthorPage;