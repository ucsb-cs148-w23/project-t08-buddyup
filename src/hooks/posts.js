import { uuidv4 } from "@firebase/util";
//import { useState } from "react";
import {
    doc,
    setDoc,
  } from "firebase/firestore";
import { firestore } from "firebase_setup/firebase";


export function useAddPost() {
    //const [isLoading, setLoading] = useState(false);
    async function addPost(post) {
        //setLoading(true);
        const id = uuidv4();
        await setDoc(doc(firestore, "posts", id), {
            ...post, 
            id,
            date: Date.now(),
        })
    }
    return {addPost};
}