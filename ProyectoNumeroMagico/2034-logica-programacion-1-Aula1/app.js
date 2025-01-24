//Declaracion de Variables
let rangoMaximo = 1;
let numeroSecreto = 1;
let numeroUsuario = 0;
let intentos = 1;
let maximosIntentos = 0;

//let palabraVeces = 'vez'; Variable para cambiar la palabra "vez" a "veces" cuando el jugador se equivoque

//console.log(numeroSecreto);

alert(`Bienvenido al juego del numero secreto`);
rangoMaximo = parseInt(prompt(`Ingresa un numero entre 1 y el numero maximo con el que quieras jugar`));
numeroSecreto = Math.floor(Math.random() * rangoMaximo) + 1; 
//Mientras el numero ingresado por el usuario sea diferente al numero secreto, se seguira ejecutando el ciclo
while(numeroUsuario != numeroSecreto){
    //Pedimos un numero al usuario que ingrese un numero y lo guardamos en la variable "numeroUsuario" convirtiendolo a entero
    console.log(typeof(numeroUsuario)); //Agreamos un console.log para ver el valor de "numeroUsuario" despues de la entrada del usuario
    if(rangoMaximo>=20){
        maximosIntentos = 5;
    } else if(rangoMaximo>=50){
        maximosIntentos = 10;
    } else if(rangoMaximo<20 && rangoMaximo>0){
        maximosIntentos = 3;
    } else {
        alert(`Fin del juego, no seguiste las instrucciones`); 
        break;
    }
    numeroUsuario = parseInt(prompt(`Me indicas un numero entre 1 y ${rangoMaximo} por favor. Cuentas con ${maximosIntentos} intentos`));
    //Realizamos la comparacion
    console.log(`Resultado de la comparacion:`, numeroSecreto == numeroUsuario); //Agregamos un console.log para ver el resultado de la comparacion
    if (numeroSecreto == numeroUsuario){ 
        //Acertamos, la condicion fue verdaderoa
        alert(`Felicidades, el numero secreto era: ${numeroSecreto} lo hiciste en: ${intentos} ${intentos == 1 ? 'vez' : 'veces' }`); 
        /*operador ternario ${intentos == 1 ? 'vez' : 'veces' } es una forma de expresar condiciones en java script el ? funciona como un if y el : como un else
        si esto es verdadero pon vez si no pon veces*/
    } else {
        //La condicion no se cumplio
        if(numeroUsuario>numeroSecreto){
            //Le damos pista al usuario de que el numero es menor
            alert(`Lo siento, el numero secreto es menor`);
        } else {
            //Le damos pista al usuario de que el numero es mayor

            alert(`Lo siento, el numero secreto es mayor`);
        } 
        //intentos = intentos + 1; 
        intentos++; //Incrementamos el contador de intentos en la parte de la condicion falsa
        //palabraVeces = 'veces'; //Cambiamos la palabra a plural
        if(intentos>maximosIntentos){
            alert(`Lo siento, has llegado al numero maximo de ${maximosIntentos} intentos, el numero secreto era: ${numeroSecreto}`);
            break;
        }
        console.log(`Valor del numero secreto:`, numeroSecreto); //Agregamos un console.log para ver el valor de "numeroSecreto" cuando el jugador se equivoca
        //alert(`Lo siento, no adivinaste el numero secreto`);
    } 
}

