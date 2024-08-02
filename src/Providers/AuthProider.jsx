import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  // login with facebook
  const loginWithFacebook = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider);
  };

  /**
   * Function for handling Google login
   */
  const loginWithGoogle = () => {
    // Log the authentication information
    console.log(auth);
    setLoading(true);
    // Sign in with Google popup
    return signInWithPopup(auth, googleProvider);
  };

// Signup user via manual input start
 
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUserInFo = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  // forgot password
  const forgetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
}

// Signup user via manual input end

  // Login user voia manual input
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Logout user
  const userLogOut = () => {
    setLoading(true);
    return signOut(auth);
  };


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
        setLoading(false);
        console.log("Current User From Auth Provider", currentUser);
    });
    return () => {
        return unsubscribe();
    }
}, [])

const authInfo = {
  createUser,
  loginUser,
  userLogOut,
  updateUserInFo,
  forgetPassword,
  loginWithFacebook,
  user,
  loading,
  loginWithGoogle,
  
};

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;