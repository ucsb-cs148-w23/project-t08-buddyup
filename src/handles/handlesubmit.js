import { addDoc, collection } from "@firebase/firestore"
import { auth, firestore } from "../firebase_setup/firebase"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"

const handleSubmit = (testdata) => {
    const ref = collection(firestore, "test_data") // Firebase creates this automatically

    let data = {
        testData: testdata
    }

    try {
        addDoc(ref, data)
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });
    } catch(err) {
        console.log(err)
    }
}

const handleSignOut = () => {
    try {
       auth.signOut();
    } catch(err) {
        console.log(err)
    }
}

export default handleSubmit