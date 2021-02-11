/*Bayón, Lucas*/

/*Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).
*/

function mostrar()
{
	var edad;
	
	edad=document.getElementById('txtIdEdad').value; 
	edad=parseInt(edad);
/*Mal --> minimo4 y maximo 4 veces q usa el microprocesador
	if(edad>18)
	{
		alert("Es mayor");
	}

	if(edad<13)
	{
		alert("Es niño");
	}

	if((edad<18)&&(edad>13))
	{
		alert("Es adolecente");
	}
*/ 

/*error
	if(edad<13)
	{
		alert("Es niño");
	}

	if((edad<18)&&(edad>13))
	{
		alert("Es adolecente");
	}
	else()
	{
		alert("Es mayor");
	}
*/

/*
	if(edad<13)
	{
		alert("Es niño");
	}
	else
	{
		if((edad<18)&&(edad>13))
		{
		alert("Es adolecente");
		}
		else{
			if(edad>17)
			{
				alert("Es Mayor")
			}
		}
	}
*/
//Forma correcta!!!
	if(edad<13)
	{
		alert("Es niño");
	}
	else
	{
		if(edad>18)
		{
		alert("Es mayor");
		}
		else //Caso contrario a ambas condiciones ya mencionadas ...
		{
			alert("Es adolecente");
		}
	}
//Cuando hay 3 condicionales, dejar que el mas complejo se resuelva por descarte. 	



}//FIN DE LA FUNCIÓN