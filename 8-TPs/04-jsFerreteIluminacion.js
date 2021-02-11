/*Bayón, Lucas*/

/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
 */

function CalcularPrecio () 
{
 	var cantidadDeLamparas;
    var precioTotal;
    var marca;
    var porcentaje;
    var precioConDescuento;
    var impuestoIIBB
    var totalConImpuesto;

    cantidadDeLamparas=document.getElementById('txtIdCantidad').value;
    cantidadDeLamparas=parseInt(cantidadDeLamparas);
    console.log(cantidadDeLamparas);

    precioTotal=cantidadDeLamparas*35;

    marca=(document.getElementById('Marca').value);

/*
//Punto A 
    if(cantidadDeLamparas>5)
    {
        porcentaje=50;
    }
    else
    {
       porcentaje=0;
    }

//Punto B
    if(cantidadDeLamparas==5)
    {
        if(marca=="ArgentinaLuz")
        {
            porcentaje=40;
        }
        else
        {
            porcentaje=30;
        }
    }

//Punto C
    if (cantidadDeLamparas==4)
    {
        if(!(marca=="ArgentinaLuz")||(marca==("FelipeLamparas")))
        {
            porcentaje=20;
        }
        else
        {
            porcentaje=25;
        }
    }

//Punto D
/*
    if(cantidadDeLamparas==3)
    {
        if(marca=="ArgentinaLuz")
        {
            porcentaje=15
            if(marca=="FelipeLamparas")
            {
            porcentaje=10
            }
        }
        else
            {
                porcentaje=5
            }
    }
*/
//Punto E
//Estoy repreguntando mucho

//Nuevo intento
if(cantidadDeLamparas>5)
{
    porcentaje=50;
}
else
{
    if(cantidadDeLamparas==5)
    {
        if(marca=="ArgentinaLuz")
        {
            porcentaje=40;
        }
        else
        {
            porcentaje=30;
        }
    }
    else
    {
        if (cantidadDeLamparas==4)
        {
            if(!(marca=="ArgentinaLuz")||(marca==("FelipeLamparas")))
            {
                porcentaje=20;
            }
            else
            {
                porcentaje=25;
            }
        }
        else
        {
            if(cantidadDeLamparas==3)
            {   
                if(marca=="ArgentinaLuz")
                {
                    porcentaje=15;
                }
                if(marca=="FelipeLamparas")
                {       
                  porcentaje=10;
                }
                else
                {
                    porcentaje=5;
                }      
            }
            else
            {
                porcentaje=0;
            }
        }   
    }
}
//El final    
    console.log("Marca: "+marca+". Precio = $"+precioTotal+". Descuento: "+porcentaje+"%.");
    precioConDescuento=precioTotal-(precioTotal*porcentaje/100);
    document.getElementById('txtIdprecioDescuento').value=precioConDescuento;
    
    
    impuestoIIBB=precioConDescuento*10/100;

    totalConImpuesto=precioConDescuento+impuestoIIBB;


    if(precioConDescuento>120);
    {
        alert("IIBB - Usted pago: $"+totalConImpuesto+", siendo $"+impuestoIIBB+" el impuesto que se pagó");
    }
}




