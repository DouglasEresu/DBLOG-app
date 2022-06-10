import { collection, addDoc, doc, updateDoc  } from "firebase/firestore"; 
import { db } from "../config/firebaseconfig";

export  async function postData(data){
    try {
        const docRef = await addDoc(collection(db, "to-do"), data);
        const documentRef = await doc(db, "to-do", docRef.id);
        await updateDoc(documentRef, {
            id: docRef.id
          })
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}