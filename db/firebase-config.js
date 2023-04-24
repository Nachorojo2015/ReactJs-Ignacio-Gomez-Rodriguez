import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCR3ZPQdXOlWn0u9qKsjb-ad8k5TN8o8bw",
  authDomain: "e-commerce-react-d668c.firebaseapp.com",
  projectId: "e-commerce-react-d668c",
  storageBucket: "e-commerce-react-d668c.appspot.com",
  messagingSenderId: "355497943632",
  appId: "1:355497943632:web:3f233981118a1dc5a52755"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export default db;