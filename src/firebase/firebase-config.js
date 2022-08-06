import { initializeApp } from "@firebase/app";
import { getFirestore } from "@firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAcanMbGNdlnSqioVUQvz__bX1XQT8HqDs",
  authDomain: "custoso-40f74.firebaseapp.com",
  projectId: "custoso-40f74",
  storageBucket: "custoso-40f74.appspot.com",
  messagingSenderId: "347890765686",
  appId: "1:347890765686:web:78d8da9a70928721543457",
  measurementId: "G-YW0PTXKG2B",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
