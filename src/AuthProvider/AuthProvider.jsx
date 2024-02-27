import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import axios from 'axios';


export const AuthContext = createContext(null)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleLogin = () =>{
        return signInWithPopup(auth,googleProvider)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    const updateUserProfile = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name
        });
    }    

    useEffect(()=>{
        const subscribe =  onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            console.log(currentUser)
            if(currentUser){
                axios.post('http://localhost:5000/jwt',{email:currentUser.email})
                .then(data=>localStorage.setItem('access-token',data.data.token))
                setLoading(false)
            }
            else{
                localStorage.removeItem('access-token')
                setLoading(false)
            }
            
        })
        return ()=>{
           return subscribe;
        }
    },[])

    const info={
        user,
        loading,
        signIn,
        createUser,
        googleLogin,
        logOut,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;