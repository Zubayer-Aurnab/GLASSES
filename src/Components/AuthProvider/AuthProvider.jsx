import { createContext } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from "../../Firebase/Firebase.config";





export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {


    // google login provider
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }
    // create User
    const signIn = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // User Login
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authItems = {
        googleSignIn,
        signIn,
        logIn,
    }


    return (
        <AuthContext.Provider value={authItems}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;