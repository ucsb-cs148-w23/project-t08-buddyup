import React from 'react';
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
  
const Login = () => {
  
    // Sign in with google
    const signin = () => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    }

    return (
        <div>
            <h>Hello</h>
            <center>
            <button style={{"marginTop" : "200px"}} 
                onClick={signin}>Sign In with Google</button>
            </center>
        </div>
    );
}
  
export default Login;