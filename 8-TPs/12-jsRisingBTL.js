//Bayón, Lucas - Div. E

/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */

function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada;
 	var sexoIngresado;
	var mensajeGenero;
 	var estadoCivilIngresado;
	var mensajeEstadoCivil;
	var sueldo;
	var legajo;
	var nacionalidadIngresada;
	var mensajeNacionalidad;

//A: Edad, entre 18 y 90 años inclusive.
	edadIngresada=prompt("Ingrese su edad");
	edadIngresada=parseInt(edadIngresada);	

while(edadIngresada<18||edadIngresada>90)
{
	edadIngresada=prompt("Por favor, Vuelva a ingresar su edad");
}

//B: Sexo, “M” para masculino y “F” para femenino
sexoIngresado=prompt("Ingrese su sexo");

while(sexoIngresado!='F'&&sexoIngresado!='M')
	{
		sexoIngresado=prompt("Error. Por favor, ingrese F ó M");
	}
switch(sexoIngresado)
{
	case"F":
		mensajeGenero="Femenino";
		break;
	case"M":
		mensajeGenero="Masculino";
		break;
}

//C: Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos.	
estadoCivilIngresado=prompt("Ingrese su estado civil. 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
while(estadoCivilIngresado<1||estadoCivilIngresado>4)
{
	estadoCivilIngresado=prompt("Su estado civil no es valido. 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
}
switch(estadoCivilIngresado)
{
	case"1":
		mensajeEstadoCivil="Soltero";
		break;
	case"2":
	mensajeEstadoCivil="Casado";
		break;	
	case"3":
	mensajeEstadoCivil="Divorciado";
		break;
	case"4":
	mensajeEstadoCivil="Viudo";
		break;
}

//D: Sueldo bruto, no menor a 8000.
sueldo=prompt("Ingrese su sueldo neto");
sueldo=parseFloat(sueldo);

while(sueldo<8000)
{
	sueldo=prompt("Por favor, Vuelva a ingresar su sueldo neto");
}

//E: Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
legajo=prompt("Ingrese su Nro. de Legajo, sin ceros a la izquierda.");
legajo=parseInt(legajo);

while(legajo<1000||legajo>9999)
{
	legajo=prompt("Por favor, vuelva a ingresar su Nro. de legajo, sin ceros a la izquierda");
}

//F: Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
nacionalidadIngresada=prompt("Ingrese su nacionalidad. “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");

while(nacionalidadIngresada!="A"&&nacionalidadIngresada!="E"&&nacionalidadIngresada!="N")
{
	nacionalidadIngresada=prompt("Por favor, Vuelva a ingresar su nacionalidad. “A” para argentinos, “E” para extranjeros, “N” para nacionalizados");
}
switch(nacionalidadIngresada)
{
	case"A":
		mensajeNacionalidad="Argentino/a";
		break;
	case"E":
		mensajeNacionalidad="Extranjero/a";
		break;
	case"N":
		mensajeNacionalidad="Nacionalizado/a";
		break;
}

//Datos en Pantalla
txtIdEdad.value=edadIngresada;
txtIdSexo.value=mensajeGenero;
txtIdEstadoCivil.value=mensajeEstadoCivil;
txtIdSueldo.value="$"+sueldo;
txtIdLegajo.value="#"+legajo;
txtIdNacionalidad.value=mensajeNacionalidad;
}
