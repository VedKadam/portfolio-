import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4aXUKgRdJQnA3FX6aASn4z5tKmqSqefY",
  authDomain: "portfolio-21629.firebaseapp.com",
  databaseURL: "https://portfolio-21629-default-rtdb.firebaseio.com",
  projectId: "portfolio-21629",
  storageBucket: "portfolio-21629.appspot.com",
  messagingSenderId: "398732638074",
  appId: "1:398732638074:web:7efeaebae82b12e33cc8c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);
document.getElementById("subBtn").addEventListener('click', function(e){
    set(ref(db, 'user/' + document.getElementById("name").value),{
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    });
    alert("Your Query has been Received, Talk to you soon !")
})