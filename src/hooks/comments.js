
import { uuidv4 } from "@firebase/util";
import {
  collection,
  deleteDoc,
  doc,
  orderBy,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { firestore, auth } from "firebase_setup/firebase";
import { useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";

export function useAddComment({ postID }) {
  const [isLoading, setLoading] = useState(false);
  async function addComment(text) {
    setLoading(true);
    const id = uuidv4();
    const date = Date.now();
    const uid = auth.currentUser.uid;
    const name = auth.currentUser.displayName;
    const docRef = doc(firestore, "comments", id);
    await setDoc(docRef, { text, id, postID, date, uid, name });

    setLoading(false);
  }

  return { addComment, isLoading };
}

export function useComments(postID) {
  const q = query(
    collection(firestore, "comments"),
    where("postID", "==", postID),
    orderBy("date", "asc")
  );
  const [comments, isLoading, error] = useCollectionData(q);
  if (error) throw error;

  return { comments, isLoading };
}

export function useDeleteComment() {
  const [isLoading, setLoading] = useState(false);

  async function deleteComment(id) {
    const res = window.confirm("Are you sure you want to delete this comment?");

    if (res) {
      setLoading(true);
      const docRef = doc(firestore, "comments", id);
      await deleteDoc(docRef);
      
      setLoading(false);
    }
  }

  async function deleteCommentUnsafe(id) {
    setLoading(true);
    const docRef = doc(firestore, "comments", id);
    await deleteDoc(docRef);
    
    setLoading(false);
  }

  return { deleteComment, deleteCommentUnsafe, isLoading };
}