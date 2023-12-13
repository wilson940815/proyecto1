let signOp= document.getElementById("signOp");
let signIn= document.getElementById("signIn");
let nameInput= document.getElementById("nameInput");
let title = document.getElementById("title");

signIn.onclick= function(){
    nameInput.style.maxHeight= "0";
    title.innerHTML= "Login";
    signOp.classList.add("disable");
    signIn.classList.remove("disable");
    //location.href = "/pagina.html"
}

signOp.onclick= function(){
    nameInput.style.maxHeight= "60px";
    title.innerHTML= "Registro";
    signOp.classList.remove("disable");
    signIn.classList.add("disable");
    
}

