let numSecreto = 0;
let intentos = 0;

condicionesInciales();

function asingarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){ 
    let numUsuario = parseInt(document.getElementById(`valorUsuario`).value);
    console.log(`Numero secreto: ${numSecreto}`);
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

function generarNumSecreto() {
    return Math.floor((Math.random()*10)+1);
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
    asingarTextoElemento(`p`,`Indica un numero del 1 al 10`);
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