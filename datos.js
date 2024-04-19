const agregar = document.getElementById("agregarItem");
const quitar = document.getElementById("quitarItem");

let contraseña = "valentin";

function agregarI(){
   let password = prompt("Contraseña");

if(password===contraseña){
    alert("Hola daian, ya te reconoci, redirigiendo a AGREGAR PRODUCTO");
    window.location.href="https://forms.gle/PjeKQ4tPzRLLF6FP7";
}
else{
    alert("contraseña Incorrecta!");
}
}
function quitarI(){
    let password = prompt("Contraseña");
    if(password===contraseña){
        alert("Hola daian, ya te reconoci, redirigiendo a EDITAR PRODUCTO");
        window.location.href="https://forms.gle/PAY1q3u3aei2rwNN7";
    }
    else{
        alert("Contraseña Incorrecta!");
    }
}
agregar.addEventListener('click',agregarI);
quitar.addEventListener('click',quitarI);