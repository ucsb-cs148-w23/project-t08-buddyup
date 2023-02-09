import { uuidv4 } from "@firebase/util";
//import { useState } from "react";
import {
    collection,
    doc,
    orderBy,
    query,
    setDoc,
    where,
  } from "firebase/firestore";
import { firestore } from "firebase_setup/firebase";
import {
    useCollectionData, useDocumentData,
  } from "react-firebase-hooks/firestore";
import { auth } from "firebase_setup/firebase";

export function useAddPost() {
    //const [isLoading, setLoading] = useState(false);
    async function addPost(post) {
        //setLoading(true);
        const id = uuidv4();
        const uid = auth.currentUser.uid;
        const name = auth.currentUser.displayName;
        console.log("UID:");
        console.log(uid);
        await setDoc(doc(firestore, "posts", id), {
            ...post, 
            id,
            date: Date.now(),
            uid,
            name,
        })
    }
    return {addPost};
}

export function usePosts(uid = null) {

    
    const q = uid
        ? query(collection(firestore, "posts"), orderBy("date", "desc"), where("uid","==",uid))
        : query(collection(firestore, "posts"), orderBy("date", "desc"));
    const [posts,isLoading, error] = useCollectionData(q);
    
    if (error) throw error;
    return {posts, isLoading}; 
}

export function usePost(id) {
    const q = doc(firestore, "posts", id);
    const [post, isLoading] = useDocumentData(q);
  
    return { post, isLoading };
  }
