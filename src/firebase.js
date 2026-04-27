import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCvjdq9MEy08JIqHQAbMOgJcopylmJ4Rlc",
  authDomain: "bharthi-jewellery.firebaseapp.com",
  projectId: "bharthi-jewellery",
  storageBucket: "bharthi-jewellery.firebasestorage.app",
  messagingSenderId: "411800026042",
  appId: "1:411800026042:web:b5b958337dc99a54307b83",
  databaseURL: "https://bharthi-jewellery-default-rtdb.asia-southeast1.firebasedatabase.app"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
