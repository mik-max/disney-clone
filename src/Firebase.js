import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBBEpX7vbiOxM-M3WM67kpY97OjfY-ZBUo",
  authDomain: "disney-clone-99f2f.firebaseapp.com",
  databaseURL: "https://disney-clone-99f2f-default-rtdb.firebaseio.com",
  projectId: "disney-clone-99f2f",
  storageBucket: "disney-clone-99f2f.appspot.com",
  messagingSenderId: "3115111543",
  appId: "1:3115111543:web:523496e5541b70d6bb6272"
})
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export {auth, provider, firebaseApp}
