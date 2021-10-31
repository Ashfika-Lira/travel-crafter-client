import initFirebase from "../Firebase/firebase.init";
import { GoogleAuthProvider, updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut, getAuth } from "firebase/auth";
import { useEffect, useState } from "react";


const useFirebase = () => {
   const [user, setUser] = useState({});
   const [error, setError] = useState('');
   const [loading, setLoading] = useState(true);

   initFirebase();
   const googleProvider = new GoogleAuthProvider();
   const auth = getAuth();

   // Update user
   const updateName = (name) => {
      updateProfile(auth.currentUser, {
         displayName: name
      })
         .then(() => {

         })
         .catch(error => {
            setError(error.message)
         })
   };

   // Log in with Google
   const LogInWithGoogle = () => {
      setError('')
      return signInWithPopup(auth, googleProvider)
   };

   // register with email and password
   const RegisterWithEmailPassword = (email, password, displayName) => {
      setError('')

      createUserWithEmailAndPassword(auth, email, password)
         .then(result => {
            updateName(displayName);
            setUser(result.user)
            setLoading(true)
         })
         .catch(error => {
            setError(error.message)
         })
         .finally(() => {
            setLoading(false)
         });
   };
   // Log In with email and password
   const logInWithEmailPassword = (email, password) => {
      setError('')
      return signInWithEmailAndPassword(auth, email, password)

   };

   const logOut = () => {
      setError('')
      signOut(auth)
         .then(() => setUser({}))
         .finally(() => setLoading(false))
   };

   // Observe User State Changing
   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, user => {
         if (user) {
            setUser(user);
            setLoading(false)
         }
         else {
            setUser({});
         }
      })
      setLoading(false);
      return () => unsubscribe;
   }, []);


   return {
      loading,
      setLoading,
      setUser,
      user,
      setError,
      error,
      LogInWithGoogle,
      RegisterWithEmailPassword,
      logInWithEmailPassword,
      logOut
   }
};

export default useFirebase;
