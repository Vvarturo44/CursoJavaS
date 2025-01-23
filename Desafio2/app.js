//Resolucion de los ejercicios del desafio 2

//Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
let dia = prompt("Ingresa un dia de la semana comenzando la primera Letra con mayuscula");
if(dia == "Sabado" || dia == "Domingo"){
    alert(`Buen fin de semana`);
} else if(dia == "Lunes" || dia == "Martes" || dia == "Miercoles" || dia == "Jueves" || dia == "Viernes"){
    alert(`Buena semana`);
} else {
    alert(`Formato invalido, sigue las instrucciones`);
}

//Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
let numero = prompt("Ingresa un numero");
if(numero>0){
    alert(`El numero es positivo`);
} else if("numero"<0){
    alert(`El numero es negativo`);
} else {
    alert(`El numero es 0`);
}

//Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.".
let puntuacion = prompt("Ingresa tu puntuacion");
if(puntuacion>=100){
    alert(`Felicidades, has ganado`);
} else {
    alert(`Lo siento, intentalo nuevamente para ganar`);
}

//Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.
let saldo = prompt("Ingresa tu saldo");
alert(`Tu saldo es de ${saldo}`);

//Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
let nombre = prompt("Ingresa tu nombre");
alert(`Bienvenid@ ${nombre}`);