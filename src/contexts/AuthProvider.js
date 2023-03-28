import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../firebase/firebase.config';
export const AuthContext = createContext();
const auth = getAuth();

const AuthProvider = ({ children }) => {
    const [user, setUser]= useState(null)
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn=(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logout = () => {
        return signOut(app);
    }
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth, (currentUser)=>{
            // console.log('user inside state change', currentUser);
            setUser(currentUser);
        });
        return ()=>{
            unsubscribe();
        }
    },[])
   
    const LoginWithGoogle= (provider)=>{
        return signInWithPopup(auth, provider);
    }
    const authInfo = {
        createUser, user, logout, signIn, LoginWithGoogle
    }
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;


