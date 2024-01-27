
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGhgwBqnnkikCaWYniD2Dwk95v0t_0vdc",
  authDomain: "reactcoder-ecommerce-68120.firebaseapp.com",
  projectId: "reactcoder-ecommerce-68120",
  storageBucket: "reactcoder-ecommerce-68120.appspot.com",
  messagingSenderId: "824985948789",
  appId: "1:824985948789:web:0de777ba5293b9be931e3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// import { collection, query, where, getDocs } from "firebase/firestore";

