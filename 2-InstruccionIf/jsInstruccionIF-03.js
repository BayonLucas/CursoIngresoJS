/*Bayón, Lucas/*

/*Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.*/

function mostrar()
{ /*
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
	/*if(edad>17){
		alert("Es mayor");
	}else{
		alert("Es menor");
	}*/

//}//FIN DE LA FUNCIÓN

//Hay un else para cada if
//else = Caso contratrio ..

//-------------------------Clase Repaso 13/02----------------------

//Bayón, Lucas

/*
2- con if
ingresar el nombre y los datos requeridos para calcular el IMC , e informar a la persona si es:
Bajo peso
Peso normal
Preobesidad
Obesidad I
Obesidad II
Obesidad III
*/

//IMC = Kg/m2

var peso;
var altura;
var imc;
var mensaje;

peso=prompt("Por favor,Ingrese su peso en Kg");
peso=parseFloat(peso);

altura=prompt("Por favor, Ingrese su altura en M");
altura=parseFloat(altura);

imc= peso/(altura*altura);

if(imc<18.6)
{
	mensaje="Bajo peso";
}
else
{
	if(imc<25)
	{
		mensaje="Peso normal";
	}
	else
	{
		if(imc<30)
		{
			mensaje="Preobesidad";
		}
		else
		{
			if(imc<35)
			{
				mensaje="Obesidad I";
			}
			else
			{
				if(imc<40)
				{
					mensaje="Obesidad II";
				}
				else
				{
					mensaje="Obesidad III";
				}
			}
		}
	}
}
console.log("Peso: "+peso+"Kg. Altura: "+altura+"m. IMC: "+imc+". Diagnostico: "+mensaje);
alert("Diagnostico: "+mensaje);
}