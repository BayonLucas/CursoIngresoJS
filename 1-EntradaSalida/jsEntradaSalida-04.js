/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/

/*
function mostrar()
{
	var nombre;
	var mensajeDeRespuesta

	nombre = prompt("ingrese su nombre")
	mensajeDeRespuesta="Su nombre es :" + nombre

	document.getElementById('txtIdNombre').value=mensajeDeRespuesta;
}
*/

/*Bayón, Lucas - Div. E*/

//Clase de apoyo. Ej.1 "Ingresar descripción (por prompt) y precio de un producto (por id)."El programa deberá mostrar por alert la descripción del producto junto al precio aumentado en un 30%.
//Al final o se editaba el html del ejercicio 4 o usabamos otro ejercicio...LPM
function mostrar()
{
	var producto;
	var precio;
	var aumento;
	var respuestaConAumento;

	producto=prompt("Ingrese el nombre del producto deseado");

	precio = document.getElementById(prompt("precio")).value;
	precio = parseInt(precio);

	aumento=precioDeXProducto*30/100;

	respuestaConAumento=precio+aumento;

	alert("Su total con el aumento es: " + respuestaConAumento);

}