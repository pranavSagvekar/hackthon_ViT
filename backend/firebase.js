// firebase.js
import admin from "firebase-admin";

// You should use environment variables or a service account JSON file here.
// For demo, we're using application default credentials.
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

export default admin;
