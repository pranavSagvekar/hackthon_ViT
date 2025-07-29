import { auth, provider } from "../firebase/firebase-config.js";
import { signInWithEmailAndPassword, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      window.location.href = "../Home/index.html";
    })
    .catch((error) => {
      const errorDisplay = document.getElementById("error");
      if (errorDisplay) errorDisplay.innerText = error.message;
    });
});

document.getElementById("googleLogin").addEventListener("click", () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      window.location.href = "../Home/index.html";
    })
    .catch((error) => {
      const errorDisplay = document.getElementById("error");
      if (errorDisplay) errorDisplay.innerText = error.message;
    });
});
