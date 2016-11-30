console.log("welcome");
 $(".button-collapse").sideNav();

  $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });
//DOM ELEMENT ID's
var email=document.getElementById('email');
var password=document.getElementById('password');
    // Initialize Firebase
   var config = {
     apiKey: "AIzaSyCHGkBU1ntb0w5rO29MeXw-OeP-CE0gM9o",
     authDomain: "geolocation-4449e.firebaseapp.com",
     databaseURL: "https://geolocation-4449e.firebaseio.com",
     storageBucket: "geolocation-4449e.appspot.com",
     messagingSenderId: "885855350230"
   };

   firebase.initializeApp(config);
fb=firebase.app();

//Authentication
function get_auth(){
  var auth_var=fb.auth();
  auth_var.createUserWithEmailAndPassword(email.value, password.value).then(function(){
    alert("done successfully");
  }).catch(function(error) {

    if(error.message=="The email address is already in use by another account."){
      fb.auth().signInWithEmailAndPassword(email.value, password.value).then(console.log("you are successfully logged in")).catch(function(error) {

  alert(error.message);
  });
    }
    else{
  alert(error.message);
    }

  });

}

function google_auth(){
  alert("inside google_auth");
  var provider=new firebase.auth.GoogleAuthProvider();
  fb.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  alert("done successfully");
  // ...
}).catch(function(error) {
  alert(error);
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
console.error();
  // ...
});
}


function facebook_auth(){
var provider = new firebase.auth.FacebookAuthProvider();
fb.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
  alert("facebook login successfully");
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  console.log(error);
  // ...
});


}


function twitter_auth(){
var provider = new firebase.auth.TwitterAuthProvider();
fb.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
  // You can use these server side with your app's credentials to access the Twitter API.
  var token = result.credential.accessToken;
  var secret = result.credential.secret;
  // The signed-in user info.
  var user = result.user;
  // ...
  alert("twitter login successfully");
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  console.log(error);
  // ...
});

}


//database
 var database = fb.database();
 var starCountRef = fb.database().ref('Geolocation');
starCountRef.on('value', function(snapshot) {
  console.log(snapshot.val());
  //Get Current position
  function getLocation() {
    console.log("inside getlocation");
      if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(showPosition);
      } else {
          alert("Geolocation is not supported by this browser. Search the place you want to goo....");
      }
  }

function showPosition(position){
console.log("done");
  initMap(position.coords.latitude,position.coords.longitude);
}

getLocation();
});
