import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAbR9Me6zSTr_SRZsuPrpGjqVkmkU98XBU",
  authDomain: "food-order-app-6bbf8.firebaseapp.com",
  databaseURL:
    "https://food-order-app-6bbf8-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "food-order-app-6bbf8",
  storageBucket: "food-order-app-6bbf8.appspot.com",
  messagingSenderId: "853968155299",
  appId: "1:853968155299:web:85a3f60504312f87264516",
  measurementId: "G-XDCL0BV4C5",
};

const app = initializeApp(firebaseConfig);
const db = getAnalytics(app);
