//Uso de IF / ELSE / WHILE para ingreso de usuario
debugger

let repetir = true

while(repetir){
        let nombre = prompt("Ingrese su nombre")
        if (nombre == ""){
            alert ("Tenés que ingresar un nombre");
        } else {
            repetir = false
            alert ("Bienvenido " + nombre);
        }
    }

//Uso de SWITCH para seleccion de color en SHOP

let color = prompt("Elegí un color de remera:")

switch (color) {
    case "blanco":
        console.log("Hay stock en", color)
        break;
    case "negro":
        console.log("Hay Stock en", color)
        break;
    case "gris":
        console.warn("Ultimas prendas en", color)
        break;
    case "verde":
        console.log("No hay stock en", color)
        break;
    case "azul":
        console.log("No hay stock en", color)
        break;        
    default:
        console.error("No realizamos remeras en", color)
        break;
}   

//Uso de OPERACIONES MATEMATICAS para contar la cantidad de prendas disponibles

let repetir2 = true

while(repetir2){
    let cantidad = parseInt (prompt("¿Cuantas remeras querés comprar?"))
    let stock = 20
    let resultado = stock - cantidad;
    if (cantidad >=21){
        alert ("No tenemos esa cantidad");
    } else {
        repetir2 = false
        alert (`Actualmente quedan en stock: ${resultado}`);
    }
}