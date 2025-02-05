console.log(`Crea una lista vacía llamada "listaGenerica".`);
let listaGenerica = [];
console.log(listaGenerica);

console.log(`Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.`);
let lenguajesDeProgramacion = [`JavaScript`, `C`, `C++`, `Kotlin`, `Python`];
console.log(lenguajesDeProgramacion);

console.log(`Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.`);
lenguajesDeProgramacion.push(`Java` , `Ruby`, `GoLang`);
console.log(lenguajesDeProgramacion);

console.log(`Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.`);
function mostrarLista(lenguagesDeProgramacion){
    for (let i = 0; i < lenguagesDeProgramacion.length; i++){
        console.log(lenguagesDeProgramacion[i]);
    }
}
console.log(mostrarLista(lenguajesDeProgramacion));

console.log(`Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.`);
function mostrarListaInversa(lenguagesDeProgramacion){
    for (let i = lenguajesDeProgramacion.length - 1; i >=0; i--){
        console.log(lenguagesDeProgramacion[i]);
    }
}
console.log(mostrarListaInversa(lenguajesDeProgramacion));

console.log(`Crea una función que calcule el promedio de los elementos en una lista de números.
`);
function promedio(lista){
    let suma = 0;
    for (let i = 0; i < lista.length; i++){
        suma += lista[i];
    }
    let promedio = suma / lista.length;
    return promedio;
}

console.log(`Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.`);
function maxMin(lista){
    let max = [];
    let min = [];
    for (let i = 0; i < lista.length; i++){
        if (lista[i] > max){
            max = lista[i];
        }
        if (lista[i] < min){
            min = lista[i];
        }
    }
    console.log(`El numero mas grande es: ${max}`);
    console.log(`El numero mas pequeño es: ${min}`);
}

console.log(`Crea una función que devuelva la suma de todos los elementos en una lista.`);
function suma(lista){
    let suma = 0;
    for (let i = 0; i < lista.length; i++){
        suma += lista[i];
    }
    return suma;
}

console.log(`Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.`);
function buscarElemento(lista, elemento){
    for (let i = 0; i < lista.length; i++){
        if (lista[i] === elemento){
            return i;
        }
    }
    return -1;
}

console.log(`Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.`);
function sumaListas(lista1, lista2){
    let suma = [];

    for (let i = 0; i < lista1.length; i++){
        suma.push(lista1[i] + lista2[i]);
    }
    return suma;
}

console.log(`Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.`);
function cuadrado(lista){
    let cuadrado = [];
    for (let i = 0; i < lista.length; i++){
        cuadrado.push(lista[i]*lista[i]);
    }
    return cuadrado;
}