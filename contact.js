var config = {
  apiKey: "AIzaSyDxoXiZy8-3C9Ose9EoT1juFGNF8THoi0g",
  authDomain: "do-you-know-your-geese.firebaseapp.com",
  databaseURL: "https://do-you-know-your-geese.firebaseio.com",
  storageBucket: "",
  messagingSenderId: "632660019254"
};
firebase.initializeApp(config);

function writeUserData() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
    console.log(name, email, message);
    debugger;
  firebase.database().ref('users/' + name).set({
    name: name,
    email: email,
    message: message
  });
  debugger;
}
