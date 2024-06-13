// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgng8Mro82d7gvy55KYxzfGemwKlF1l8w",
  authDomain: "ise-research-paper.firebaseapp.com",
  projectId: "ise-research-paper",
  storageBucket: "ise-research-paper.appspot.com",
  messagingSenderId: "335479031996",
  appId: "1:335479031996:web:380cfbbe13bc0d781428b9",
  measurementId: "G-QVEEPMV820"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;