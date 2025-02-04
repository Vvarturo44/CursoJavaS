//Resolucion de los ejercicios del desafio 6

let peso = 0;
let estatura = 0;
let altura = 0;
let imc = 0;
let numero = 0;
let numFactorial = 0;
let dolares = 0;
let real = 0;
let area = 0;
let perimetro = 0;
let radio = 0;
let tabla = 0;

console.log(`Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.`);
console.log(IMC());

console.log(`Crea una función que calcule el valor del factorial de un número pasado como parámetro.`);
console.log(calculaFactorial());

console.log(`Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.`);
console.log(convertirDolar());

console.log(`Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.`);
console.log(areaPerimetro());

console.log(`Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.`);
console.log(areaPerimetroCirculo());

console.log(`Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.`);
console.log(tablaMultiplicar());

function IMC(){
    peso = parseFloat(prompt(`Ingresa tu peso en kg`));
    estatura = parseFloat(prompt(`Ingresa tu altura en metros`));
    imc = peso/(estatura**2);
    return imc;
}

function calculaFactorial(){
    numero = parseInt(prompt(`Ingresa un numero`));
    numFactorial = 1;
    for(let i = 1; i <= numero; i++){
        numFactorial *= i;
    }
    return numFactorial;
}

function convertirDolar(){
    dolar = parseFloat(prompt(`Ingresa la cantidad de dolares`));
    real = dolar*4.80;
    return real;
}

function areaPerimetro(){
    altura = parseFloat(prompt(`Ingresa la altura de la sala`));
    anchura = parseFloat(prompt(`Ingresa la anchura de la sala`));
    area = altura*anchura;
    perimetro = 2*(altura+anchura);
    return `El area de la sala es ${area} y el perimetro es ${perimetro}`;
}

function areaPerimetroCirculo(){
    radio = parseFloat(prompt(`Ingresa el radio de la sala`));
    area = 3.14*(radio**2);
    perimetro = 2*3.14*radio;
    return `El area de la sala es ${area} y el perimetro es ${perimetro}`;
}

function tablaMultiplicar(){
    numero = parseInt(prompt(`Ingresa un numero`));
    tabla = ``;
    for(let i = 1; i <= 10; i++){
        tabla += `${numero} x ${i} = ${numero*i}\n`;
    }
    return tabla;
}