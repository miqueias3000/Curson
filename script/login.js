import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";

import { getAuth, signInWithEmailAndPassword, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";


  const firebaseConfig = {
    apiKey: "AIzaSyA3SRLqVTMt_NGMICKFSclWOk46KjHfouc",
    authDomain: "auth-72181.firebaseapp.com",
    databaseURL: "https://auth-72181-default-rtdb.firebaseio.com",
    projectId: "auth-72181",
    storageBucket: "auth-72181.appspot.com",
    messagingSenderId: "794350708827",
    appId: "1:794350708827:web:579dbaef4f9b478e32377e"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  onAuthStateChanged(auth, (user) => {
    if (user) {

      const uid = user.uid;
      // ...
    }
  });

//função logar usuario cadastrado
document.getElementById('btn-login').addEventListener('click', function(){
 
  const email1 = document.getElementById("email").value;
  const senha1 = document.getElementById("senha").value;
  const res = document.getElementById('res')

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      window.location.href = "../html/homePage.html"
    }
  });

  signInWithEmailAndPassword(auth, email1, senha1)
  .then((userCredential) => {
    const user = userCredential.user;
    
  //carregamento da pagina
  window.location.href = "../html/homePage.html";

  })
  .catch((error) => {
  //mostra msg user ou pass invalido    
    res.innerHTML = 'Usuario ou senha invalidos!'

  // Recarrega a página    
    setTimeout(function() {
      window.location.reload();
    }, 1500);
  });
})







