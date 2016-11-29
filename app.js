console.log("welcome");
 $(".button-collapse").sideNav();

  $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });

    // Initialize Firebase
   var config = {
     apiKey: "AIzaSyCHGkBU1ntb0w5rO29MeXw-OeP-CE0gM9o",
     authDomain: "geolocation-4449e.firebaseapp.com",
     databaseURL: "https://geolocation-4449e.firebaseio.com",
     storageBucket: "geolocation-4449e.appspot.com",
     messagingSenderId: "885855350230"
   };
   firebase.initializeApp(config);

function get_auth(){
   firebase.initializeApp(config);
  var auth_var=firebase.auth();
  auth_var.createUserWithEmailAndPassword("haitovignesh.sr@gmail.com", "haitome").then(function(){
    alert("done successfully");
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    console.log("error signing in");
    console.log(error.message);
    console.error();
  });

}
//Authentication
$('#Sign').click(function () {
get_auth();
});




//database
 var database = firebase.database();
 var starCountRef = firebase.database().ref('Geolocation');
starCountRef.on('value', function(snapshot) {
  console.log(snapshot.val());
  //Get Current position
  function getLocation() {
    console.log("inside getlocation");
      if (navigator.geolocation) {
          console.log("inside ");
console.log(navigator.geolocation.getCurrentPosition(function (position){
  console.log(position);
}));
          navigator.geolocation.getCurrentPosition(showPosition);
console.log("inside and out ");



      } else {
        console.log("not supported")
          alert("Geolocation is not supported by this browser. Search the place you want to goo....");
      }
  }

function showPosition(position){
console.log("done");
  initMap(position.coords.latitude,position.coords.longitude);
}

getLocation();
});
