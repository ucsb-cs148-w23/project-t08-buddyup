import { uuidv4 } from "@firebase/util";
//import { useState } from "react";
import {
    collection,
    doc,
    orderBy,
    query,
    setDoc,
  } from "firebase/firestore";
import { firestore } from "firebase_setup/firebase";
import {
    useCollectionData,
    useDocumentData,
  } from "react-firebase-hooks/firestore";

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

export function usePosts() {
    const q = query(collection(firestore, "posts"), orderBy("date", "desc"));
    const [posts, error] = useCollectionData(q);
    if (error) throw error;
    return {posts};
}