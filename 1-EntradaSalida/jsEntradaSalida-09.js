/*Bayón, Lucas

Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
//Si pongo 100 me muestra 110

/* Ej.9 Bis: El usuario debe poder elegir el porcentaje*/

function mostrarAumento()
{
	var sueldo;
	var	resultado;	
	var	porcentaje;

	sueldo=document.getElementById('txtIdSueldo').value;
	sueldo=parseInt(sueldo);

	porcentaje=prompt("Por favor, ingrese el porcentaje deseado");
	porcentaje=parseInt(porcentaje);

	resultado=sueldo+sueldo*porcentaje/100;
	resultado=parseInt(resultado);
	
	document.getElementById('txtIdResultado').value=resultado;
}
