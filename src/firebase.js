import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCjHS3Sfj0kEsdBP85u6sxdxIx9i1vPceU",
    authDomain: "blogs-app-4b191.firebaseapp.com",
    projectId: "blogs-app-4b191",
    storageBucket: "blogs-app-4b191.appspot.com",
    messagingSenderId: "105992729395",
    appId: "1:105992729395:web:73e245d0bcc1e3af288446"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };