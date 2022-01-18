var firebaseConfig = {
    apiKey: "AIzaSyCnZTtMO5NlMN2Se50_SXj2ZtmE9OLJ804",
    authDomain: "tanisha-database.firebaseapp.com",
    databaseURL: "https://tanisha-database-default-rtdb.firebaseio.com",
    projectId: "tanisha-database",
    storageBucket: "tanisha-database.appspot.com",
    messagingSenderId: "837073801077",
    appId: "1:837073801077:web:ab5a07577858437767cd3c"
  };
  
  // Initialize Firebase
 firebaseConfig.initializeApp(firebaseConfig);

 var user_name=localStorage.getItem("usernamekey");
 var room_name=localStorage.getItem("roomnamekey");

 function send(){
    var message=document.getElementById("msg").value;
    firebase.database().ref(roomName).push({
          namekey:userName,
          messagekey:message,
          likekey:0
    });
    document.getElementById("msg").value="";
}