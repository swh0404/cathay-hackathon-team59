$(document).ready(function () {
  // Initialize Firebase
  var firebaseConfig = {
    apiKey: "AIzaSyBU4n4LhVBYV8LkT2m0IOErP09uvWBa7Rs",
    authDomain: "cathay-hackathon-group-59.firebaseapp.com",
    projectId: "cathay-hackathon-group-59",
    storageBucket: "cathay-hackathon-group-59.appspot.com",
    messagingSenderId: "287047563383",
    appId: "1:287047563383:web:65bd4abf766965782cee72",
    measurementId: "G-66V1Y6NBK0",
  };

  firebase.initializeApp(firebaseConfig);
  //const analytics = getAnalytics(app);
  const auth = firebase.auth;
  console.log(auth);
});
