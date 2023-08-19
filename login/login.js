    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-analytics.js";
   // import { getAuth, signInWithCustomToken } from "firebase/auth";
    import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js"
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyDbh4ZMFvKYlfczpepPvZrwglFANloI_ys",
        authDomain: "authentication-app-ed4af.firebaseapp.com",
        databaseURL: "https://authentication-app-ed4af-default-rtdb.firebaseio.com",
        projectId: "authentication-app-ed4af",
        storageBucket: "authentication-app-ed4af.appspot.com",
        messagingSenderId: "114527673560",
        appId: "1:114527673560:web:dc083dba56870b6adfcbad"
      };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);  

    const auth = getAuth();

    var element=document.querySelector("#loginForm");
    element.addEventListener("click",(event)=>{
        event.preventDefault();

      let email=document.querySelector("#email").value;
      let password=document.querySelector("#password").value;

      signInWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
       // Signed in
      const user = userCredential.user;
      console.log(user)
      alert("login successfully")
    window.location.href="../public/index.html"
      
    })
       .catch((error) => {
       const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        alert("login does not occur successfully")
        // ...
      });
      
    })

