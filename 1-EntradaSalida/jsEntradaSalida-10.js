/* Bayón, Lucas

Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
//Si ingreso 100 me muestra 75

/* Ej.10 Bis: Se pide al usuario el porcentaje*/

/*
function mostrarAumento()
{
	var importe;
	var resultado;
	var porcentaje;	

	importe=document.getElementById('txtIdImporte').value;
	importe=parseInt(importe);

	porcentaje=prompt("Por favor, ingrese el porcentaje deseado");
	porcentaje=parseInt(porcentaje);

	resultado=importe - (importe*porcentaje/100);
	resultado=parseInt(resultado);

	document.getElementById('txtIdResultado').value=resultado;
}
*/

/*Bayón, Lucas - Div E*/

//2- en el ejercicio 10 de entrada y salida , se debe pedir el nombre del producto , el importe y tambien se debe pedir el porcentaje de descuento al usuario, mostar el mensaje "usted compro un XXXXXX con XX % de descuento, el precio final es XXXX"

function mostrarAumento()
{
	var producto;
	var importe;
	var porcentaje;
	var descuento;
	var resultado;	

	producto=prompt("Ingrese el nombre del producto, por favor");

	importe=document.getElementById('txtIdImporte').value;
	importe=parseInt(importe);

	porcentaje=prompt("Por favor, ingrese el porcentaje deseado");
	porcentaje=parseInt(porcentaje);

	descuento=importe*porcentaje/100;

	resultado=importe - descuento;

	document.getElementById('txtIdResultado').value="Usted compró un/a "+producto+" con un "+porcentaje+"% de descuento. El precio final es de $"+resultado;
}