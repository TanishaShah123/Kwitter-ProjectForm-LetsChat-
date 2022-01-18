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
 var Vusername=localStorage.getItem("usernamekey");
 document.getElementById("usernameH3").innerHTML="Welcome "+Vusername;

 function addroomF(){
     var Vroomname=document.getElementById("roomname").value;
     localStorage.setItem("roomnamekey",Vroomname);
     firebase.database().ref("/").child(Vroomname).update({
         roomnamekey:Vroomname
     });
     window.location="page3.html";
 }


 function getData() {firebase.database().ref("/").on('value',
 function(snapshot) {document.getElementById("output").innerHTML =
 "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
 Room_names = childKey;
 //Start code
 var roomdiv='<div class="room_name" id="'+Room_names+'"onclick="gotoRoom(this.id)">'+roomname+'</div> <hr>';
 document.getElementById("outerdiv").innerHTML+=roomdiv;     
 //End code

 });});}
 getData();
 
 function gotoRoom(roomID){
    localStorage.setItem("roomidKey", roomID);
    window.location="page3.html";
}
function log_out(){
    localStorage.removeItem("usernameKey");
    localStorage.removeItem("roomnameKey");
    window.location="page1.html";
    }