const auth = getAuth();

//$(document).ready(function() {

//});

$("#submit").click(() => {
    console.log("ho");
    createUserWithEmailAndPassword(auth, $('#ac').val(), $('#pw').val())
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