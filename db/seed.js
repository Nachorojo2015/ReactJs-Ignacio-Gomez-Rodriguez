import { collection , addDoc } from "firebase/firestore";
import db from "./firebase-config.js"
import productos from "../productos.json" assert { type: "json" }

const itemsRef = collection(db,"items")

const promises = productos.map(producto => addDoc(itemsRef,producto))

Promise.all(promises).then(()=> {
    console.log("done");
    process.exit(0);
})
