import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, getDocs, getDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB5GiLeEImjorXS6EpIBTtDplEgPAtziFc",
    authDomain: "labnotes-e1e3b.firebaseapp.com",
    projectId: "labnotes-e1e3b",
    storageBucket: "labnotes-e1e3b.appspot.com",
    messagingSenderId: "219736594564",
    appId: "1:219736594564:web:5c6836418406e78980cad1",
    measurementId: "G-8HWLRPWH36"
  };

const auth = getAuth(firebaseApp);

onAuthStateChanged(auth, user => {
    if (user ≠ null) {
    console.log('Log in succesful!');
} else {
    console.log('Authentication error');
}
});

export default firebase;