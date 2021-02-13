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

//function mostrar(){
/*
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
*/

//Bayón, Lucas

//Clase de repaso 13/02/21
/*1-con if
pedir a una persona que fue de vaciones , la distancia que viajo y el tiempo que tardo, para calcular la velocidad
e informar:
60 km/hr = muy lento
hata 80km/h= lento
hasta 100= buen ritmo
hasta 120= ahi de la ley
mas = eso no se hace*/

//Ejercicio usado: E/S Ej. 5

function mostrar(){

var distancia;
var tiempo;
var velocidad;
var mensaje;

distancia=document.getElementById('txtIdNombre').value;
distancia=parseInt(distancia);

tiempo=document.getElementById('txtIdEdad').value;
tiempo=parseInt(tiempo);

velocidad=distancia/tiempo;

if(velocidad<61)
{
	mensaje="Muy lento";
}
else
{
	if(velocidad<81)
	{
		mensaje="Lento";
	}
	else
	{
		if(velocidad<101)
		{
			mensaje="Buen ritmo";
		}
		else
		{
			if(velocidad<121)
			{
				mensaje="Ahí de la ley";
			}
			else
			{
				mensaje="Eso no se hace";
			}
		}
	}
}
console.log("Distancia: "+distancia+"Km. Tiempo: "+tiempo+"Hs. Velocidad: "+velocidad+"Km/H. "+mensaje);
alert(mensaje);
}
