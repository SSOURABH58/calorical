// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAds8Wt2soFdFl6HY71HKvFoNT2DvOpSQk",
    authDomain: "caloriecalc-a58da.firebaseapp.com",
    projectId: "caloriecalc-a58da",
    storageBucket: "caloriecalc-a58da.appspot.com",
    messagingSenderId: "763831792572",
    appId: "1:763831792572:web:913706f07efb6f2e5c71b9",
    measurementId: "G-QSPL1NPJYR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);