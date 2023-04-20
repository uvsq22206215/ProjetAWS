import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateEmail,
} from "firebase/auth";
import { auth, database } from "../utils/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useNavigate } from "react-router";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  let history = useNavigate();
  const [user, setUser] = useState(null);
  const [usr, setUsr] = useState({});

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("user-signin");
    signOut(auth);
    history("/");
  };

  const getUsr = async (e) => {
    var detailRef = null;
    var q = null;
    var querySnapshot = null;
    if (user) {
      detailRef = collection(database, "users");
      q = await query(detailRef, where("id", "==", user.uid));
      querySnapshot = await getDocs(q);
    }

    await querySnapshot.forEach(async (doc) => {
      setUsr(doc.data());
      sessionStorage.setItem("user", doc.data());
    });
  };

  const updateMail = async (email) => {
    console.log(email);
    await updateEmail(auth.currentUser, email)
      .then((resp) => {})
      .catch((error) => {
        // logout()
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      sessionStorage.setItem("user-signin", JSON.stringify(currentUser));
      var detailRef = null;
      var q = null;
      var querySnapshot = null;

      if (currentUser) {
        detailRef = collection(database, "users");
        q = await query(detailRef, where("id", "==", currentUser.uid));
        querySnapshot = await getDocs(q);
      }

      await querySnapshot.forEach(async (doc) => {
        setUsr(doc.data());
        sessionStorage.setItem("user", JSON.stringify(doc.data()));
      });
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider
      value={{ user, usr, getUsr, logout, signIn, updateMail }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
