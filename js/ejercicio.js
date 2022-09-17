

/*let nombre = prompt("Ingrese su nombre");
let edad = parseInt(prompt ("Ingrese su edad"));
let numero = parseInt(prompt ("Ingrese un numero cualquiera"));

console.log ("Tu nombre es ", nombre,  " y tu edad es de ", edad);
console.log ("La sumatoria de tu edad y el numero al azar es de", numero + edad)

const iva = 1.21; 

console.log ("Tu edad mas IVA del 21% es igual a ", iva * edad)

console.log ( "Probando salto de tabulacion \tOtro texto");
console.log ( "Probando salto de de linea \nOtro texto");

console.log (`Probando formula matematica ${100/2}`);

console.log (typeof 4.5);
console.log (typeof "4.5");
console.log (3<2);
console.log (3>2);

//alert ("tira cualquier alert");

//and//

console.log(true && false);
// → false
console.log(true && true);
// → true

//or// 

console.log(false || true);
// → true
console.log(false || false);
// → false
// == Igual a 
// === precisamente igual a

console.log (5 == 5);
console.log (0===false);
console.log (""===false);
console.log(5!==null);

//orden de preferencia "or" 

console.log(null || "usuario")
// → usuario toma el de la izquierda
console.log("Agnes" || "usuario")
// → Agnes ambos son string, toma el de la izquierda

*/

//ejercicio 1
//Crear tres (3) variables para asignar el nombre, apellido y edad de Homero, respectivamente. Es indistinto el empleo de var o  let en la declaración.

// let name = prompt("escriba su nombre");
// let apellido = prompt("escriba su apellido");
// let edad = prompt ("escriba su edad");





// console.log (" Su nombre es ",nombre, ", su apellido es ",apellido, ", y su edad es edad es de ", edad, ".")

// //ejercicio 2
// // Crear cinco (5) variables constantes, asignando a cada una de ellas diferentes nombres de ciudades. Generalmente, dichas variables se declaran con const.

// const ciudad1 = "Eldorado";
// const ciudad2 = "Montecarlo";
// const ciudad3 = "Pto Rico";
// const ciudad4 = "Pto Iguazu";
// const ciudad5 = "El Alcazar";

// ejercicio 3
//Declarar variables para representar la información de un carnet de conducir.
//Luego, concatenarlas y asignar el resultado de la operación a una variable denominada carnet.

/* alert ("welcome back Martin, you´re so hot and sexy today");

let nombre = "Bart Simpson";
let numLic = "B47U89RE243";
let address = "742 Av Evergreen Terr";
let state = "Springfield";
let country = "USA";
let birthday = "02/11/70";
let sex = "a lot";
let carnet = nombre + numLic + address + state + country + birthday + sex;

console.log(carnet) */


//practica condicionales

/* alert("Debe ser mayor a 18 para acceder a esta web");
let edad= parseInt(prompt("escriba su edad"));

if (edad >= 18){
    alert("Es mayor. Bienvenido a la plataforma!")
}else {
    alert("Sos un nene, nos vemos en disney")
} */


// Ejercidio 5

/* let nombre1 = prompt("Ingrese el nombre de esposa/mujer"), nombre2= prompt("Ingrese el nombre del esposo/marido"), nombre3 = prompt("Ingrese el nombre de su hijo/a"), 
nombre4 = prompt("Ingrese el nombre de la mascota"), nombre5 = prompt("Ingrese el nombre de algun abuelo/a");

alert("El nombre de la esposa es " + nombre1 + ", del marido es " + nombre2 + ", del hijo/a es " + nombre3 + ", de la mascota es " + nombre4 + ", del abuelo/a es " + nombre5); */

//Ejercicio 5 
//Solicitar al usuario uno o más precios.
//Luego, efectuar un descuento en porcentajes (20%, 30%, etcétera) sobre los valores ingresados, y realizar una salida.

/* let price1 = prompt("Ingrese precio de la mercaderia para un descuento."), price2 = prompt("Ingrese precio de la mercaderia 2 para otro descuento.");
let discount1 = parseFloat(price1*0.2), discount2 = parseFloat(price2*0.3);

let priceFinal1 = price1-discount1, priceFinal2 = price2-discount2;

alert (`El precio del producto 1 con descuento de ${discount1}$ es de ${priceFinal1} y el precio del producto 2 con descuento de ${discount2}$ es de ${priceFinal2}`);
 */
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Ejercicio 1
/* let nombre = prompt ("Ingrese un nombre");
let resultado = "Bart"

if (nombre != resultado){
    alert ("Fui yo")
}else {
    alert ("Yo no fui")
} */

/* ejercicio2 Solicitar al usuario una (1) tecla.
Si se presiona “y” (minúscula), o “Y” (mayúscula), realizar una salida por alerta con el mensaje “Correcto”. Caso contrario, la salida será “Error”. */

/* let response = prompt ("Presione solo una tecla")

/* if (response == "y" || response =="Y"){
    alert ("Correcto")
}else {
    alert ("Incorrecto")
} */

/* Ejercicio 3
Solicitar al usuario un (1) un número.
Si el valor está entre 1 y 4, efectuar una de las siguientes salidas según corresponda: 
“Elegiste a Homero” si es 1.
“Elegiste a Marge” si es 2.
“Elegiste a Bart” si es 3.
“Elegiste a Lisa” si es 4. */
/*

let number = parseInt(prompt("Escriba un numero del 1 al 4"));

if (0 < number && 4 >= number) {
if (number == 1){
    alert("Elegiste a Homero")
}else if (number == 2) {
    alert ("Elegiste a Marge")
}else if (number == 3) {
    alert ("Elegiste a Bart")
}else if (number == 4) {
    alert ("Elegiste a Lisa")}
}else {
    alert ("Error en el ingreso del numero")
} */

