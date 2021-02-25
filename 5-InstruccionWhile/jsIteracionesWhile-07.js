/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.

function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var numeroIngresado;

	contador=0;
	acumulador=0;

	while(respuesta!='no')
	{
		numeroIngresado=prompt("Ingrese un número");
		numeroIngresado=parseFloat(numeroIngresado);
		console.log(numeroIngresado);
		contador=contador+1;
		acumulador=acumulador+numeroIngresado;
		console.log("Total acumulado: "+acumulador);
		respuesta=prompt("Desea agregar mas numeros?");

	}

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN*/

//-----------------------------------------------------------------------//

//Bayón, Lucas

//A - edad y nombre , informar el nombre de la persona mas vieja y la mas joven

function mostrar()
{

	var	nombre;
	var edad;
	var pregunta;
	var persona;
	var Viejo;
	var Joven;

	persona=0;

	while(pregunta!="no")
	{
		nombre=prompt("Ingrese un nombre");
		while(isNaN(nombre)==true)
		{
			nombre=prompt("Ingrese un nombre. Evite numero u otro tipo de caracter.");
		}
		edad=prompt("ingrese la edad");
		while(isNaN(edad))
		{

		}
		persona=persona+1;
		console.log("Persona: "+persona+". Nombre: "+nombre+". Edad: "+edad);
		pregunta=prompt("Desea agregar a otra persona?.");
	}

	alert();







}