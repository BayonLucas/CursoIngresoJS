/*
Al presionar el botón pedir números hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/

function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;

	//iniciar variables
	banderaDelPrimero="es el primero";
	respuesta='si';

	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingrese un número");
		while(isNaN(numeroIngresado)==true)
		{
			numeroIngresado=prompt("Flaco/a.. dije números. Evitá otro tipo de caracter.");
		}
		numeroIngresado=parseFloat(numeroIngresado);
		if(banderaDelPrimero=="es el primero")
		{
			numeroMinimo=numeroIngresado;
			numeroMaximo=numeroIngresado;
			banderaDelPrimero=="No, no es el primero";
		}
		else
		{
			if(numeroIngresado<numeroMinimo)
			{
				numeroMinimo=numeroIngresado;
			}
			else
			{
				if(numeroIngresado>numeroMaximo)
				{
					numeroMaximo=numeroIngresado;
				}
			}
		}
		banderaDelPrimero=="No, no es el primero";
		respuesta=prompt("desea continuar?");
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN