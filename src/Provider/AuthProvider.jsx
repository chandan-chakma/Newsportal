import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/Firebase.config.js';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    // console.log(user);
    const [loading, setLoading] = useState(true);

    const createEmailPasswordUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInWithEmailandPasswardUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () => {
       return signOut(auth)
    }


    const updateUserProfile = (updateData) => {
        return updateProfile(auth.currentUser,updateData)
    }

    useEffect(() => {
        const unSubcribe=onAuthStateChanged(auth, (currentUser) => {
            // console.log(currentUser);
            setUser(currentUser);
            setLoading(false)
        })
        return () => {
            unSubcribe()
        }
    },[])
   

    const authInfo = {
        setUser,
        user,
        loading,
        setLoading,
        updateUserProfile,
        logOut,
        createEmailPasswordUser,
        signInWithEmailandPasswardUser
    }
    return <AuthContext value={authInfo}>
        {children}
    </AuthContext>
};
export default AuthProvider;