// Devuelve el primer elemento de un  array (pasado por parametro)
// Tu código:
const devolverPrimerElemento = (array) => {
  if (!(array instanceof Array)) return console.error(`Value must be an array`);
  if (array.length === 0) return console.warn(`Array is empty`);

  return array[0];
};

// Devuelve el último elemento de un array
// Tu código:
const devolverUltimoElemento = (array) => {
  if (!(array instanceof Array)) return console.error(`Value must be an array`);
  if (array.length === 0) return console.warn(`Array is empty`);

  return array[array.length - 1];
};

// Devuelve el largo de un array
// Tu código:
const obtenerLargoDelArray = (array) => {
  if (!(array instanceof Array)) return console.error(`Value must be an array`);
  if (array.length === 0) return console.warn(`Array is empty`);

  return array.length;
};

// "array" debe ser una matriz de enteros (int/integers)
// Aumenta cada entero por 1
// y devuelve el array
// Tu código:

//Solucion con bucle for:
const incrementarPorUno = (array) => {
  if (!(array instanceof Array)) return console.error(`Value must be an array`);
  if (array.length === 0) return console.warn(`Array is empty`);

  for (let i = 0; i < array.length; i++) {
    array[i]++;
  }
  return array;
};

//Solucion con map():
const incrementarPorUnoConMap = (array) => {
  if (!(array instanceof Array)) return console.error(`Value must be an array`);
  if (array.length === 0) return console.warn(`Array is empty`);

  return array.map((e) => e + 1);
};

// Añade el "elemento" al final del array
// y devuelve el array
// Tu código:
const agregarItemAlFinalDelArray = (array, elemento) => {
  if (!array || !elemento) return console.warn(`You're missing a value`);
  if (!(array instanceof Array)) return console.error(`Value must be an array`);
  if (array.length === 0) return console.warn(`Array is empty`);

  array.push(elemento);
  return array;
  //return array.push(elemento) devuelve el elemento que se agrego, no el array.
};

// Añade el "elemento" al comienzo del array
// y devuelve el array
// Pista: usa el método `.unshift`
// Tu código:
const agregarItemAlComienzoDelArray = (array, elemento) => {
  if (!array || !elemento) return console.warn(`You're missing a value`);
  if (!(array instanceof Array)) return console.error(`Value must be an array`);
  if (array.length === 0) return console.warn(`Array is empty`);

  array.unshift(elemento);
  return array;
  //return array.unshift(elemento) devuelve el elemento que se agrego, no el array.
};

// "palabras" es un array de strings/cadenas
// Devuelve un string donde todas las palabras estén concatenadas
// con espacios entre cada palabra
// Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
// Tu código:
const dePalabrasAFrase = (palabras) => {
  if (!(palabras instanceof Array))
    return console.error(`Value must be an array`);
  if (palabras.length === 0) return console.warn(`Array is empty`);

  return palabras.join(" ");
};

// Comprueba si el elemento existe dentro de "array"
// Devuelve "true" si está, o "false" si no está
// Tu código:

//Solucion con includes():
const arrayContiene = (array, elemento) => {
  if (!array || !elemento) return console.warn(`You're missing a value`);
  if (!(array instanceof Array)) return console.error(`Value must be an array`);
  if (array.length === 0) return console.warn(`Array is empty`);

  return array.includes(elemento);
};

//------------------------------------------------------------------------------------------------------------
// "numeros" debe ser un arreglo de enteros (int/integers)
// Suma todos los enteros y devuelve el valor
// Tu código:

//Solucion con bucle for:
const agregarNumeros = (numeros) => {
  if (!(numeros instanceof Array))
    return console.error(`Value must be an array`);
  if (numeros.length === 0) return console.warn(`Array is empty`);
  let mySum = 0;
  for (let i = 0; i < numeros.length; i++) {
    mySum += numeros[i];
  }
  return mySum;
};

//Solucio con metodo reduce():
const agregarNumeros2 = (numeros) => {
  if (!(numeros instanceof Array))
    return console.error(`Value must be an array`);
  if (numeros.length === 0) return console.warn(`Array is empty`);
  return numeros.reduce((p, e) => p + e);
};

//---------------------------------------------------------------------------------------------------------------

