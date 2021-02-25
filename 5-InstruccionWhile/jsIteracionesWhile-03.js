/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var clave; //variable inicializada
	clave = prompt("ingrese el número clave.");

	while(clave!="utn750") //condición
	{
		clave=prompt("Error. Por favor, vuelva re ingresar su clave"); // Modificación de la variable
	}
	alert("Bienvenido");
}//FIN DE LA FUNCIÓN
