import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAELGTCjG4-rJpU68ZHQt-VjrJKszBZEvY",
  authDomain: "netflix-react-4b0c2.firebaseapp.com",
  projectId: "netflix-react-4b0c2",
  storageBucket: "netflix-react-4b0c2.appspot.com",
  messagingSenderId: "964089796557",
  appId: "1:964089796557:web:d315d54df8badc694ad684"
};
const firebaseApp= firebase.initializeApp(firebaseConfig);
const db= firebaseApp.firestore();
const auth = getAuth();

export {auth , db};