// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBem7CQBQ7V2aGlprPbArsSDK0x1JnymA",
  authDomain: "video-abee0.firebaseapp.com",
  projectId: "video-abee0",
  storageBucket: "video-abee0.appspot.com",
  messagingSenderId: "267361136859",
  appId: "1:267361136859:web:14c0793b14b338f6c85cfe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export default app;