/* for(let i = 0; i <= 10; i++){
    console.log("Hola Mundo", i)
}

for(let i = 10; i >= 0; i-- ){
    console.log("Hola Mundo", i)
}

for(let i = 0; i  <= 10; i= i + 2){
    console.log(i);
}

//modulo

for(let i = 0; i <= 10; i++){
    if(i % 2 ==0){
        console.log (i, "Es par")
    } // para impares cambiar en el if !==0 (es diferente de)
} */

//sentencia break

/* let passwordUsuario = prompt("Ingrese su contrasena :");
const passwordAutorizado = 1234

for (let i = 0; i < 2; i++) {
    if (passwordUsuario == passwordAutorizado) {
        alert("Buena amigo! Correcta!")
        break;
    }else {
        passwordUsuario = prompt("Contrasena incorrecta, volve a intentar chanta")
    }
} */

//sentencia continue

/* for(let i = 0; i <= 6; i++){
    if (i % 2 == 0) {
        continue;
    }
    console.log(i);
} */

// ciclos while

// ejercicio 4

/* let valor = parseInt(prompt("Ingrese un valor"))

if (valor <= 1000) {
    alert ("Presupuesto bajo")
}else if(valor >1000 && valor <= 3000) {
    alert("Presupuesto medio")
}else if(valor > 3000){
    alert ("Presupuesto alto")
} */

//Ejercicio 5

/* let producto1 = prompt ("Ingrese el nombre de un producto"), producto2 = prompt ("Ingrese el nombre del segundo producto"), producto3 = prompt ("Ingrese el nombre del tercer producto"),
producto4 = prompt ("Ingrese el nombre del cuarto producto"), producto5 = prompt ("Ingrese el nombre del quinto producto");

if (producto1 !="" && producto2 !="" && producto3 !="" && producto4 !="" && producto5 !=""){
    alert (producto1 + " " + producto2 + " " + producto3 + " " + producto4 + " " + producto5+ ".")
}else {
    alert("Error, es necesario cargar todos los productos.")
} */



/* let meters = parseInt(prompt("Ingrese los metros cuadrados, solo el numero, de su terreno hasta 2000m2"));
let value = 5000;


    if (meters >= 0 && meters <= 1000){
    alert ("El precio por m2 de su propiedad es de: "+ value)
    }else if (meters > 1000 && meters <= 1500){
        alert("El precio por m2 de su propiedad es de: "+ (value-500))
    }else if(meters > 1500 && meters <=2000){
        alert("El precio por m2 de su propiedad es de: "+ (value - 1000))
    }
    else {
        alert ("Numero no valido")
    } */

    //Desafio entregable



/* let nombre = prompt("Escriba el nombre del programador")

while (nombre != "martin"){
    nombre = prompt("Escriba otro nombre")
};
alert ("fin del programa"); */


// concatenar texto
//Desafio Coder

/* let texto;
const exit = "exit";
let resultado = "";

while (texto != exit) {
    texto = prompt("Escriba una palabra de la oracion, exit para salir");

     if (texto == exit || texto == null){
        break;
     }
    resultado = resultado + " " + texto;
    alert (resultado);
}; */


/* 3)
ejercicio 1 */

/* let text = prompt("Ingrese una palabra");
let number = parseInt(prompt("Ingrese el numero de repeticiones"));

for (let i = 1; i <= number; i++) {
    alert (text + " " + i );
}
 */

/* ejercicio 2  */
/* 
let number = prompt("Ingrese un numero");

for (let i = 1; i <= number; i++){
    if (i <= 4){
    alert("Lado: " + i)
    }else if (i > 4) {
    break;
    }
    }; */

   /*  let alumnos = '';
for (let index = 0; index < 10; index++) {
    alumnos += prompt("INGRESAR NOMBRE DE ALUMNO")+"\n";
}
alert(alumnos);
 */
/* 
let alumnos = prompt("Ingrese nombre de alumnos");
let ingresados = "";

while (alumnos != "Voldemort") {
    ingresados += alumnos + "\n";
    alumnos = prompt("Ingrese nombre de alumnos");
}
alert(ingresados);
 */

/* let arrayPrueba = [1, "Tincho", true];

console.log(arrayPrueba);

/* for (let i = 0; i < arrayPrueba.length; i++){
    alert(arrayPrueba[i])
} */
/* arrayPrueba.push(4)

arrayPrueba.pop();
console.log(arrayPrueba); */ 



/* let array = [1,2,3,4];
console.log(array);

let arrayVacio = [];

console.log (arrayVacio)

arrayVacio = [5,6,7,8];
console.log(arrayVacio);

arrayCombinado = ["Hola", 99, true, persona = {nombre: "Martin", apellido: "Rivas Anaya", edad: 35}];
console.log(arrayCombinado);

const arrayDeLetras = ["A", "B" , "C", "D"];
console.log (arrayDeLetras);

//mostrar por indice un elemento del array

console.log(arrayDeLetras[2])

//acceder por bucle a cada elemento del array

for(let i = 0; i < arrayDeLetras.length; i++){
alert(arrayDeLetras[i])
} */

