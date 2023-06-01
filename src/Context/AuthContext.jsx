import React, { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/fb.config";
import {
  GoogleAuthProvider,
  TwitterAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import axios from "axios";

export const layerContext = createContext(null);
const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const googleConfig = new GoogleAuthProvider();

  const googleProvider = () => {
    setLoading(true);
    return signInWithPopup(auth, googleConfig);
  };

  const twitterConfig = new TwitterAuthProvider();
  const twitterProvider = () => {
    setLoading(true);
    return signInWithPopup(auth, twitterConfig);
  };
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
      if (user) {
        axios
          .post("http://localhost:3000/api/admin/cookies", {
            email: user.email,
          })
          .then((res) => {
            localStorage.setItem("token", res.data.token);
          })
          .catch((err) => console.log(err));
      } else {
        localStorage.removeItem("token");
      }
    });
    return unsubscribe;
  }, []);
  const authInfo = {
    user,
    loading,
    createUser,
    googleProvider,
    twitterProvider,
    login,
    logout,
  };
  return (
    <layerContext.Provider value={authInfo}>{children}</layerContext.Provider>
  );
};

export default AuthContext;
