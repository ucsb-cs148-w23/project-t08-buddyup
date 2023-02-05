import { useToast } from "@chakra-ui/react";
import { uuidv4 } from "@firebase/util";
import {
  arrayRemove,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "firebase_setup/firebase";
import { useState } from "react";
import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";


export function usePosts(uid = null) {
    const queryResult = uid 
        ? query(collection(db,"posts"), orderBy("date","desc"), where("uid","==",uid)) //If uid, get posts from user
        : query(collection(db,"posts"), orderBy("date","desc")) //If no uid, get all posts
    ;
    const [posts, isLoading, error] = useCollectionData(queryResult); //get data about query
    if (error) throw error; //throw the error
    return { posts, isLoading }; //return the good stuff
}