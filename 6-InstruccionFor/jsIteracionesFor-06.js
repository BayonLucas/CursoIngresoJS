//Bayón, Lucas

//al presionar el botón pedir un número. mostrar los numeros pares desde el 1 al número ingresado, y mostrar la cantidad de numeros pares encontrados.

function mostrar()
{
	var contador;
	var numeroIngresado;
	var numeroPar;
	var contadorCantidadPares;

	numeroIngresado=prompt("Ingrese un numero");
	numeroIngresado=parseInt(numeroIngresado);	
	contadorCantidadPares=0;

	for(contador=1;contador>0;contador++)
	{
		if(numeroIngresado%2==0)
		{
			numeroPar=numeroIngresado%2
			console.log(numeroPar);
			contadorCantidadPares=contadorCantidadPares+1;
			console.log(contadorCantidadPares);
		}
		break;
	}
}//FIN DE LA FUNCIÓN

//No esta terminado