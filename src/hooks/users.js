import { doc, getDoc, query, setDoc } from "firebase/firestore";
import { firestore, auth } from "firebase_setup/firebase";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { DASHBOARD, INFORMATION, INFORMATION2, PROTECTED } from "lib/routes";


export function useUser(id) {
    const q = query(doc( firestore, "users", id));
    const [user, isLoading, error] = useDocumentData(q);
    if (error) throw error;
    return {user, isLoading};
}

export function useAddUser() {

    async function addUser() {
        const uid = auth.currentUser.uid;
        const name = auth.currentUser.displayName;
        const email = auth.currentUser.email;
        const pfpURL = auth.currentUser.photoURL;
        const bio = "";
        const year = "";
        const pronouns = "";
        const roomtype = "";
        const wantstoLive = "";
        const admin = "False"
        await setDoc(doc(firestore, "users", uid), {
            uid,
            name,
            email,
            pfpURL,
            pronouns,
            roomtype,
            bio,
            year,
            wantstoLive,
            admin,
        })
        return true;
    }

    async function checkUser(){
        const docRef = doc(firestore, "users", auth.currentUser.uid);
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()){
            return true;
        }else{
            addUser();
        }
    }

    return {checkUser};

}

export function useSaveProfile(){
    async function saveProfile(name,email,pfpURL,bio,year,wantstoLive,pronouns,roomtype){
        const uid = auth.currentUser.uid;
        await setDoc(doc(firestore, "users", uid), {
            uid,
            name,
            email,
            pfpURL,
            bio,
            year,
            wantstoLive,
            pronouns,
            roomtype,
        })
        return true;
    }

    return {saveProfile};
}

export function useGoToProfile() {
    const [isLoading, setLoading] = useState(false);
    const navigate = useNavigate();
 
     async function goToProfile(id=null) {
         setLoading(true);
         navigate(`${PROTECTED}/profile/${id}`);
         setLoading(false);
         return true;
     }
 
     return {goToProfile, isLoading};
}

export function useGoToDashboard() {
    const [isLoading, setLoading] = useState(false);
    const navigate = useNavigate();
 
     async function goToDashboard() {
         setLoading(true);
         navigate(DASHBOARD);
         setLoading(false);
         return true;
     }
 
     return {goToDashboard, isLoading};
}

export function useGoToInformation() {
    const [isLoading, setLoading] = useState(false);
    const navigate = useNavigate();
 
     async function goToInformation() {
         setLoading(true);
         navigate(INFORMATION);
         setLoading(false);
         return true;
     }
 
     return {goToInformation, isLoading};
}

export function useGoToInformation2() {
    const [isLoading, setLoading] = useState(false);
    const navigate = useNavigate();
 
     async function goToInformation2() {
         setLoading(true);
         navigate(INFORMATION2);
         setLoading(false);
         return true;
     }
 
     return {goToInformation2, isLoading};
}

export function useEditProfile() {
    const [isLoading, setLoading] = useState(false);
    const navigate = useNavigate();
 
     async function goToEdit(id=null) {
         setLoading(true);
         navigate(`${PROTECTED}/profileedit/${id}`);
         setLoading(false);
         return true;
     }
 
     return {goToEdit, isLoading};
}