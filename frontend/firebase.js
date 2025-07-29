import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDF1ARhyFjGPh1guBzFg91KKupKWZNAcCo",
  authDomain: "vithackthon.firebaseapp.com",
  projectId: "vithackthon",
  storageBucket: "vithackthon.appspot.com",
  messagingSenderId: "664894221614",
  appId: "1:664894221614:web:5b167e9bb6d32ee8ce9ebf",
  measurementId: "G-E1D7JJ4NSW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
