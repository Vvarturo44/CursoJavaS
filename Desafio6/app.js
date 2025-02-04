//Resolucion de los ejercicios del desafio 6

console.log(saludo());
console.log(Bienvenida());
console.log(dobleNumero());
console.log(promedio());
console.log(mayorNumero());
console.log(multiplicar());


//Funcion1
function saludo(){
    console.log(`Crear una función que muestre "¡Hola, mundo!" en la consola.`);
    console.log(`Hola mundo`); 
}

//Funcion2
function Bienvenida(){
    console.log(`Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.`);
    let nombre = prompt("Ingresa tu nombre");
    console.log(`Hola ${nombre}`);
}

//Funcion3
function dobleNumero(){
    console.log(`Crear una función que reciba un número como parámetro y devuelva el doble de ese número.`);
    let numero = prompt(`Ingresa un numero`);
    return numero*2;
}

//Funcion4
function promedio(){
    console.log(`Crear una función que reciba tres números como parámetros y devuelva su promedio`);
    let num1 = prompt(`Ingresa el primer numero`);
    let num2 = prompt(`Ingresa el segundo numero`);
    let num3 = prompt(`Ingresa el tercer numero`);
    return (num1+num2+num3)/3;
}

//Funcion5
function mayorNumero(){
    console.log(`Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.`);
    let num1 = prompt(`Ingresa el primer numero`);
    let num2 = prompt(`Ingresa el segundo numero`);
    return num1 > num2 ? num1 : num2;
}

//Funcion6
function multiplicar(){
    console.log(`Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.`);
    let num = prompt(`Ingresa un numero`);
    return num*num;
}