function SignIn(){
    window.location = "web.html" ;
    user1= document.getElementById("user_play1").value;
    user2= documen.getElementById("user_play2").value;
    localStorage.setItem("user_play1", user1);
    localStorage.setItem("user_play2", user2);
}