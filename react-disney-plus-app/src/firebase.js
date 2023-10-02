// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCh0lLugPD0VQUmH5EswbYIZKJjXOltibM",
  authDomain: "react-disney-plus-app-eed5f.firebaseapp.com",
  projectId: "react-disney-plus-app-eed5f",
  storageBucket: "react-disney-plus-app-eed5f.appspot.com",
  messagingSenderId: "204616646186",
  appId: "1:204616646186:web:f8310ec2021a717c0d4d53",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
