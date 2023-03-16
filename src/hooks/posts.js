import { uuidv4 } from "@firebase/util";
//import { useState } from "react";
import {
    collection,
    doc,
    orderBy,
    query,
    setDoc,
    where,
    deleteDoc,
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
//mock doc function and test usePosts

export function useDeletePost() {
    async function deletePost(id){
        const res = window.confirm("Are you sure you want to delete this post?");
        if(res){
            await deleteDoc(doc(firestore,"posts",id));
            return true;
        }
        return false;
    }

    return {deletePost};
}