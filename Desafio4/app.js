////Resolucion de los ejercicios del desafio 4

//Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.
console.log("Bienvenid@ a nuestro sitio web");

//Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.
let nombre = "Arturo";
console.log(`¡Hola, ${nombre}!`);

//Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".
alert(`Hola ${nombre}`);   

//Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.
let LenguajeProgramacion = prompt("¿Cuál es el lenguaje de programación que más te gusta?");
console.log(`Lenguaje favorito: ${LenguajeProgramacion}`);

//Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.
let valor1 = Math.floor(Math.random()*100) +1;
let valor2 = Math.floor(Math.random()*100) +1;
let resultado = valor1 + valor2;
console.log(`Valor 1 = ${valor1}, Valor 2 = ${valor2}`);
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}`);

//Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.
valor1 = Math.floor(Math.random()*100) +1;
valor2 = Math.floor(Math.random()*100) +1;
resultado = valor1 - valor2;
console.log(`Valor 1 = ${valor1}, Valor 2 = ${valor2}`);
console.log(`La resta de ${valor1} y ${valor2} es igual a ${resultado}`);

//Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.
let edad = prompt("Ingresa tu edad");
alert(edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad");

//Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.
let numero = prompt("Ingresa un numero");
if (numero > 0) {
  alert("El numero es positivo");
} else if (numero < 0) {
  alert("El numero es negativo");
} else {
    alert("El numero es cero");
}

//Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.
let contador = 1;
while(contador<=10){
    console.log(`el contador va en: ${contador}`);
    contador++;
}

//Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.
let nota = Math.floor(Math.random()*10)+1;
console.log(`La nota es: ${nota}`);
console.log(nota >= 7 ? "Aprobado" : "Reprobado");

//Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.
console.log(`Generacion de un numero aleatorio ${Math.random()}`);

//Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.
console.log(`Generacion de un numero aleatorio ${Math.floor(Math.random() * 10)+1}`);

//Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.
console.log(`Generacion de un numero aleatorio ${Math.floor(Math.random() * 1000)+1}`);