$(document).ready(function () {
  //"Icon awesome-arrow-alt-circle-right.png"
  //"Component 1 – 1.png",
  var list_item = ["1.png", "2.png", "3.png", "4.png", "5.png"];
  var list_name = ["Personal Info","Booking Record","Notifications","Submission of Documents","Settings" ]

  fruits.forEach((item,index)=>{
    $("#space").append(" <div class='list_item'><div class='row'><div class='col-4'><img src='../src/"+item+"'></div>><div class='col-8'>"+list_name[index]+" </div></div></div>"); // pop up card 

  });
function myFunction(item, index) {
  text += index + ": " + item + "<br>"; 
  // Initialize Firebase
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      console.log(user);
      const db = firebase.firestore();
      var user_record = db.collection("users").doc("test123");
      user_record
        .get()
        .then((doc) => {
          if (doc.exists) {
            console.log("Document data:", doc.data());
            console.log(doc.data()["name"]);
            $("#name").text(doc.data()["name"]);
            $("#id").text(doc.data()["uid"]);
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
      // ...
    } else {
      // User is signed out
      console.log("user no");
      // ...
    }
  });
});
