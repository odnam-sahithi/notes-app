
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyA8-lY-775GMdTUPqxf_sFqvZuLqNqZyzU",
    authDomain: "my-notesapp-f7730.firebaseapp.com",
    projectId: "my-notesapp-f7730",
    storageBucket: "my-notesapp-f7730.appspot.com",
    messagingSenderId: "365473961630",
    appId: "1:365473961630:web:dec15298515e589c34cd8f",
    measurementId: "G-7CMHYVLT62"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
const auth = firebase.auth();
 
function signup(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    promise.catch(e => alert(e.message));
    alert("signed up")//signup function
     
}

function signin(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e => alert(e.message));

    promise.then( user =>{
        alert("signed in");


        window.location.href="index2.html"
    })}

        

        function signout(){
            auth.signout().then(()=>
           { alert("signed out");
           window.location.href="index1.html";})
         }

    


/*auth.onAuthStateChanged(function(user){
    if(user){
        var email = user.email;
        alert("user" + email);
        //is signed in


    }else{
        //no user is signed in
    }
});*/