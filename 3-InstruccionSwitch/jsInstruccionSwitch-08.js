/*Bayón, Lucas*/

function mostrar()
{
	var destinoIngresado;
	var mensaje;

	destinoIngresado=txtIdDestino.value;
	
	switch(destinoIngresado)
	{
	case "Bariloche":
	case "Ushuaia":
		mensaje="Hace frio allá";
		break;
	default:
		mensaje="Hace calor allá";
		break;		
		}
	alert(mensaje);

}//FIN DE LA FUNCIÓN