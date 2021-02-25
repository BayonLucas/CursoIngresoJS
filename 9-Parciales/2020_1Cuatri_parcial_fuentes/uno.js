//Bayón, Lucas

/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total*/

/*
function mostrar()
{
	var tipo;
	var mensajeErrorTipo;
	var precio;
	var mensajeErrorPrecio;
	var cantidadDeUnidades;
	var mensajeErrorCantidad;
	var marca;
	var fabricante;
	var contador;
//Variables para ejercicio A
	var flagAlcoholBarato;
	var alcoholMasBarato;
	var cantidadDelAlcoholBarato;
	var fabricanteAlcoholBarato;
//variables para ejercicio B
	var acumTipoBarbijo;
	var acumuladorCantBarbijo;
	var acumTipoJabon;
	var acumuladorCantJabon;
	var acumTipoAlcohol;
	var acumuladorCantAlcohol;
	var precioAcumB;
	var precioAcumJ;
	var precioAcumA;
	
	var promedio;
	var cantMayorTipo;
/*
	var promedioBarbijo;
	var promedioJabon;
	var promedioAlcohol;
	var mensajePromedio;
*/
//Variables para el ejercicio C
/*	var acumuladorJabon;

	mensajeErrorTipo="Por favor, ingrese si es: barbijo, jabón o alcohol.";
	mensajeErrorPrecio="Por favor, Ingrese un valor numerico entre 100 y 300.";
	mensajeErrorCantidad="Por favor, Ingrese un valor numerico entre 1 y 1000.";
	contador=0;
	flagAlcoholBarato=0;
	acumuladorJabon=0;

	acumTipoBarbijo=0;
	precioAcumB=0;
	acumuladorCantBarbijo=0;
	acumTipoJabon=0;
	precioAcumJ=0;
	acumuladorCantJabon=0;
	acumTipoAlcohol=0;
	precioAcumA=0;
	acumuladorCantAlcohol=0;

	while(contador<5)
	{
		tipo=prompt("Ingrese tipo de producto (barbijo, jabón o alcohol).");
		while(isNaN(tipo)==false)
		{
			tipo=prompt(mensajeErrorTipo);
		}
		while(tipo!="barbijo"&&tipo!="jabón"&&tipo!="alcohol")
		{
			tipo=prompt(mensajeErrorTipo);
		}
		precio=prompt("Ingrese el costo unitario del producto");
		while(isNaN(precio)==true)
		{
			precio=prompt(mensajeErrorPrecio);
		}
		while(precio<100||precio>300)
		{
			precio=prompt(mensajeErrorPrecio);
		}
		precio=parseFloat(precio);
		cantidadDeUnidades=prompt("Ingrese cantidad de unidades del producto");
		while(isNaN(cantidadDeUnidades)==true)
		{
			cantidadDeUnidades=prompt(mensajeErrorCantidad);	
		}
		while(cantidadDeUnidades<1||cantidadDeUnidades>1000)
		{
			cantidadDeUnidades=prompt(mensajeErrorCantidad);
		}
		cantidadDeUnidades=parseFloat(cantidadDeUnidades);
		switch(tipo)
		{
			case"barbijo":
				acumuladorCantBarbijo=acumuladorCantBarbijo+cantidadDeUnidades;
				precioAcumB=precioAcumB+precio;
				acumTipoBarbijo=acumTipoBarbijo+1;
				break;
			case"jabón":
				acumuladorCantJabon=acumuladorCantJabon+cantidadDeUnidades;
				precioAcumJ=precioAcumJ+precio;
				acumTipoJabon=acumTipoJabon+1;
				acumuladorJabon=acumuladorJabon+cantidadDeUnidades;
				break;
			default:
				acumuladorCantAlcohol=acumuladorCantAlcohol+cantidadDeUnidades;
				precioAcumA=precioAcumA+precio;
				acumTipoAlcohol=acumTipoAlcohol+1;
				if(flagAlcoholBarato==0)
				{
					alcoholMasBarato=precio;
					cantidadDelAlcoholBarato=cantidadDeUnidades;
					fabricanteAlcoholBarato=fabricante;
					flagAlcoholBarato=flagAlcoholBarato+1;
				}
				break;
		}
		marca=prompt("Ingrese la marca del producto");
		fabricante=prompt("Ingrese el fabricante del producto");
		contador=contador+1;
		console.log(contador+". Tipo: "+tipo+". Precio: "+precio+". Cantidad de Unidades: "+cantidadDeUnidades+". Marca: "+marca+". Fabricante: "+fabricante);

//--------------------------------Corrección: Debo evitar repetir switchs----------------------------------------------------------------------------------------------
		//Primer Flag
//		switch(tipo)
//		{
/*			case"alcohol":
				if(flagAlcoholBarato==0)
				{
					alcoholMasBarato=precio;
					cantidadDelAlcoholBarato=cantidadDeUnidades;
					fabricanteAlcoholBarato=fabricante;
					flagAlcoholBarato=flagAlcoholBarato+1;
				}
				else
				{
					if(precio<alcoholMasBarato)
					{
						alcoholMasBarato=precio;
						cantidadDelAlcoholBarato=cantidadDeUnidades;
						fabricanteAlcoholBarato=fabricante;
					}
				}
				flagAlcoholBarato=flagAlcoholBarato+1;
				break;*/
