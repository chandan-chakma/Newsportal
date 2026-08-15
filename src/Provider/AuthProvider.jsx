import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/Firebase.config.js';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    console.log(user);

    const createEmailPasswordUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInWithEmailandPasswardUser = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () => {
       return signOut(auth)
    }

    useEffect(() => {
        const unSubcribe=onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser);
        })
        return () => {
            unSubcribe()
        }
    },[])
   

    const authInfo = {
        setUser,
        user,
        logOut,
        createEmailPasswordUser,
        signInWithEmailandPasswardUser
    }
    return <AuthContext value={authInfo}>
        {children}
    </AuthContext>
};
export default AuthProvider;