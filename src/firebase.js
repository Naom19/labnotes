import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB5GiLeEImjorXS6EpIBTtDplEgPAtziFc",
    authDomain: "labnotes-e1e3b.firebaseapp.com",
    projectId: "labnotes-e1e3b",
    storageBucket: "labnotes-e1e3b.appspot.com",
    messagingSenderId: "219736594564",
    appId: "1:219736594564:web:5c6836418406e78980cad1",
    measurementId: "G-8HWLRPWH36"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;