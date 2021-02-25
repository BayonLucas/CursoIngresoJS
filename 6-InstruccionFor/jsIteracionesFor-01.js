function mostrar()
{
//for tiene 3 partes
	var contador;
	contador=0;
//	for(/*1;2;3*/
	for(contador=0;contador<5;contador++)	
	{
		console.log("la iteracion es#"+(contador+30));
		//en el while, la modificacion del contador iria aca.
		//puede tener un:
		break;
		//que corta toda iteracion..  o un:
		continue;
		//que le da un nuevo rumbo
	}
	//siempre sabemos el valor del contador
}