/*			case"jabón":
				acumuladorJabon=acumuladorJabon+cantidadDeUnidades
				break;*/
//		}
//------------------------------------------------------------------------------------------------------------------------------
//	}
	//promedios	

/*
	promedioBarbijo=precioAcumB/acumTipoBarbijo;
	promedioJabon=precioAcumJ/acumTipoJabon;
	promedioAlcohol=precioAcumA/acumTipoAlcohol;	
	mensajePromedio="El costo promedio de su mayor compra es de: $";
*/
/*
	alert("Usted lleva "+cantidadDelAlcoholBarato+" unidades del alcohol hecho por: "+fabricanteAlcoholBarato+" (El más barato).");

	if(acumuladorCantBarbijo>acumuladorCantJabon&&acumuladorCantBarbijo>acumuladorCantAlcohol)
	{
		console.log("calculo del promedio: Precio acumulado= $"+precioAcumB+". Sobre la cant. de Items= "+acumTipoBarbijo);
		cantMayorTipo="Barbijo";
		promedio=precioAcumB/acumTipoBarbijo;
	}
	else
	{
		if(acumuladorCantJabon>acumuladorCantAlcohol)
		{
			console.log("calculo del promedio: Precio acumulado= $"+precioAcumJ+". Sobre la cant. de Items= "+acumTipoJabon);
			cantMayorTipo="Jabón";
			promedio=precioAcumJ/acumTipoJabon;
		}
		else
		{
			console.log("calculo del promedio: Precio acumulado= $"+precioAcumA+". Sobre la cant. de Items= "+acumTipoBarbijo);
			cantMayorTipo="Alcohol";
			promedio=precioAcumA/acumTipoAlcohol;
		}
	}
	
	alert("El tipo con mas cantidad es: "+cantMayorTipo+"y el promedio de su costo es: "+promedio);
	alert("Usted lleva en total: "+acumuladorJabon+" unidades de Jabón.");
}


*/

//Desde cero-------------------------------------------------------------------------------------------------------------------

/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total*/

