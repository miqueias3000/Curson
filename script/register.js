import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";

import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

  var firebaseConfig = {
    apiKey: "AIzaSyA3SRLqVTMt_NGMICKFSclWOk46KjHfouc",
    authDomain: "auth-72181.firebaseapp.com",
    databaseURL: "https://auth-72181-default-rtdb.firebaseio.com",
    projectId: "auth-72181",
    storageBucket: "auth-72181.appspot.com",
    messagingSenderId: "794350708827",
    appId: "1:794350708827:web:579dbaef4f9b478e32377e"
  };

  var app = initializeApp(firebaseConfig);
  var auth = getAuth(app);


  //função que vai cadastrar usuario ao fireBase auth

  document.getElementById("btn-reg").addEventListener("click", function(){

    var email = document.getElementById('email').value;
    var password = document.getElementById('senha').value;
    var resReg = document.getElementById('resReg');

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        var user = userCredential.user;
  //cadastro feito com sucesso
    setTimeout(function() {
      window.location.href = "../html/resulReg.html";
    }, 1500);

    })
  //resposta usuario ja existente
    .catch((error) => {
      resReg.innerHTML = 'Usuario já Existente!'
      setTimeout(function() {
        window.location.reload();
      }, 3000);
  });
})