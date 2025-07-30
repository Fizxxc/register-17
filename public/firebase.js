// firebase.js (gunakan ES module CDN)
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSKBHxE8YIDFsEW-8TpGSOHuZJ5CliIkg",
  authDomain: "fingerpinauth.firebaseapp.com",
  databaseURL: "https://fingerpinauth-default-rtdb.firebaseio.com",
  projectId: "fingerpinauth",
  storageBucket: "fingerpinauth.firebasestorage.app",
  messagingSenderId: "395896869935",
  appId: "1:395896869935:web:f05223a2c140bd88d662da",
  measurementId: "G-6S5NHHLFW0"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Export agar bisa diakses dari HTML
const dataRef = ref(db, 'pendaftaran17agustus/');
