var ref;
$(document).ready(function () {
  //"Icon awesome-arrow-alt-circle-right.png"
  // Initialize Firebase
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      console.log(user);
      const db = firebase.firestore();
      // var user_record = db.collection("users").doc("test123");
      ref = firebase.storage();
      // 'file' comes from the Blob or File API
    }
  });
});

$("#submit1").click(() => {
  ref.put($("#formFileLg").val()).then((snapshot) => {
    console.log("Uploaded a blob or file!");
  });
});
