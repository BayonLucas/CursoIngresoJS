/*Al ingresar una edad debemos informar solo si la persona es mayor de edad*/
function mostrar()
{
	//tomo la edad  
	var edad
	
	edad=document.getElementById('txtIdEdad').value; 
	edad=parseInt(edad);
	console.log("La edad es: " + edad); 
	
	if(edad > 17)
	{
		alert("Es mayor");
	}	

}//FIN DE LA FUNCIÓN