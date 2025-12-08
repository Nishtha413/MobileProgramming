import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
        apiKey: "AIzaSyDZW4bcpgIABkB1reQ0vqhQm5e4eZUQ51Y",
        authDomain: "mobile-proj-ea5a3.firebaseapp.com",
        projectId: "mobile-proj-ea5a3",
        storageBucket: "mobile-proj-ea5a3.firebasestorage.app",
        messagingSenderId: "683510319996",
        appId: "1:683510319996:web:5d81db023d625ff377b2f9",
        measurementId: "G-XVXEDXK35V"
};

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    export const db = getDatabase(app);