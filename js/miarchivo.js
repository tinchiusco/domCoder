
class Client {
    constructor(name,surname,dni){
    this.name = name;
    this.surname = surname;
    this.dni = parseInt(dni);
    }
}

class Prop {
    constructor(zone, size, price){
        this.zone = zone;
        this.size = size;
        this.price = price;
    }
}

//Clientes precargados
const client = [];

client.push(new Client ("Martin", "Rivas Anaya", 32575428));
client.push(new Client ("Ana Paula", "Cortes", 40587665));
client.push(new Client ("Tomas", "Caniza", 36874556));

//Propiedades precargadas
const propertie = [];

propertie.push(new Prop("Urbana", 450, 60000));
propertie.push(new Prop("Rural", 1000, 250000));
propertie.push(new Prop("Urbana", 6800, 325000)); 

/* ******************** Inicio funciones del programa ********************* */

alert("Bienvenido a Tasaciones.net")

function menu() {
    
    let option = parseInt(prompt("Ingrese el motivo de su consulta \n 1) Iniciar una nueva tasacion \n 2) Consultar por una tasacion ya realizada \n 3) Modificar datos de una tasacion \n 4) Salir" ));
    return option;

    }
    // Anadir cliente


    function addClient() {
        
        let name = prompt("Ingrese su nombre");
        let surname = prompt("Ingrese su apellido");
        let dni = parseInt(prompt("Ingrese su DNI"));
        let clientNew = new Client (name, surname,dni);
        client.push(clientNew); //push de clientes
        console.log(client);
        let zone = place();
        let size = calcM2();
        let price = total(zone,size);
        let propNew = new Prop (zone, size, price)
        propertie.push(propNew) //push de propiedad
        console.log(propertie)
        alert("Usuario y propiedad creada. Para ver los datos de la tasacion use el buscador por DNI");
        letsgo()
    
    }
    //Buscar cliente

    function search(){
        do{
        let dni = parseInt(prompt("Busqueda por DNI"));
        let search = client.find(client => client.dni === dni);
        let i = client.indexOf(search);
        console.log(client[i], propertie [i]);
        alert(`Datos comitente: \n Nombre:${client[i].name} \n Apellido: ${client[i].surname} \n DNI: ${client[i].dni} \n Datos propiedad: \n Zona: ${propertie[i].zone}, \n Tamano: ${propertie[i].size} \n Precio: ${propertie[i].price}`); 
        }while (search == undefined)
        
        }
        letsgo();

    //Modificar cliente
        
    function modClient(){

        let dni = parseInt(prompt("Ingrese el DNI de la tasacion a modificar"));
        let search = client.find(client => client.dni === dni);
        let i = client.indexOf(search);
        let name = prompt("Ingrese su nombre");
        let surname = prompt("Ingrese su apellido");
        let clientMod = new Client (name, surname,dni);
        client.splice(i, 1, clientMod);
        alert("Cliente modificado, por favor use el buscador por DNI");
        letsgo()
    }

    //Salir

    function exit() {
        alert ('Muchas gracias por usar Tasaciones.net')
    }

    //Generador de ID para enlazar clientes con propiedades, a futuro... 

    /* function id() {
        
        let num = math.max(client.code);
        return num + 1;

    } */


function calcM2() {

    let m2Front = prompt("Ingrese los metros cuadrados de frente o calle de valor mas alto");
    let m2Back = prompt("Ingrese los metros cuadrados de fondo o calle de menor valor");
    return m2Front * m2Back;
}

function place(){
    
    let zone = prompt ("Indique si su propiedad se encuentra en: \n 1) Zona urbana \n 2) Zona rural");
    if (zone == 1){
        return "Urbana";
    }if (zone == 2){
        return "Rural";
    }else {
        alert("Dato invalido"); 
    }
}
    

function total(zone, size){
    let price = 0;
    if (zone == "Urbana"){
        price = 10000;
        return (price*size);
    }else if (zone == "Rural"){
    price = 2000;
    return (price*size);
}
}

/* ******************* Inicio ejecucion del programa ********************* */

letsgo()

function letsgo() {
let start = menu();

    
switch (start) {
    case 1:
        addClient();
        break;

    case 2: 
        search();
        break;

    case 3:
        modClient();
        break;

    case 4: 
        exit();
        break;

    default:
        alert("Opcion no valida, ingrese nuevamente");
        break;
}

}
