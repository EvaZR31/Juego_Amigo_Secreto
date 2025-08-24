let listaAmigos = []; 
let NombreAmigo = ""; // nombres que se agregaran
let listaAmigosStr = "";

function asignarTextoElemento (elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
// funcion para agregar amigo
function agregarAmigo() {
    NombreAmigo = document.getElementById("valorAmigo").value 
    
    if (NombreAmigo != "") {
        listaAmigos.push(NombreAmigo);
        listaAmigosStr ="";
        listaAmigos.forEach(amigo=> {    // ees para en cada una de las iteraciones, el item que este en ese momento se llama "amigo"
        listaAmigosStr+="<li>"+amigo+"</li>"

});
asignarTextoElemento("ul",listaAmigosStr)
    } else {
        alert("Ingresa un Nombre, Por Favor");
    }
    limpiarCaja();
    console.log(listaAmigos);
}

function sortearAmigo() {
    if(listaAmigos.length < 2){
        alert("Debe haber al menos dos amigos para sortear.");
        document.getElementById("resultado").textContent = "";
        return;
    }

    let amigoGanador = listaAmigos[Math.floor(Math.random()*listaAmigos.length)];

    document.getElementById("resultado").textContent = "El amigo secreto sorteado es : " + amigoGanador;

asignarTextoElemento("ul","")
}

function limpiarCaja () {
    document.querySelector("#valorAmigo").value = "";
    
}







































