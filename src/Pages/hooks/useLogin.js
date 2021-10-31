import { useState } from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "./useAuth";

const useLogin = () => {
   const { setUser, setError, logInWithEmailPassword, RegisterWithEmailPassword, setLoading, LogInWithGoogle } = useAuth();
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [displayName, setDisplayName] = useState()

   const history = useHistory();
   const location = useLocation();
   const redrct_url = location.state?.from || '/home';



   const emailChange = (e) => {
      setError('')
      setEmail(e.target.value)
   };
   const passChange = (e) => {
      setError('')
      setPassword(e.target.value)
   };
   const NameChange = (e) => {
      setError('')
      setDisplayName(e.target.value)
   };
   const handleRegister = (e) => {
      e.preventDefault();
      RegisterWithEmailPassword(email, password, displayName)
   }
   const handleLogIn = (e) => {
      e.preventDefault();
      displayName ? setError('') : setError('input your name')
      logInWithEmailPassword(email, password)
         .then(result => {
            setUser(result.user);
            history.push(redrct_url);
            setLoading(true)
         })
         .catch(error => {
            setError(error.message)
         })
         .finally(() =>
            setLoading(false))
         ;
   }

   const handleGoogle = () => {
      LogInWithGoogle()
         .then(result => {
            setUser(result.user)
            history.push(redrct_url);
            setLoading(true)
         })
         .catch(error => {
            setError(error.message)
         })
         .finally(() => {
            setLoading(false)
         })
   }

   return {
      handleLogIn,
      handleRegister,
      NameChange,
      passChange,
      emailChange,
      handleGoogle
   }
}

export default useLogin;