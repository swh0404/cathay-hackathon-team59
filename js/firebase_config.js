// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBU4n4LhVBYV8LkT2m0IOErP09uvWBa7Rs",
    authDomain: "cathay-hackathon-group-59.firebaseapp.com",
    projectId: "cathay-hackathon-group-59",
    storageBucket: "cathay-hackathon-group-59.appspot.com",
    messagingSenderId: "287047563383",
    appId: "1:287047563383:web:65bd4abf766965782cee72",
    measurementId: "G-66V1Y6NBK0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export app; 