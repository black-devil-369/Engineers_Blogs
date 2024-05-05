// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FirbBase_API_Key,
  authDomain: "engineer-s-blog.firebaseapp.com",
  projectId: "engineer-s-blog",
  storageBucket: "engineer-s-blog.appspot.com",
  messagingSenderId: "980750656630",
  appId: "1:980750656630:web:ac8a22c85216efc387eb57",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
