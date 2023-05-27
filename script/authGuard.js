import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";

import { getAuth, onAuthStateChanged, signOut  } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";


  const firebaseConfig = {
    apiKey: "AIzaSyA3SRLqVTMt_NGMICKFSclWOk46KjHfouc",
    authDomain: "auth-72181.firebaseapp.com",
    databaseURL: "https://auth-72181-default-rtdb.firebaseio.com",
    projectId: "auth-72181",
    storageBucket: "auth-72181.appspot.com",
    messagingSenderId: "794350708827",
    appId: "1:794350708827:web:579dbaef4f9b478e32377e"
  };
//guarda de auth firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  onAuthStateChanged(auth, (user) => {
    if (!user) {
      window.location.href = "../html/login.html"
    }
  });