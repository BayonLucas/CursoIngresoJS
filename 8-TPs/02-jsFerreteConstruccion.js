/*Bayón, Lucas*/

/*2.	Para el departamento de Construcción:
A.	mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largoDelTerreno;
    var anchoDelTerreno;
    var perimetro;
    var rectanguloDeAlambre;

    largoDelTerreno=document.getElementById('txtIdLargo').value;
    largoDelTerreno=parseInt(largoDelTerreno);

    anchoDelTerreno=document.getElementById('txtIdAncho').value;
    anchoDelTerreno=parseInt(anchoDelTerreno);

    perimetro=largoDelTerreno*2 + anchoDelTerreno*2;

    rectanguloDeAlambre=perimetro*3;

    alert("Usted necesita aproximadamente " + rectanguloDeAlambre + " mts de alambre.");

}
function Circulo () 
{
    var radioDelTerreno;
    var circuloDeAlambre;

    radioDelTerreno=document.getElementById('txtIdRadio').value;
    radioDelTerreno=parseInt(radioDelTerreno);

    circuloDeAlambre=radioDelTerreno*3;

    alert("Usted necesita aproximadamente " + circuloDeAlambre + " mts de alambre.");

}
function Materiales () 
{
    var largoDelTerreno;
    var anchoDelTerreno;

    largoDelTerreno=document.getElementById('txtIdLargo').value;
    largoDelTerreno=parseInt(largoDelTerreno);

    anchoDelTerreno=document.getElementById('txtIdAncho').value;
    anchoDelTerreno=parseInt(anchoDelTerreno);


}