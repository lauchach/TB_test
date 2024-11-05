// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdePQ8Ra6_2jvPWekMbgPFkUC314ltSwY",
  authDomain: "testtb-18e3b.firebaseapp.com",
  projectId: "testtb-18e3b",
  storageBucket: "testtb-18e3b.firebasestorage.app",
  messagingSenderId: "1064708395384",
  appId: "1:1064708395384:web:44c850978bfc90572eb88d",
  measurementId: "G-KLYZ84MRGF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const analytics = getAnalytics(app);