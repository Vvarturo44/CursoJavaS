let numSecreto = 0;
let intentos = 0;
let listaNumSorteados = [];
let numMaximo = 10;

numMaximo = prompt(`Ingresa el numero maximo para el juego`);
condicionesInciales();

function asingarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){ 
    let numUsuario = parseInt(document.getElementById(`valorUsuario`).value);
    //console.log(`Numero secreto: ${numSecreto}`);
    if(numUsuario === numSecreto){
        asingarTextoElemento(`p`,`Felicidades, adivinaste el numero secreto en ${intentos} ${intentos === 1 ? `intento` : `intentos`}`);
        document.getElementById(`reiniciar`).removeAttribute(`disabled`);
    }   else{
        //El usuario no acerto
        if(numUsuario > numSecreto){
            asingarTextoElemento(`p`,`El numero secreto es menor`);
        }   else{ 
            asingarTextoElemento(`p`,`El numero secreto es mayor`);
        }
        intentos++;
        limpiarCaja();
    } 
    return;
}

//Recursividad: la funcion se llama a si misma en lo interno
function generarNumSecreto() {
    let numGenerado = Math.floor((Math.random()*numMaximo)+1);
    if(listaNumSorteados.length == numMaximo){
        asingarTextoElemento(`p`,`Se han agotado los numeros posibles. Fin del Juego`);
    } else {
    //Si el numero generado ya esta en la lista, se vuelve a generar
        if (listaNumSorteados.includes(numGenerado)){
            return generarNumSecreto();
        } else {
            listaNumSorteados.push(numGenerado);
            return numGenerado;
        }
    }
}

function limpiarCaja(){
    document.querySelector(`#valorUsuario`). value = ``;
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesInciales();
    document.getElementById(`reiniciar`).setAttribute(`disabled`,true);
    

}

function condicionesInciales(){
    asingarTextoElemento(`h1`,`Juego del numero secreto`);
    asingarTextoElemento(`p`,`Indica un numero del 1 al ${numMaximo}`);
    numSecreto = generarNumSecreto();
    intentos = 1;
}

/*
Notas:
Hoisting son las variables y funciones se declaran antes de ser usadas
Parametros: son los valores que se pasan a la funcion para modificarla    
Argumentos: son los valores que se pasan a la funcion para modificarla
Alcance o ambito: es el lugar donde se puede acceder a una variable o funcion
El === compara que sea el mismo valor y tipo de dato
*/
