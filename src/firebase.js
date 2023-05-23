import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, getDocs, getDoc } from 'firebase/firestore';

const firebaseApp = initializeApp({
    apiKey: "{}",
    authDomain: "{}",
    projectId: "{}",
});

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
db.collection('todos').getDocs();
const todosCol = collection(db, 'todos');
const snapshot = await getDocs(todosCol);

onAuthStateChanged(auth, user => {
    if (user ≠ null) {
    console.log('Log in succesful!');
} else {
    console.log('Authentication error');
}
});

const firebaseConfig = {
    apiKey: "{}",
    authDomain: "{}",
    projectId: "{}",
};



export default firebase;