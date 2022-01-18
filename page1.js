function log_in(){
    var Vusername=document.getElementById("userName").value;
localStorage.setItem("usernamekey",Vusername);
window.location="page2.html";
}
