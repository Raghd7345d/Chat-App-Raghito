// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getreactnativepersistence } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import AsyncStorage from "@react-native-async-storage/async-storage";
import { collection, getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNAu_6o8LUDnJQmZ0tHIIqVFxugkIlbzs",
  authDomain: "fir-chat-575d0.firebaseapp.com",
  projectId: "fir-chat-575d0",
  storageBucket: "fir-chat-575d0.appspot.com",
  messagingSenderId: "92014712801",
  appId: "1:92014712801:web:8cc6239efc77416530a4a0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getreactnativepersistence(AsyncStorage),
});
export const db = getFirestore(app);
export const useRef = collection(db, "users");
export const roomRef = collection(db, "rooms");
