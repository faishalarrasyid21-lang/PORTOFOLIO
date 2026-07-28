// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuYr9ZTRQKwC06M19HDQe8w74x8lLNVjE",
  authDomain: "portofolio-faishal-arrasyid.firebaseapp.com",
  projectId: "portofolio-faishal-arrasyid",
  storageBucket: "portofolio-faishal-arrasyid.firebasestorage.app",
  messagingSenderId: "73561267418",
  appId: "1:73561267418:web:88319d0299ef93e791d9e3",
  measurementId: "G-K2VWRKPR6N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
