import { doc, query } from "firebase/firestore";
import { firestore } from "firebase_setup/firebase";
import { useDocumentData } from "react-firebase-hooks/firestore";

export function useUser(id) {
    const q = query(doc( firestore, "users", id));
    const [user] = useDocumentData(q);
    return {user};
}