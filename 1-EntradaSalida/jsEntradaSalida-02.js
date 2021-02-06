/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombre;
	nombre = prompt("ingrese su nombre, natalia natalia")
	apellido = prompt("ingrese su apellido, perez perez")
	alert(" su nombre es : " + nombre + " y su apellido es : " + apellido);
}

/*
El prompt siempre usa un "=". Síno, no funciona.
es una herramienta para tomar un dato ingresado por el usuario
