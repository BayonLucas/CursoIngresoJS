/*Bayón, Lucas*/

/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

function Sumar () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var suma;

    precioUno=document.getElementById('txtIdPrecioUno').value;
    precioUno=parseInt(precioUno);
    
    precioDos=document.getElementById('txtIdPrecioDos').value;
    precioDos=parseInt(precioDos);

    precioTres=document.getElementById('txtIdPrecioTres').value;
    precioTres=parseInt(precioTres);

    suma=precioUno+precioDos+precioTres;
    suma=parseInt(suma);

    alert("Total: " + suma);
}

function Promedio () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var suma;
    var promedio;

    precioUno=document.getElementById('txtIdPrecioUno').value;
    precioUno=parseInt(precioUno);
    
    precioDos=document.getElementById('txtIdPrecioDos').value;
    precioDos=parseInt(precioDos);

    precioTres=document.getElementById('txtIdPrecioTres').value;
    precioTres=parseInt(precioTres);

    suma=precioUno+precioDos+precioTres;
    suma=parseInt(suma);

    promedio=suma/3;

    alert("Promedio: " + promedio);


}
function PrecioFinal () 
{
	var precioUno;
    var precioDos;
    var precioTres;
    var suma;
    var promedio;
    var iva;
    var precioFinal; 

    precioUno=document.getElementById('txtIdPrecioUno').value;
    precioUno=parseInt(precioUno);
    
    precioDos=document.getElementById('txtIdPrecioDos').value;
    precioDos=parseInt(precioDos);

    precioTres=document.getElementById('txtIdPrecioTres').value;
    precioTres=parseInt(precioTres);

    suma=precioUno+precioDos+precioTres;
    suma=parseInt(suma);

    promedio=suma/3;

    iva=0.21;

    precioFinal= suma+(suma*iva);

    alert("Su total + IVA: $" + precioFinal);
}