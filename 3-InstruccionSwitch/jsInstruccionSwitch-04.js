/*Bayón, Lucas*/

function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	var mensaje;

	switch(mesDelAño)
	{
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensaje="Tiene 30 días";
			break;
		case "Febrero":
			mensaje="Tiene 28 días";
			break;
		default:
			mensaje="Tiene 31 días";		
	}
	alert(mensaje);
	
	



}//FIN DE LA FUNCIÓN