import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';
import { AuthContext } from "./AuthContext";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const passwordReset = (email) => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email);
    }

    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    // get current user info
    useEffect(() => {
        // step-1 set a observer
        // step-2 set in a variable
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        })
        // step-3 return and call the variable so that you can clear the reference

        return () => {
            unsubscribe();
        }
    }, [])


    const authInfo = {
        createUser,
        signInUser,
        signInWithGoogle,
        passwordReset,
        user,
        loading,
        signOutUser,
    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;