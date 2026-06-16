// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore"
import { 
  createUserWithEmailAndPassword, 
  getAuth, 
  signInWithEmailAndPassword,
  signInWithPopup,
  signInAnonymously, 
  signOut,
  GoogleAuthProvider, 
  EmailAuthProvider
} from "firebase/auth";
import { toast } from "react-toastify";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA89JHHx_OZSwZMOy3p3HosIWSFMDtCh_0",
  authDomain: "lavelle-virtualinternship-02.firebaseapp.com",
  projectId: "lavelle-virtualinternship-02",
  storageBucket: "lavelle-virtualinternship-02.firebasestorage.app",
  messagingSenderId: "669039153073",
  appId: "1:669039153073:web:8b31ddea1bb0d640713790"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
    toast.success("Login Successful")
  }
  catch (error) {
    console.log("Login Unsuccessful", error)
    toast.error(error.code.split('/')[1].split('-').join(' '))
  }
};

const googleSignUp = async () => {
  try {
    await signInWithPopup(auth, googleProvider )
    toast.success("Signed in with Google")
  }
  catch(error) {
    console.log("Sign Up Unsuccessful", error)
    toast.error(error.code.split('/')[1].split('-').join( ))
  }
};

const emailSignUp = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      EmailAuthProvider:"local",
      email,
    });
  }
  catch(error) {
    console.log("Sign Up Unsuccessful", error)
    toast.error(error.code.split('/')[1].split('-').join(' '))
  }
};

const handleGuest = async () => {
    await signInAnonymously(auth)
  }

const logout = () => {
  signOut(auth);
};

export { db, auth, googleProvider,login, googleSignUp, emailSignUp, logout, handleGuest };
