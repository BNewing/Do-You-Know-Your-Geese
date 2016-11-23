var config = {
  apiKey: "AIzaSyDxoXiZy8-3C9Ose9EoT1juFGNF8THoi0g",
  authDomain: "do-you-know-your-geese.firebaseapp.com",
  databaseURL: "https://do-you-know-your-geese.firebaseio.com",
  storageBucket: "do-you-know-your-geese.appspot.com",
  messagingSenderId: "632660019254"
};

firebase.initializeApp(config);

var database = firebase.database();

function writeUserData() {
var name = document.getElementById("name").value;
  database.ref('users/' + name).set({
    name: name,
    email: "fjdlaf",
    message: "fjal"
  });
}
