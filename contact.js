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
