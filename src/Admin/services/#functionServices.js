import { collection, addDoc, doc,  getDocs, updateDoc  } from "firebase/firestore"; 
import { db } from "../config/firebaseconfig";


export async function postData(data) {
    try {
        const docRef = await addDoc(collection(db, "blogs"), data);
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
 }