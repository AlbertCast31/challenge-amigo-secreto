// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//1 Generamos una lista para almacenar los nombres ingresados
let listaAmigos=[];

//2 Creamos una función para agregar los nombres  a la lista por medio del DOM
function agregarAmigo(){
    let input=document.getElementById("amigo");
    let nombre= input.value.trim(); // elimina los espacios en blanco al inicio y al final 

    if (nombre=== ""){
        alert("Por favor, ingresa un nombre valido.");
        return;
    }
    listaAmigos.push(nombre); //agregamos los nombres a la lista con push
    input.value=""; //Limpia el campo de entrada
    mostrarLista(); // actualizar la lista en la pantalla
}

//3 Creamos una función para mostrar la lista de amigos

function mostrarLista(){
    let ul=document.getElementById("listaAmigos");
    ul.innerHTML=""; // limpia la lista antes de actualizarla

    for (let i=0; i<listaAmigos.length;i++){
        let li=document.createElement("li"); // crea un elemento li
        li.textContent=listaAmigos[i]; // Esta proiedad asigna el nombre al <li>
        ul.appendChild(li); // agrega el li dendro del ul, appenChild agrega un nodo hijo.

    }
}

// 4 Creamos una función para sortear el amigo secreto

function sortearAmigo(){
    if (listaAmigos.length ===0){
        alert ("Por favor, agrega un nombre antes de sortear.");
        return;
    }

    let indiceAzar= Math.floor(Math.random() * listaAmigos.length);
    let amigoSeleccionado=listaAmigos[indiceAzar];

    let resultado=document.getElementById("resultado");
    resultado.innerHTML= `El amigo secreto es: ${amigoSeleccionado}`;
}