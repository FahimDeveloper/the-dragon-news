import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const continueWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const newUserWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginUserWithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    }
    const logOut = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setUser(user)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])
    const authInfo = {
        user,
        setUser,
        continueWithGoogle,
        newUserWithEmail,
        loginUserWithEmail,
        logOut,
        resetPassword,
        loading,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