// "resultadosTest" debe ser una matriz de enteros (int/integers)
// Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
// Tu código:
//Solucion con bucle for:
const promedioResultadosTest = (resultadosTest) => {
  if (!(resultadosTest instanceof Array))
    return console.error(`Value must be an array`);
  if (resultadosTest.length === 0) return console.warn(`Array is empty`);

  let mySum = 0;
  for (let i = 0; i < resultadosTest.length; i++) {
    mySum += resultadosTest[i];
  }
  return mySum / resultadosTest.length;
};

//Solucion con metodo reduce():
const promedioResultadosTest2 = (resultadosTest) => {
  if (!(resultadosTest instanceof Array))
    return console.error(`Value must be an array`);
  if (resultadosTest.length === 0) return console.warn(`Array is empty`);

  return resultadosTest.reduce((p, e) => p + e) / resultadosTest.length;
};

//---------------------------------------------------------------------------------------------------------------

// "numeros" debe ser una matriz de enteros (int/integers)
// Devuelve el número más grande
// Tu código:
//Solucion con metodo Math.max()
const numeroMasGrande = (numeros) => {
  if (!(numeros instanceof Array))
    return console.error(`Value must be an array`);
  if (numeros.length === 0) return console.warn(`Array is empty`);
  if (numeros.some((e) => typeof e !== "number"))
    return console.error(`Los valores debe ser numeros enteros`);

  return Math.max(...numeros);
};

//Solucion con bucle for:
const numeroMasGrande2 = (numeros) => {
  if (!(numeros instanceof Array))
    return console.error(`Value must be an array`);
  if (numeros.length === 0) return console.warn(`Array is empty`);
  if (numeros.some((e) => typeof e !== "number"))
    return console.error(`Los valores debe ser numeros enteros`);

  let highestNumber = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > highestNumber) {
      highestNumber = numeros[i];
    }
  }
  return highestNumber;
};

//---------------------------------------------------------------------------------------------------------------

/*function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
}*/

//---------------------------------------------------------------------------------------------------------------

//Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
//Escribe tu código aquí
//Solucio con bucle for:
const cuentoElementos = (arreglo) => {
  if (!(arreglo instanceof Array))
    return console.error(`Value must be an array`);
  if (arreglo.length === 0) return console.warn(`Array is empty`);
  if (arreglo.some((e) => typeof e !== "number"))
    return console.error(`Los valores debe ser numeros enteros`);

  let greaterThan18 = [];
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] > 18) greaterThan18.push(arreglo[i]);
  }
  return greaterThan18.length;
};

//Solucion con filter():
const cuentoElementos2 = (arreglo) => {
  if (!(arreglo instanceof Array))
    return console.error(`Value must be an array`);
  if (arreglo.length === 0) return console.warn(`Array is empty`);
  if (arreglo.some((e) => typeof e !== "number"))
    return console.error(`Los valores debe ser numeros enteros`);

  const greaterThan18 = arreglo.filter((e) => e > 18);
  return greaterThan18.length;
};

//---------------------------------------------------------------------------------------------------------------

//Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
//Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
//si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario.
//Escribe tu código aquí
const diaDeLaSemana = (numeroDeDia) => {
  //[1:Domingo,2:Lunes,3:Martes,4:Miercoles,5:Jueves,6:Viernes,7:Sabado]
  if (!numeroDeDia) return console.warn("No igresaste un valor");
  if (typeof numeroDeDia !== "number")
    console.error("El valor debe ser un numero del 1 al 7");

  if (numeroDeDia < 7 && numeroDeDia > 1) return "Es dia laboral";
  else if (numeroDeDia === 1 || numeroDeDia === 7) return "Es fin de semana";
  else return "El valor debe ser entre 1 y 7";
};

//---------------------------------------------------------------------------------------------------------------

//Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero
//inicia con 9 y false en otro caso.
//Escribe tu código aquí
const empiezaConNueve = (n) => {
  if (!n) return console.warn("No igresaste un valor");
  if (typeof n !== "number") console.error("El valor debe ser un numero");

  let startsWith9 = n.toString();
  return startsWith9.startsWith("9");
};

//---------------------------------------------------------------------------------------------------------------

//Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
//retornar true, caso contrario retornar false.
//Escribe tu código aquí
const todosIguales = (arreglo) => {
  if (!arreglo) return console.warn(`No ingresaste ningun valor`);
  if (!(arreglo instanceof Array))
    return console.error(`El valor no es un arreglo`);
  if (arreglo.length === 0) return console.warn(`El arreglo esta vacio`);
  for (let i = 0; i < arreglo.length; i++) {
    for (let j = i + 1; j < arreglo.length; j++) {
      if (arreglo[i] !== arreglo[j]) return false;
    }
  }
  return true;
};

//Solucion alterativa (mas optima /un solo bucle):
const todosIguales2 = (arreglo) => {
  if (!arreglo) return console.warn(`No ingresaste ningun valor`);
  if (!(arreglo instanceof Array))
    return console.error(`El valor no es un arreglo`);
  if (arreglo.length === 0) return console.warn(`El arreglo esta vacio`);
  for (let i = 0; i < arreglo.length - 1; i++) {
    if (arreglo[i] !== arreglo[i + 1]) return false;
  }
  return true;
};

//---------------------------------------------------------------------------------------------------------------

//Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de
// "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
//Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
// Tu código:
const mesesDelAño = (array) => {
  if (!array) return console.warn(`No ingresaste ningun valor`);
  if (!(array instanceof Array))
    return console.error(`El valor no es un arreglo`);
  if (array.length === 0) return console.warn(`El arreglo esta vacio`);

  const selectedMonths = [];
  for (let i = 0; i < array.length; i++) {
    if (
      array[i] === "Enero" ||
      array[i] === "Marzo" ||
      array[i] === "Noviembre"
    ) {
      selectedMonths.push(array[i]);
    }
  }
  if (
    selectedMonths.includes("Enero") &&
    selectedMonths.includes("Marzo") &&
    selectedMonths.includes("Noviembre")
  ) {
    return selectedMonths;
  } else return "No se encotraron los meses perdidos";
};
let mes = [
  "Diciembre",
  "Febrero",
  "Noviembre",
  "Abril",
  "Junio",
  "Marzo",
  "Julio",
  "Agosto",
  "Enero",
  "Mayo",
];

//---------------------------------------------------------------------------------------------------------------

//La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
//valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
// Tu código:
//Solucio con bucle for:
const mayorACien = (array) => {
  if (!array) return console.warn(`No ingresaste ningun valor`);
  if (!(array instanceof Array))
    return console.error(`El valor no es un arreglo`);
  if (array.length === 0) return console.warn(`El arreglo esta vacio`);

  let greaterThan200 = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > 100) greaterThan200.push(array[i]);
  }

  return greaterThan200;
};

//Solucion con metodo filter():
const mayorACien2 = (array) => {
  if (!array) return console.warn(`No ingresaste ningun valor`);
  if (!(array instanceof Array))
    return console.error(`El valor no es un arreglo`);
  if (array.length === 0) return console.warn(`El arreglo esta vacio`);

  const greaterThan200 = array.filter((e) => e > 100);
  return greaterThan200;
};

//---------------------------------------------------------------------------------------------------------------

//Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
//Guardar cada nuevo valor en un array.
//Devolver el array
//Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y
//devolver: "Se interrumpió la ejecución"
//Pista: usá el statement 'break'
// Tu código:
const breakStatement = (numero) => {
  if (!numero) return console.log(`No ingresaste ningun valor`);
  if (typeof numero !== "number")
    return console.error(`El valor debe ser un numero`);
  const myArray = [];
  for (let i = 0; i < 10; i++) {
    numero += 2;
    if (numero === i) {
      break;
    } else {
      myArray.push(numero);
    }
  }
  return myArray.length === 10 ? myArray : `Se interrumpio la ejecucion`;
};

//---------------------------------------------------------------------------------------------------------------

//Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
//Guardar cada nuevo valor en un array.
//Devolver el array
//Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
//Pista: usá el statement 'continue'
// Tu código:
const continueStatement = (numero) => {
  if (!numero) return console.log(`No ingresaste ningun valor`);
  if (typeof numero !== "number")
    return console.error(`El valor debe ser un numero`);

  const myArray = [];
  for (let i = 0; i < 10; i++) {
    if (i === 5) {
      continue;
    } else {
      numero += 2;
      myArray.push(numero);
    }
  }
  return myArray;
};
