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

