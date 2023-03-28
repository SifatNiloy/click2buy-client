import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.config';
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser]= useState(null)
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn=(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        return signOut(auth);
    }
    const updateUser = (userInfo) => {
        return updateProfile(user, userInfo)
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
        createUser, user, updateUser, logOut, signIn, LoginWithGoogle
    }
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;


