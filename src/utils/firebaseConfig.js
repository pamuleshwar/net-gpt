// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0rBi2cZqFrbDmCiJF6PsHyY-lIW8u41s",
  authDomain: "net-gpt-ff3c9.firebaseapp.com",
  projectId: "net-gpt-ff3c9",
  storageBucket: "net-gpt-ff3c9.firebasestorage.app",
  messagingSenderId: "451568039590",
  appId: "1:451568039590:web:f1ecb8bdde11dc691d2667",
  measurementId: "G-QYZTVD992N"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);