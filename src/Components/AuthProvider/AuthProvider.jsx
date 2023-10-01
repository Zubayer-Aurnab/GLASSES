import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../../Firebase/Firebase.config";
import toast from "react-hot-toast";





export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // google login provider
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)

    }
    // create User
    const signIn = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }
    // User Login
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // update user 
    const UpdateUser = (name, img) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: img
        })
    }

    // Auth state change
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false)
        });

    }, [])
    // logout user
    const logoutUser = () => {
        signOut(auth)
            .then(() => {
                toast.success("Logged out successfully");
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };


    const authItems = {
        googleSignIn,
        signIn,
        logIn,
        logoutUser,
        user,
        loading,
        UpdateUser
    }
    console.log(user);

    return (
        <AuthContext.Provider value={authItems}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;