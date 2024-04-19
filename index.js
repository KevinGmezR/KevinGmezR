const GO_ADMIN = document.getElementById("aAdmin");
let contraseña = "valentin";

function irAdmin(){
let password=prompt("Contraseña");

if(password===contraseña){
    window.location.href="./admin.html";
}
else{
    alert("Contraseña Incorrecta");
}

}
GO_ADMIN.addEventListener('click',irAdmin)