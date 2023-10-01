
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCfoxzDuL8FAPObpX5euUXYDY7jRXQAmy4",
    authDomain: "react-glasses-11890.firebaseapp.com",
    projectId: "react-glasses-11890",
    storageBucket: "react-glasses-11890.appspot.com",
    messagingSenderId: "165027689717",
    appId: "1:165027689717:web:53538f43ba75bb1efc41bc"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth