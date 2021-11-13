var firebaseConfig = {
    apiKey: "AIzaSyBU4n4LhVBYV8LkT2m0IOErP09uvWBa7Rs",
    authDomain: "cathay-hackathon-group-59.firebaseapp.com",
    projectId: "cathay-hackathon-group-59",
    storageBucket: "cathay-hackathon-group-59.appspot.com",
    messagingSenderId: "287047563383",
    appId: "1:287047563383:web:65bd4abf766965782cee72",
    measurementId: "G-66V1Y6NBK0",
};

$(document).ready(function() {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    //const analytics = getAnalytics(app);
    console.log("hjj");

});
const auth = firebase.auth;

$("#submit").click(() => {
    console.log("ho");
    firebase.auth().signInWithEmailAndPassword($('#ac').val(), $('#pw').val())
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

})