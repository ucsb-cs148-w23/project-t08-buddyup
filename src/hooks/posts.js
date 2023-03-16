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

export function usePosts(uid = null, filters = []) {

    const q = uid
                ? query(collection(firestore, "posts"), orderBy("date", "desc"), where("uid","==",uid))
                : (filters.length === 0) || (filters.length === 1 && filters[0] === "")
                    ? query(collection(firestore, "posts"), orderBy("date", "desc"))
                    : (filters[0] === "Housemate(s)" || filters[0] === "Housing")
                        ? query(collection(firestore, "posts"), orderBy("date", "desc"), where("looking", "==", filters[0]), where("tags", "array-contains-any", filters))
                        : query(collection(firestore, "posts"), orderBy("date", "desc"), where("tags", "array-contains-any", filters)) 


    const [posts,isLoading, error] = useCollectionData(q);
    
    if (error) throw error;
    return {posts, isLoading}; 
}

export function usePost(id) {
    const q = doc(firestore, "posts", id);
    const [post, isLoading] = useDocumentData(q);
  
    return { post, isLoading };
  }
//mock doc function and test usePosts