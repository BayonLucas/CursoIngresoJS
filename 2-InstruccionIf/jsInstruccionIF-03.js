/*Bayón, Lucas/*

/*Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.*/

function mostrar()
{ 
	var edad;
	
	edad=document.getElementById('txtIdEdad').value; 
	edad=parseInt(edad);
	/*
	if(edad<18){
		alert("Es menor");
	}
	if(edad>17){
		alert("Es mayor");
	}
	*/
	if(edad>17){
		alert("Es mayor");
	}else{
		alert("Es menor");
	}

}//FIN DE LA FUNCIÓN

//Hay un else para cada if
//else = Caso contratrio ..