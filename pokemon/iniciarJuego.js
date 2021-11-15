import {traerPokemon} from "../pokemon/pokeFetch.js";

function cargarJuego(){
    //escondo el contenedor de la primera página
    document.getElementById().classList.add("hidden");
    //muestro el contenedor de la segunda página
    document.getElementById().classList.remove("hidden");

    traerPokemon();

    //función para cargar una ruta de imagen
    let imgPokemon = document.getElementById("imagen-pokemon");  
    imgPokemon.setAttribute('src', sprite);
}

//añadimos al botón de comenzar la función para cargar el juego
let cargar = document.getElementsById("boton-comenzar");
cargar.addEventListener("click",cargarJuego);

console.log(traerPokemon());