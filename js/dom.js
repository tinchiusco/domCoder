
/* ******************************** INICIO DESAFIO *********************************/

function calc(){
    return m2Frente * m2Fondo
    }
    
    let m2Frente = parseInt(prompt("Ingrese cantidad de metros de FRENTE de su propiedad"));
    let m2Fondo = parseInt(prompt("Ingrese cantidad de metros de FONDO de su propiedad"));
    let calculo = calc()
    
    
    let resultado = document.getElementById("resultado");
    resultado.innerText = `El total de m2 de su terreno es de ${calculo} metros cuadrados`;
    console.log(calculo);


/* ****************************** Fin desafio ************************************ */
// Obtengo el contenido del h1
let escribirH1 = document.getElementsByTagName("h1");
console.log(escribirH1[0].innerHTML);

//Escribo con innertext un texto en h2 y lo reemplazo por un p con texto cambiado, cambia el texto, pero no cambia la configuracion nativa del h2. 

let escribirH2 = document.getElementById("escribirH2");
let tituloH2 = document.getElementById("escribirH2");
console.log(escribirH2.innerHTML);
//Escribo en mi h2
tituloH2.innerText = "Soy un texto agregado desde JS";
escribirH2.innerHTML = "<p>Ahora soy un parrafo agregado con inner.HTML</p>";

//Escribo en el html pero solo lo veo por console.log
let escribirDiv = document.getElementsByTagName("describirDiv");
escribirDiv.innerHTML = "<h1>Soy un h1 creado desde JS</h1><p>Soy un parrafo creado desde JS</p>";
console.log(escribirDiv.innerHTML)

//Obtengo los HTMLCollection dentro del array
let lista = document.getElementsByClassName("lista");
for (const i of lista) {
    console.log(i.innerHTML);
}
//borro un nodo del html desde JS
lista[1].remove();

// creo un elemento desde JS.

let crearP = document.createElement("p");
crearP.innerHTML = "<h2>Soy un h2 creado desde JS con innerHTML</h2>";
document.body.appendChild(crearP);

//agrego texto con queryselector

let query = document.querySelector(".query");
query.innerText = "Prueba de texto desde querySelector";
document.body.appendChild(query)



