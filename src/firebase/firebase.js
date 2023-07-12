// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {collection, getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCshs_uSOrIqZfnQejMvp9g4G4otB3K8rk",
  authDomain: "movieverse-af15c.firebaseapp.com",
  projectId: "movieverse-af15c",
  storageBucket: "movieverse-af15c.appspot.com",
  messagingSenderId: "909152427478",
  appId: "1:909152427478:web:c7ad0279171e50a09c1877"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const moviesRef = collection(db,"movies");
export const reviewsRef = collection(db,"reviews");
export const usersRef = collection(db,"users");

export default app;