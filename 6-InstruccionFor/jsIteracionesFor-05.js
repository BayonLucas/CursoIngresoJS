//Bayón, Lucas

//al presionar el botón repetir el pedido de número hasta que ingresemos el 9.
function mostrar()
{
	var numeroIngresado;
	var contador;

	numeroIngresado=prompt("Ingrese un numero");
	numeroIngresado=parseInt(numeroIngresado);

	for(contador=1;contador>0;contador++)
	{
		numeroIngresado=prompt("Ingrese otro numero");
		if(numeroIngresado==9)
		{
			break;
		}
	}
}//FIN DE LA FUNCIÓN