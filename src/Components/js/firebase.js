import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-rF9W8nCz2OC9bwtM_a7Tr0qr33b0JR8",
  authDomain: "my-linkedin-clone-2c75b.firebaseapp.com",
  projectId: "my-linkedin-clone-2c75b",
  storageBucket: "my-linkedin-clone-2c75b.appspot.com",
  messagingSenderId: "858770491347",
  appId: "1:858770491347:web:5e140560722f287d7e1126",
};

const app = initializeApp(firebaseConfig);
const db = getStorage(app);
const auth = getAuth();

export { auth, db };
