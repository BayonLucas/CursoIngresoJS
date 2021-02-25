//Bayón; Lucas

//al presionar el botón repetir hasta que utilizamos 'BREAK'.
function mostrar()
{
	var contador;
	for(contador=0;contador<100;contador++)
	{
		console.log(contador);
		if(contador==23)
		{
			console.log("Llegaste al break");
			break;
		}
	}
}//FIN DE LA FUNCIÓN