// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDeUQ_gGDf7LFEtd2ZQUko0HYojL6HOdAo",
    authDomain: "shivanshu-portfolio.firebaseapp.com",
    projectId: "shivanshu-portfolio",
    storageBucket: "shivanshu-portfolio.appspot.com",
    messagingSenderId: "632837527699",
    appId: "1:632837527699:web:3413cbfa702ae4f0c29566",
    measurementId: "G-R5WDQS6ZRX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export const storage = getStorage(app)

// const analytics = getAnalytics(app);
