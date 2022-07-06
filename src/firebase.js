import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCQBxVKZAo5JPXz1G4X11_WGQczfhDjoDE",
  authDomain: "orderweb-80b07.firebaseapp.com",
  projectId: "orderweb-80b07",
  storageBucket: "orderweb-80b07.appspot.com",
  messagingSenderId: "406291466055",
  appId: "1:406291466055:web:e788862f4cd6dc85d4ae62",
  measurementId: "G-3RYNXMCJN8",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
