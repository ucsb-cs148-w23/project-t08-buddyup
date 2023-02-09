import { doc, query } from "firebase/firestore";
import { firestore } from "firebase_setup/firebase";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { useState } from "react";
import { DASHBOARD, PROFILE } from "lib/routes";

export function useUser(id) {
    const q = query(doc( firestore, "users", id));
    const [user] = useDocumentData(q);
    return {user};
}

export function useGoToProfile() {
    const [isLoading, setLoading] = useState(false);
    const toast = useToast();
    const navigate = useNavigate();
 
     async function goToProfile() {
         setLoading(true);
         toast({
             title: "This is your profile page",
             status: "success",
             isClosable: true,
             position: "top",
             duration: 5000,
         })
         navigate(PROFILE);
         setLoading(false);
         return true;
     }
 
     return {goToProfile, isLoading};
}

export function useGoToDashboard() {
    const [isLoading, setLoading] = useState(false);
    const toast = useToast();
    const navigate = useNavigate();
 
     async function goToDashboard() {
         setLoading(true);
         toast({
             title: "This is your Dashboard",
             status: "success",
             isClosable: true,
             position: "top",
             duration: 5000,
         })
         navigate(DASHBOARD);
         setLoading(false);
         return true;
     }
 
     return {goToDashboard, isLoading};
}