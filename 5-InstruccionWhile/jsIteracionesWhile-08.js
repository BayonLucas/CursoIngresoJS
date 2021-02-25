/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var numeroIngresado;

	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';

	while(respuesta=='si')
	{
		numeroIngresado=prompt("Ingrese un número");
		while(isNaN(numeroIngresado)==true)
		{
			numeroIngresado=prompt("Error. Por favor, use NÚMEROS");
		}
		numeroIngresado=parseFloat(numeroIngresado);
		contador=contador+1;
		if(numeroIngresado>-1)
		{
			sumaPositivos=sumaPositivos+numeroIngresado;	
		}
		else
		{
			multiplicacionNegativos=multiplicacionNegativos*numeroIngresado
		}
		console.log("Contador: "+contador+" La suma de los positivos: "+sumaPositivos+" El producto de los negativos: "+multiplicacionNegativos);
		respuesta=prompt("Ingrese 'si' o 'no' para continuar.");
		while(isNaN(respuesta)==false)
		{
			respuesta=prompt("Por favor, escriba 'si' o 'no'. Evite cualquier otro tipo de caracter");
		}
	}

	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN