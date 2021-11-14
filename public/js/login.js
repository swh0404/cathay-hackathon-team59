$(document).ready(function () {
  // Initialize Firebase
  if (firebase.apps.length === 0) {
    firebase.initializeApp({});
  }
  const auth = firebase.auth;
  console.log(auth);
});

$("#submit").click(() => {
  console.log("ho");
  firebase
    .auth()
    .signInWithEmailAndPassword($("#ac").val(), $("#pw").val())
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      //login = true;
      location.replace("../html/profile.html");
      // ...
    })
    .catch((error) => {
      $("#valid").show();
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      // ..
    });
});
