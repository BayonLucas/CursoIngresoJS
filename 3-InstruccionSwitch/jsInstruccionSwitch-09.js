/*Bayón, Lucas*/

/*function mostrar()
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


}//FIN DE LA FUNCIÓN*/

//------------------Clase Repaso 13/02-----------------------------

//Bayón, Lucas Div. E

/*
3-con if
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final
en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%
en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%
en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
*/

function mostrar()
{
var estacion;
var destino;
var tarifaBase;
var porcentaje;
var extra;
var totalDelViaje;

estacion=document.getElementById('txtIdEstacion').value;
destino=document.getElementById('txtIdDestino').value;
tarifaBase=15000;



if(estacion=="Invierno")
{
	if(destino=="Bariloche")
	{
		porcentaje=20;
	}
	else
	{
		if(destino=="Mar del plata")
		{
			porcentaje=-20;
		}
		else
		{
			porcentaje=-10;
		}
	}
}
else
{
	if(estacion=="Verano")
	{
		if(destino=="Bariloche")
		{
			porcentaje=-20;
		}
		else
		{
			if(destino=="Mar del plata")
			{
				porcentaje=20;
			}
			else
			{
				porcentaje=10;
			}
		}
	}
	else
	{
		if(destino=="Cordoba")
		{
			porcentaje=0;
		}
		else
		{
			porcentaje=10;
		}
	}
}

extra=tarifaBase*(porcentaje/100);
totalDelViaje=tarifaBase+extra;

console.log("Estación: "+estacion+". Destino: "+destino+". Aumento o Descuento: "+porcentaje+"%. Total: "+totalDelViaje);
alert("El costo total de su viaje es: $"+totalDelViaje);
}