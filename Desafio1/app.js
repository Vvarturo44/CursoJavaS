//Resolucion de los ejercicios del desafio 1

//Declara una variable llamada nombre
let nombre; 

//Muestra una alerta con el mensaje "¡Bienvenida y bienvenido a nuestro sitio web!".
alert("Bienvenid@ a nuestro sitio web");

//Utiliza un prompt para preguntar el nombre del usuario y almacénalo en la variable nombre.
nombre = prompt("Ingresa tu nombre de usuario");

//Crea una variable llamada edad
//Pide al usuario que ingrese su edad usando un prompt y almacénala en la variable edad.
let edad = prompt("Ingresa tu edad");

//Establece una variable numeroDeVentas y asígnale el valor 50.
let numeroDeVentas = 50;
//Establece una variable saldoDisponible y asígnale el valor 1000.
let saldoDisponible = 1000;

//Muestra una alerta con el texto "¡Error! Completa todos los campos".
alert("¡Error! Completa todos los campos");

//Declara una variable llamada mensajeDeError y asígnale el valor "¡Error! Completa todos los campos". Ahora muestra una alerta con el valor de la variable mensajeDeError .
let mensajeDeError = "¡Error! Completa todos los campos";
alert(mensajeDeError);

//Ahora, si la edad es mayor o igual a 18, muestra una alerta con el mensaje "¡Puedes obtener tu licencia de conducir!". De lo contrario, muestra una alerta con el mensaje "Lo sentimos, debes ser mayor de 18 años.".
if (edad >= 18) {
  alert(`Felicidades ${nombre}, puedes obtener tu licencia de conducir`);
} else {
  alert("Lo sentimos, debes ser mayor de 18 años.");
}