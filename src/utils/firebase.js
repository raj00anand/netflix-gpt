// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlfK8wlsE0E1CZXWWy3_sxcXXaysCTQQ8",
  authDomain: "netflix-gpt-feae5.firebaseapp.com",
  projectId: "netflix-gpt-feae5",
  storageBucket: "netflix-gpt-feae5.appspot.com",
  messagingSenderId: "467511989381",
  appId: "1:467511989381:web:8457931ebfcf300f7e85ec",
  measurementId: "G-TWNTZZTSRE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();