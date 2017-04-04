var firebase = require('firebase');

var config = {
    apiKey: "AIzaSyB9jSHM0DXvi-dX0hJ0P675ndDbzqp8ZP0",
    authDomain: "thoughtdot-e75ba.firebaseapp.com",
    databaseURL: "https://thoughtdot-e75ba.firebaseio.com",
    storageBucket: "thoughtdot-e75ba.appspot.com",
    messagingSenderId: "396643647275"
};
firebase.initializeApp(config);

module.exports = {
    firebase: function() {
      return firebase;
    },
    pushData: firebase.database(),
    currentUser: function() {
      return firebase.auth().currentUser;
    },
    loginUser: function(email, password){
       firebase.auth()
       		.signInWithEmailAndPassword(email, password)
       		.then(function(res) {
              console.log(res.email)
       		 })
       		.catch(function(error) {
					  var errorCode = error.code;
					  var errorMessage = error.message;

					});
    },
    signupUser: function(email, password){
      firebase.auth()
      	.createUserWithEmailAndPassword(email, password)
        .then(function(res) {
          console.log(res.email)
        })
      	.catch(function(error) {
			  // Handle Errors here.
			  var errorCode = error.code;
			  var errorMessage = error.message;

			  // ...
			});
    },
    logoutUser: function(){
       firebase.auth().signOut()
        .then(function() {
			  // Sign-out successful.
        console.log('logout successfully')
			}, function(error) {
			  // An error happened.
        console.log(error)
			});
    }
};
