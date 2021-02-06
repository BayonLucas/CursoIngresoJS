/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
/*
function SacarResto()
{
	var dividendo
	var divisor
	var	resto

	//dividendo=26; txtIdNumeroDividendo
	//divisor=5; txtIdNumeroDivisor
	dividendo=document.getElementById('txtIdNumeroDividendo').value;
	divisor=document.getElementById('txtIdNumeroDivisor').value;

	resto= dividendo%divisor; //Sirve para tomar resto y encontrar un numero primo o para saber si lo és.
	console.log(resto);

	alert("El resto es: " + resto);


}
*/

/*Bayón, Lucas - Div E*/

/*Clase de Apoyo - Ej.3 - Ingresar dos numeros por id
Se pide:
mostrar por console.log:
a) La suma de los dos numeros
b) El promedio de los numeros.
c) El modulo de los numeros (el primero en modulo del segundo)*/

function SacarResto()
{
	var numeroUno;
	var numeroDos;
	var suma;
	var promedio;	
	var	resto;

	numeroUno=document.getElementById('txtIdNumeroDividendo').value;
	numeroUno=parseInt(numeroUno);
	numeroDos=document.getElementById('txtIdNumeroDivisor').value;
	numeroDos=parseInt(numeroDos);

	suma= numeroUno+numeroDos; 
	console.log("La suma de los dos numero es: "+suma);

	promedio= suma/2; 
	console.log("El promedio entre los dos numeros es: "+promedio);

	resto= numeroUno%numeroDos; 
	console.log("El modulo de los numeros es:" + resto);

}