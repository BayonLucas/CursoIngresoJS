function mostrar()
{
	var edad;
	
	edad=document.getElementById('txtIdEdad').value; 
	edad=parseInt(edad);

	if(!(edad<18 && edad>12)){ //Para negar algo hay q poner un signo ! dentro de su propio ()
		alert("No es adolecente");
	}

}//FIN DE LA FUNCIÓN

/* && = "y" logico ... Cumplir ambas condiciones
   || = "o" logico ... Cumple una de dos condiciones
    ! = Negación de una condicion */	