function mostrar()
{
	var contadorDeProducto;
	var tipoIngresado;
	var precioIngresado;
	var cantidadIngresada;
	var marcaIngresada;
	var fabricanteIngresado;
	var flagPrimerAlcohol;
	var marcaAlcoholBarato;
	var precioMinimo;
	var cantidadAlcoholBarato;
	var acumuladorCantidadBarbijo;
	var contadorBarbijo;
	var acumuladorCantidadJabon
	var contadorJabon;
	var acumuladorCantidadAlcohol;
	var contadorAlcohol;
	var promedio;
	var fabricantoAlcoholBarato;


	contadorDeProducto = 0;
	flagPrimerAlcohol = 0;
	contadorJabon = 0;
	contadorBarbijo = 0;
	contadorAlcohol = 0;
	

	while(contadorDeProducto<5)
	{
		tipoIngresado=prompt("Ingrese el tipo de producto (barbijo, jabón ó alcohol)");
		while(tipoIngresado!="barbijo" && tipoIngresado!="jabón" && tipoIngresado!="alcohol" || (isNaN(tipoIngresado))==false)
		{
			tipoIngresado=prompt("Error!. Ingrese barbijo, jabón o alcohol.");
		}
		precioIngresado=prompt("Ingrese el precio del producto");
		while(precioIngresado<100 || precioIngresado>300 || (isNaN(precioIngresado))==true)
		{
			precioIngresado=prompt("Volve a ingresar un precio (numérico) entre 100 y 300.");
		}
		precioIngresado=parseFloat(precioIngresado);
		cantidadIngresada=prompt("Ingrese el precio del producto");
		while(cantidadIngresada<1 || cantidadIngresada>1000 || (isNaN(cantidadIngresada))==true)
		{
			cantidadIngresada=prompt("Volve a ingresar un precio (numérico) entre 1 y 1000.");
		}
		cantidadIngresada=parseInt(cantidadIngresada);
		marcaIngresada=prompt("Ingrese la marca de producto.");
		while (isNan(marcaIngresada)==false) 
		{
			marcaIngresada=prompt("Error!. La marca no puede ser solo numeros.");	
		}
		fabricanteIngresado=prompt("Ingrese el fabricante de producto.");
		while (isNaN(fabricanteIngresado)==false)
		{
			fabricanteIngresada=prompt("Error!. La marca no puede ser solo numeros.");
		}
		contadorDeProducto=contadorDeProducto+1;
		//a) Del más barato de los alcohol, la cantidad de unidades y el fabricante

	/*	if(tipoIngresado=="alcohol")
		{
			if(flagPrimerAlcohol== 0)
			{
				precioMinimo=precioIngresado;
				cantidadAlcoholBarato=cantidadIngresada;
				marcaAlcoholBarato=marcaIngresada;
				flagPrimerAlcohol= flagPrimerAlcohol+1;
			}
			else
			{
				if(precioIngresado<precioMinimo)
				{
					precioMinimo=precioIngresado;
					cantidadAlcoholBarato=cantidadIngresada;
					marcaAlcoholBarato=marcaIngresada;
				}
			}
		}*/
		//b) Del tipo con mas unidades, el promedio por compra

		switch(tipoIngresado)
		{
			case"barbijo":
				acumuladorCantidadBarbijo = acumuladorCantidadBarbijo+cantidadIngresada;
				contadorBarbijo =contadorBarbijo+1;
				break;
			case"jabón":
				acumuladorCantidadJabon = acumuladorCantidadJabon+cantidadIngresada;
				contadorJabon =contadorJabon+1;
				break;	
			case"alcohol":
				acumuladorCantidadAlcohol = acumuladorCantidadAlcohol+cantidadIngresada;
				contadorAlcohol =contadorAlcohol+1;
				if(flagPrimerAlcohol== 0)
				{
					precioMinimo=precioIngresado;
					cantidadAlcoholBarato=cantidadIngresada;
					marcaAlcoholBarato=marcaIngresada;
					fabricantoAlcoholBarato=fabricanteIngresado;
					flagPrimerAlcohol= flagPrimerAlcohol+1;
				}
				else
				{
					if(precioIngresado<precioMinimo)
					{
						precioMinimo=precioIngresado;
						cantidadAlcoholBarato=cantidadIngresada;
						marcaAlcoholBarato=marcaIngresada;
					}
				}
				break;	
		}
					cantidadAlcoholBarato=cantidadIngresada;
		console.log("LLevas"+cantidadAlcoholBarato+"unidades del alcohol mas barato de la marca: "+marcaAlcoholBarato+", hecho por"+fabricantoAlcoholBarato);
	}//Fin del While.
	if(acumuladorCantidadJabon > acumuladorCantidadBarbijo && acumuladorCantidadJabon > acumuladorCantidadAlcohol)
	{
		productoMasUnidades="Jabón";
		promedio=acumuladorCantidadJabon/contadorJabon;
	}
	else
	{
		if(acumuladorCantidadBarbijo>acumuladorCantidadAlcohol)
		{
			productoMasUnidades="Barbijo";
			promedio=acumuladorCantidadBarbijo/contadorBarbijo;
		}
		else
		{
			productoMasUnidades="Alcohol";
			promedio=acumuladorCantidadAlcohol/contadorAlcohol;
		}
	}
	console.log("El promedio de " + productoMasUnidades+" es "+promedio);
	//c) Cuántas unidades de jabones hay en total*/
	console.log("La cantidad de jabones es: "+acumuladorCantidadJabon);
}
