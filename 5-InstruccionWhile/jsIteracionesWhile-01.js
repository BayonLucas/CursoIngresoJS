//Bayón, Lucas

/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/

/*
function mostrar()
{
	var contador;
	contador=0
	
	while(contador<10)
	{
		contador=contador+1;
		console.log(contador)
	}
	
}//FIN DE LA FUNCIÓN
*/

//Clase Repaso Sabado 20/02/2021------------------------------------

//Bayón, Lucas - Div. E

//While 1.: Ingresar 5 numeros, y determinar la cantidad de numeros que son mayores que 10 y menores 20 (incluisive en ambos casos)

/*
function mostrar()
{
	var numeroIngresado;
	var contador;
	var contadorNumerosEntre10y20;

	contador=0;
	contadorNumerosEntre10y20=0;

	while(contador<5)
	{
		numeroIngresado=prompt("Ingrese un número.")
		contador=contador+1;
		if(numeroIngresado>9 && numeroIngresado<21)
		{
			contadorNumerosEntre10y20=contadorNumerosEntre10y20+1;
		}
	}
	alert("La cantidad de números entre el 10 y el 20 es: "+contadorNumerosEntre10y20);
}*/
//Bayón, Lucas - Div. E


//2. Mismo ejercicio, pero no se cuantos numeros se ingresan. (Lo decide el usuario). Mostrar tambien el promedio de los numeros que cumplen la condicion.


function mostrar()
{
	var numeroIngresado;
	var contadorNumerosEntre10y20;
	var acumuladorNumerosEntre10y20;
	var respuesta;
	var promedio;

	contadorNumerosEntre10y20=0;
	acumuladorNumerosEntre10y20=0;
	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingrese un número.");
		while(isNaN(numeroIngresado)==true)
		{
			numeroIngresado=prompt("Ingrese valores numéricos");
		}
		numeroIngresado=parseFloat(numeroIngresado);
		if(numeroIngresado>9 && numeroIngresado<21)
		{
			contadorNumerosEntre10y20=contadorNumerosEntre10y20+1;
			acumuladorNumerosEntre10y20=acumuladorNumerosEntre10y20+numeroIngresado;
		}
		respuesta=prompt("Desea ingresar otro número? Ingrese 'si' o 'no'.");
		while(isNaN(respuesta)==false || respuesta!='si' && respuesta!='no')
		{
			respuesta=prompt("Por favor ingrese solo si o no");
		}
	}
	promedio=acumuladorNumerosEntre10y20/contadorNumerosEntre10y20;
	alert("La cantidad de números entre el 10 y el 20 es: "+contadorNumerosEntre10y20+" y el promedio es: "+promedio);
}