

 var firebaseConfig = {
      apiKey: "AIzaSyB6SuOpjUM9wcmcePBb_iKiqqfc0Zb7fyo",
      authDomain: "kiwtter-29bfb.firebaseapp.com",
      projectId: "kiwtter-29bfb",
      storageBucket: "kiwtter-29bfb.appspot.com",
      messagingSenderId: "659424207679",
      appId: "1:659424207679:web:9a1006f3e092555127698a"
    };
    
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

      });});}
getData();
