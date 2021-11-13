// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCl1M-j2VhxnZ6fx-Miyn8m6yQrKy4Cbvg",
    authDomain: "cathay59.firebaseapp.com",
    projectId: "cathay59",
    storageBucket: "cathay59.appspot.com",
    messagingSenderId: "907834924381",
    appId: "1:907834924381:web:f9679539892f2250869cb4",
    measurementId: "G-NMGZZRZBLN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);