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
import { useNavigate } from "react-router-dom";

export const Login = () => {

    const app= initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [user, setUser] = React.useState(null);
    const navigate = useNavigate();
  
    React.useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user){
          setUser(user);
          navigate("/menu");
        }
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
    <div className="login_container">
      <div className="login">
     
     <div>
     <img 
        src="https://cdn.prod.website-files.com/650aedb6397a7021a593e810/672ac5664163926064db6bd7_scyne-logo.svg" 
        alt="Scyne Logo" 
        style={{ height: '40px', width: 'auto' }}
      />
     </div>
     <div className="login_input">
     {!user&&<input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />}
     </div>
     <div className="login_input">
     {!user&&<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />}
     </div>
     <div>
     {!user&&<button onClick={handleLogin}>Login</button>}
     </div>
     
     {user && <span>Welcome! {user.email}</span>}
     {user && <Button  variant="outlined" color="primary" onClick={() => signOut(auth)}>Logout</Button>}
     {/* {!user && <Link to="/register">Register</Link>} */}
   </div>

    </div>
    
  )
}

