const cuerpo= document.getElementsByTagName("body");
const parrafo= document.createElement("p");
const texto= document.createTextNode("Hola, soy un texto creado por JavaScript");

parrafo.appendChild(texto);
parrafo.id= "importante";
parrafo.className= "border-gray"
// Esto esta en STANDBY
// parrafo.innerHTML("Texto JS puesto con textContent");
 
cuerpo[0].appendChild(parrafo);

//Clonamos
const articulo= document.getElementsByTagName("article");
const articulo_copia= articulo[0].cloneNode(true);
const seccion= document.getElementById("section").appendChild(articulo_copia);

//Eliminamos
const menu= document.getElementsByTagName("nav");
menu[0].remove();
