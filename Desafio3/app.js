//Resolucion de los ejercicios del desafio 3

let contador = 1;
let numero = 0;

//Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
while(contador <=10){
    console.log(contador);
    contador++;
}

//Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
contador = 10;
while(contador>=10){
    console.log(contador);
    contador--;
}

//Crea un programa de cuenta regresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
numero = prompt("Ingresa un numero para el conteo regresivo");
contador = 0;
while(contador<=numero){
    console.log(`conteo regresivo ${numero}`);
    numero--;
}

//Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
numero = prompt("Ingresa un numero para el conteo progresivo");
contador = 0;
while(contador<=numero){
    console.log(`conteo progresivo ${contador}`);
    contador++;
}

