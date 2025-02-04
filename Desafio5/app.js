//Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".
document.querySelector("h1").textContent = `Hora del desafio`;

//Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".
function clickConsole(){
    alert(`El boton fue clickeado`);
}

/*Crea una función que se ejecute cuando se haga clic en el botón "prompt"
preguntando el nombre de una ciudad de Brasil. Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: 
"Estuve en {ciudad} y me acordé de ti".
*/
function clickPrompt(){
    let ciudad = prompt(`Ingresa el nombre de una ciudad de Brasil`);
    alert(`Estuve en ${ciudad} y me acorde de ti`);
}

//Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".
function clickAlert(){
    alert(`Yo amo JavaScript`);
}

//Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.
function clickSuma(){
    let num1 = parseInt(prompt(`Ingresa un numero`));
    let num2 = parseInt(prompt(`Ingresa otro numero`));
    alert(`La suma de los numeros ${num1} y ${num2} es: ${num1 + num2}`);
}