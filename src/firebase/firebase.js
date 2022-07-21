import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVFMsQ2MT-oANl2OqM75bh_6cOawZPkJY",
  authDomain: "imperkart-react.firebaseapp.com",
  projectId: "imperkart-react",
  storageBucket: "imperkart-react.appspot.com",
  messagingSenderId: "957683903236",
  appId: "1:957683903236:web:50abbc344c8dd4b9acfe51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);