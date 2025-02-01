import firebaseConfig from "../config/firebaseConfig";
import { Button } from "@mui/material";
import {
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
  } from "firebase/auth";
import { initializeApp } from "firebase/app";
import React from 'react'

export const Login = () => {

    const app= initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [user, setUser] = React.useState(null);
  
    React.useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user)
          setUser(user);
        else
          setUser(null);
      })
    })
    const handleLogin = () => {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });


    }
  return (
    <div>
      {!user&&<input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />}
      {!user&&<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />}
      {!user&&<button onClick={handleLogin}>Login</button>}
      
      {user && <span>Welcome! {user.email}</span>}
      {user && <Button  variant="outlined" color="primary" onClick={() => signOut(auth)}>Logout</Button>}
      {/* {!user && <Link to="/register">Register</Link>} */}
    </div>
  )
}

