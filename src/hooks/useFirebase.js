import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../pages/login/Firebase/firebase.initialize";

const useFirebase = () => {
    const [users, setUsers] = useState({});
    const [isLoding, setIsLoding] = useState(true);
 
    initializeAuthentication();

    const auth = getAuth();

    const handleGoogleSignIn =()=>{
        setIsLoding(true);
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
        
    };

    const handleSignOut =()=>{
        setIsLoding(true)
        signOut(auth)
        .then(result=> {

        })
        .finally(()=> setIsLoding(false))
    };
    
    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, user=>{
            if(user){
                setUsers(user);
            }
            else{
                setUsers({});
            }
            setIsLoding(false);
        });
        return ()=> unsubscribed;
    },[]);


    return {
        users,
        isLoding,
        setIsLoding,
        handleGoogleSignIn,
        handleSignOut,

    }
}
export default useFirebase;