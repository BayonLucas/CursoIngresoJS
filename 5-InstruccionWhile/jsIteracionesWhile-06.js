function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;
	var promedio;

	contador=0;
	acumulador=0;
	
	while(contador<5)
	{
		numeroIngresado=prompt("Ingrese un número");
		numeroIngresado=parseFloat(numeroIngresado);
		console.log(numeroIngresado);
		contador=contador+1;
		acumulador=acumulador+numeroIngresado;
		console.log("Total acumulado: "+acumulador);
	}

	promedio=acumulador/contador
		
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=promedio;
}//FIN DE LA FUNCIÓN