/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
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
