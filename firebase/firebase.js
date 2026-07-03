// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection, onSnapshot, query, where } from "firebase/firestore"
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInAnonymously,
  signOut,
  GoogleAuthProvider,
  sendPasswordResetEmail,
} from "firebase/auth";
import { getFunctions, httpsCallable } from "firebase/functions";
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
    return true
  }
  catch (error) {
    console.log("Login Unsuccessful", error)
    toast.error(error.code.split('/')[1].split('-').join(' '))
  }
};

const googleSignIn = async () => {
  try {
    await signInWithPopup(auth, googleProvider )
    toast.success("Signed in with Google")
    return true
  }
  catch(error) {
    console.log("Sign Up Unsuccessful", error)
    toast.error(error.code.split('/')[1].split('-').join( ))
  }
};

const loginGuest = async () => {
  try {
    await signInAnonymously(auth)
    toast.success("Successful Login")
    return true
  }
  catch(error) {
    console.log("Login Unsuccessful", error)
    toast.error(error.code.split('/')[1].split('-').join(' '))
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
    toast.success("Success! Thank You for Signing Up with Summarist")
    return true
  }
  catch(error) {
    console.log("Sign Up Unsuccessful", error)
    toast.error(error.code.split('/')[1].split('-').join(' '))
  }
};

const googleSignUp = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name: user.displayName,
      authProvider: "google",
      email: user.email,
    });
    toast.success("Success! Thank You for Siging Up With Summarist!")
    return true
  }
  catch (error) {
    console.log("Unsuccessful Sign Up, Please Try Again", error);
    toast.error(error.code.split('/')[1].split('-').join(' '))
  }
};

const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email)
    toast.success("Password reset email sent")
    return true
  } catch (error) {
    toast.error(error.code.split('/')[1].split('-').join(' '))
  }
}

// Requires the "Run Subscriptions with Stripe" Firebase Extension to be
// installed on this project, configured with matching Stripe price IDs.
const getCheckoutUrl = async (priceId) => {
  const userId = auth.currentUser?.uid;
  if (!userId) throw new Error("User is not authenticated");

  const checkoutSessionRef = collection(db, "customers", userId, "checkout_sessions");

  const docRef = await addDoc(checkoutSessionRef, {
    price: priceId,
    success_url: window.location.origin,
    cancel_url: window.location.origin,
  });

  return new Promise((resolve, reject) => {
    const unsubscribe = onSnapshot(docRef, (snap) => {
      const { error, url } = snap.data();
      if (error) {
        unsubscribe();
        reject(new Error(`An error occurred: ${error.message}`));
      }
      if (url) {
        unsubscribe();
        resolve(url);
      }
    });
  });
};

const getPortalUrl = async () => {
  const user = auth.currentUser;
  if (!user) throw new Error("User is not authenticated");

  const functions = getFunctions();
  const functionRef = httpsCallable(functions, "ext-firestore-stripe-payments-createPortalLink");
  const { data } = await functionRef({
    customerId: user.uid,
    returnUrl: window.location.origin,
  });

  if (!data?.url) throw new Error("No portal url returned");
  return data.url;
};

const getPremiumStatus = async () => {
  const userId = auth.currentUser?.uid;
  if (!userId) return false;

  const subscriptionsRef = collection(db, "customers", userId, "subscriptions");
  const q = query(subscriptionsRef, where("status", "in", ["trialing", "active"]));

  return new Promise((resolve, reject) => {
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        unsubscribe();
        resolve(snapshot.docs.length > 0);
      },
      reject
    );
  });
};

const logout = () => {
  signOut(auth);
};

export { db, auth, googleProvider, login, googleSignIn, emailSignUp, logout, loginGuest, googleSignUp, resetPassword, getCheckoutUrl, getPortalUrl, getPremiumStatus };
