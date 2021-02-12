/*Bayón, Lucas*/

function mostrar()
{
	var destinoIngresado;
	var mensaje;
	
	destinoIngresado=txtIdDestino.value;

	switch(destinoIngresado)
	{
		case "Cataratas":
			mensaje="Norte";
			break;
		case "Bariloche":
			mensaje="Oeste";
			break;
		case "Ushuaia":
			mensaje="Sur";
			break;
		default:
			mensaje="Este";
			break;
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN