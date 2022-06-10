// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyB_Fa5Y4GtmbHLGPYzB_D5N7-GZ3z_aEBo",
  authDomain: "dblog-app-e4c46.firebaseapp.com",
  projectId: "dblog-app-e4c46",
  storageBucket: "dblog-app-e4c46.appspot.com",
  messagingSenderId: "234746520258",
  appId: "1:234746520258:web:3b2f547de527df7e92115b",
  measurementId: "G-M9KJX3J8Q7"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app)