import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseApp = initializeApp({
    apiKey: "{}",
    authDomain: "{}",
    projectId: "{}",
})

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

const firebaseConfig = {
    apiKey: "{}",
    authDomain: "{}",
    projectId: "{}",
};



export default firebase;