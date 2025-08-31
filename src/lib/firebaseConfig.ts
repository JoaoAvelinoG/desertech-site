// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.VITE_APIKEY_FIREBASE,
  authDomain: "desertech-form.firebaseapp.com",
  projectId: "desertech-form",
  storageBucket: "desertech-form.firebasestorage.app",
  messagingSenderId: "351662236108",
  appId: "1:351662236108:web:53e3fc81e18f1c83b83d69",
  measurementId: "G-XYS9LFCBG6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

// const analytics = getAnalytics(app);
