import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/css/RecipeCard.css";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { database } from "../utils/firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  getDocs,
  limit,
  query,
  where, doc
} from "firebase/firestore";

function RecipeCard(props) {
  const [userdetail, setUserdetail] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const[isFavorite, setIsFavorite] = useState(false);
  const[favoriteId, setFavoriteId] = useState(null);
  
  const checkIfAssociationExists = async () => {
    await getDocs(
      query(
        collection(database, "favorite"),
        where("user", "==", userdetail.id), where("recipe", "==", props.id)
      ),
    ).then((snapshot) => {
        if (snapshot.empty) {
          console.log(`No document found in collection`);
          setIsFavorite(false);
        } else {
          console.log(`Document found in collection.`);
          snapshot.docs.map((favorite, id)=> (setFavoriteId(favorite.id)));
          setIsFavorite(true);
        }
      })
      .catch((error) => {
        console.error(error);
        setIsFavorite(false);
      });
  };

  const addToFavorite = async () => {
    console.log(userdetail.id + " - " + props.id);
    checkIfAssociationExists();
    if(!isFavorite){
      const favorite = {recipe: props.id, user: userdetail.id}
      addDoc(collection(database, "favorite"), favorite)
        .then(function (docRef) {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
          console.error("Error adding document: ", error);
        });
    }
    else {
      const documentRef = doc(collection(database, "favorite"), favoriteId);
      await deleteDoc(documentRef);
      checkIfAssociationExists();
    }
  };

  useEffect(() => {checkIfAssociationExists();}, []);

  return (
    <div className="recipe-card">
      <div className="card-image">
        {JSON.parse(sessionStorage.getItem("user-signin")) !== null ? (
          <div className="favorite-btn">
            <i
              className={ isFavorite ? "redFill" : ""} onClick={
                addToFavorite
              }
            >
              <FontAwesomeIcon icon={faHeart} />
            </i>
            <span>liked!</span>
          </div>
        ) : (
          <div></div>
        )}
        <img
          src={props.image == null ? "/assets/not-found.png" : props.image}
          alt={props.title}
        />
      </div>
      <div className="card-desc">
        <div>
          <h1 className="card-title">{props.title}</h1>
          <p className="class-description">{props.description}</p>
          <a className="card-btn" href={props.link}>
            Voir la recette
          </a>
        </div>
      </div>
    </div>
  );
}
export default RecipeCard;
