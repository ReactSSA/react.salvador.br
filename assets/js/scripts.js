var config = {
    apiKey: "AIzaSyDthLRn1-FtkR9duSYmGO5vcxv27Mw6zfY",
    authDomain: "reactssa-d6ce0.firebaseapp.com",
    databaseURL: "https://reactssa-d6ce0.firebaseio.com",
    projectId: "reactssa-d6ce0",
    storageBucket: "reactssa-d6ce0.appspot.com",
    messagingSenderId: "146802970530"
};
firebase.initializeApp(config);

var emailsStore = firebase.database().ref("emails");

document.getElementById("meetup-notification-form").addEventListener("submit", function (e) {
    e.preventDefault();

    var emailInputEl = document.getElementById("email");
    emailsStore.push({
        email: emailInputEl.value
    }).then(function () {
        emailInputEl.value = "Pronto, anotado!";
        emailInputEl.disabled = true;
        emailInputEl.style.color = "#229400";
    }).catch(function () {
        emailInputEl.value = "Erro, nos avise lá no github!";
    });
})