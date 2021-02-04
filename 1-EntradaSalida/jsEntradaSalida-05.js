/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/

/*Bayón, Lucas*/
/*function mostrar()
{	
	var nombre
	var edad
	var mensajeDeRespuesta
/* De esta forma esta MAL!!!
	nombre = prompt("ingrese su nombre");
	edad = prompt("ingrese su edad");
	mensajeDeRespuesta = "Usted se llama " + nombre + " y tiene " + edad + " años";

	document.getElementById('txtIdNombre').value = mensajeDeRespuesta; */

	/*
	nombre = document.getElementById('txtIdNombre').value;
	edad = document.getElementById('txtIdEdad').value;
	mensajeDeRespuesta = "Usted se llama " + nombre + " y tiene " + edad + " años";

	alert(mensajeDeRespuesta);
}*/
/*
5 bis : 
 se debe mostrar un mensaje :

 "Perez , usted se llama jose y tiene 66 años"
se debe optener el apellido , de la manera que puedan*/

function mostrar(){

	var nombre 
	var edad
	var apellido
	var mensajeDeRespuesta

	nombre = document.getElementById('txtIdNombre').value;
	edad = document.getElementById('txtIdEdad').value;
	apellido = prompt("Ingrese su apellido")
	mensajeDeRespuesta = apellido + ", usted se llama " + nombre + " y tiene " + edad + " años.";

	console.log(nombre)
	console.log(edad)
	console.log(apellido)

	alert(mensajeDeRespuesta);
}





