import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


let firebaseConfig = {
  apiKey: "AIzaSyCUpNKaqxtDZ-yJB928pCiVHjPMRH4UZqE",
  authDomain: "petitdone.firebaseapp.com",
  databaseURL: "https://petitdone-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "petitdone",
  storageBucket: "petitdone.appspot.com",
  messagingSenderId: "159629837266",
  appId: "1:159629837266:web:90627efb0e7b156273be0b",
  measurementId: "G-9LCTYM43XR"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);

