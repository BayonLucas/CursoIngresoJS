/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 9 inclusive.");
	numeroIngresado=parseInt(numeroIngresado);

	while(numeroIngresado>9||numeroIngresado<0)
	{
		numeroIngresado=prompt("Error. Vuelva a ingresar un numero entre el 0 y el 9 inclusive");
	}
	document.getElementById('txtIdNumero').value="Ingresó el numero: "+numeroIngresado;
}//FIN DE LA FUNCIÓN