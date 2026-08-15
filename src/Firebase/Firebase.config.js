// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCEQobFp16APt95rMooLb6jw5cbS_n4hco",
    authDomain: "news-portal-22be1.firebaseapp.com",
    projectId: "news-portal-22be1",
    storageBucket: "news-portal-22be1.firebasestorage.app",
    messagingSenderId: "238803306022",
    appId: "1:238803306022:web:daeebc78ee976200c888e7",
    measurementId: "G-VQY6GLYV2J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)