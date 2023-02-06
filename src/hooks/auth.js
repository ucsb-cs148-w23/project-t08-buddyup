import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "firebase_setup/firebase";
import { useState } from "react";
import { DASHBOARD, LOGIN } from "lib/routes";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export function useAuth() {
    const [authUser, isLoading, error] = useAuthState(auth);

    return { user: authUser, isLoading, error };
}

export function useLogin() {
   const [isLoading, setLoading] = useState(false);
   const toast = useToast();
   const navigate = useNavigate();

    async function login() {
        setLoading(true);
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
        toast({
            title: "You are logged in",
            status: "success",
            isClosable: true,
            position: "top",
            duration: 5000,
        })
        navigate(DASHBOARD);
        setLoading(false);
        return true;
    }

    return {login, isLoading};
}

export function useLogout() {
    const [isLoading, setLoading] = useState(false);
    const toast = useToast();
    const navigate = useNavigate();
 
     async function logout() {
         setLoading(true);
         await auth.signOut();
         toast({
             title: "You are logged out",
             status: "success",
             isClosable: true,
             position: "top",
             duration: 5000,
         })
         navigate(LOGIN);
         setLoading(false);
         return true;
     }
 
     return {logout, isLoading};
 }