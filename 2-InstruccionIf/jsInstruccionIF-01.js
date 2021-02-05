/*Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita".*/

function mostrar()
{
	//tomo la edad 
	var edad
	
	edad=document.getElementById('txtIdEdad').nodeValue; //Ingresa el dato
	edad=parseInt(edad);
	console.log("La edad es: " + edad); //Sale dato
	
	if(edad == 15)
	{
		alert("niña bonita");
	}	
}//FIN DE LA FUNCIÓN