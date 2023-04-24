// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7ECAMt4u3adya5oYOetx86G3I4atVcAQ",
  authDomain: "auth-2b2e5.firebaseapp.com",
  projectId: "auth-2b2e5",
  storageBucket: "auth-2b2e5.appspot.com",
  messagingSenderId: "1015014974959",
  appId: "1:1015014974959:web:dcb3878c74296a8bea021a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
