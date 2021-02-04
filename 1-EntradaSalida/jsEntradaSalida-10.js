/* Bayón, Lucas

Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
//Si ingreso 100 me muestra 75

/* Ej.10 Bis: Se pide al usuario el porcentaje*/

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
