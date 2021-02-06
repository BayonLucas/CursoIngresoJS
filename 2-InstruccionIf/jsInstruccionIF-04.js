/*Bayón, Lucas*/

/*Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) .
*/

function mostrar()
{
	var edad;
	
	edad=document.getElementById('txtIdEdad').value; 
	edad=parseInt(edad);

	/*if(edad>12){
		if(edad<18){
			alert("Es adolecente");
		}
	}*/
	
	if(edad<18 && edad>12){
		alert("Es adolecente");
	}

}//FIN DE LA FUNCIÓN