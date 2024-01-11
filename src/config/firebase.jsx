
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDVrnfsgWrS6CI6cPoh8gmoKf7QZ87Bo2g",
  authDomain: "adit-question-generator.firebaseapp.com",
  projectId: "adit-question-generator",
  storageBucket: "adit-question-generator.appspot.com",
  messagingSenderId: "183498410359",
  appId: "1:183498410359:web:e2e7651956e19f45bb7972",
  measurementId: "G-ELS3NN9NKX"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);