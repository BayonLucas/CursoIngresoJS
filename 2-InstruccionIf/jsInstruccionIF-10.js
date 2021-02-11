/*Bayón, Lucas*/

//Primer Intento
/*function mostrar()
{
	var notaExamen;

	notaExamen=Math.floor(Math.random() * 10) + 1;
	console.log("La nota es:" + notaExamen);

	if(notaExamen>8)
	{
		alert("La nota es: "+notaExamen+" --> EXCELENTE");
	}
	else
	{
		if(notaExamen<4)
		{
			alert("La nota es: "+notaExamen+" --> Vamos, la proxima se puede");
		}
		else
		{
			alert("La nota es: "+notaExamen+" --> APROBÓ");
		}
	}

}
*/
/*Bayón, Lucas*/
//Segundo intento, Trantar de tener un solo alert
function mostrar()
{
	var notaExamen;
	var mensaje;

	notaExamen=Math.floor(Math.random() * 10) + 1;
	console.log("La nota es:" + notaExamen);

	if(notaExamen>8)
	{
		mensaje="EXCELENTE";
	}
	else
	{
		if(notaExamen<4)
		{
			mensaje="Vamos, la proxima se puede";
		}
		else
		{
			mensaje="APROBÓ";
		}
	}

	alert("La nota es: "+notaExamen+" --> " + mensaje);
}