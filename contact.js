var config = {
  apiKey: "AIzaSyDxoXiZy8-3C9Ose9EoT1juFGNF8THoi0g",
  authDomain: "do-you-know-your-geese.firebaseapp.com",
  databaseURL: "https://do-you-know-your-geese.firebaseio.com",
  storageBucket: "",
  messagingSenderId: "632660019254"
};

firebase.initializeApp(config);

// $('#submit').click.function() {
//   console.log(4);
//     if ($('#name').val() != '' || $('#email').val() != '' || $('#message').val() != '' ){
//       firebase.database().ref('messages' + name).set({
//           name: $('#name').val(),
//           email: $('#email').val(),
//           message: $('message').val()
//         })
//         contactForm.reset();
//     } else {
//       alert('Please fill out the missing field!');
//     }
//   };

function writeUserData() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
    if(name != '' && email != '' && message != ''){
      firebase.database().ref('users/' + name).set({
        name: name,
        email: email,
        message: message
      });
    }
    else {
      alert('Please fill out the missing field!');
    }
  }
