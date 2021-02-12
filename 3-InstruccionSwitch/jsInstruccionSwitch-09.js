/*Bayón, Lucas*/

function mostrar()
{
	var estacionIngresada;
	var destinoIngresado
	var	tarifaBase;
	var porcentaje;//Definir en Switch
	var descuentoOAumento;
	var totalDelViaje;

	estacionIngresada=txtIdEstacion.value;
	destinoIngresado=txtIdDestino.value;
	tarifaBase=15000;


	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					porcentaje=20;
					break;
				case "Mar del plata":
					porcentaje=-20;
					break;
				default:
					porcentaje=10;
					break;			
			}
		break;
		case "Verano":
			switch(destinoIngresado)
			{
				case "Bariloche":
					porcentaje=(-20);
					break;
				case "Mar del plata":
					porcentaje=20;
					break;
				default:
					porcentaje=10;
					break;
			}
		break;
		default:
			switch(destinoIngresado)
			{
				case "Cordoba":
					porcentaje=0;
					break;
				default:
					porcentaje=10;
					break;
			}
		break;			
	}

	descuentoOAumento=tarifaBase*porcentaje/100;
	totalDelViaje=tarifaBase+descuentoOAumento;

	console.log("Destino: "+destinoIngresado+" Estación: "+estacionIngresada+" Porcentaje extra: "+porcentaje+"% Total: $"+totalDelViaje);
	alert("El costo de su viaje es de: "+totalDelViaje);


}//FIN DE LA FUNCIÓN