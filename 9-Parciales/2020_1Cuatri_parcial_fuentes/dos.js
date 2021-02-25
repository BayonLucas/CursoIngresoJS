//Bayón, Lucas

/*Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro*/
/*
function mostrar()
{
  var tipoIngresado;
  var cantidadIngresada;
  var precioIngresado;
  var respuesta;
  var porcentaje;
  var descuento;
  var cantidadAcumulada;
  var precioAcumulado;

  respuesta='si';
  cantidadAcumulada=0;
  precioIngresado=0;



  while(respuesta=="si")
  {
    tipoIngresado=prompt("Ingrese el material que desee. (arena, cal o cemento)");
    while(isNaN(tipoIngresado)==false || tipoIngresado!="arena" && tipoIngresado!="cal" && tipoIngresado!="cemento")
    {
      tipoIngresado=prompt("Por favor, ingrese si es 'arena','cal' o 'cemento'. Evite otro caracter.");
    }
    cantidadIngresada=prompt("Ingrese la cantidad deseada mayor a 0.");
    while(isNaN(cantidadIngresada)==true || cantidadIngresada<1)
    {
      cantidadIngresada=prompt("Por favor, vuelva a ingresar una cantidad mayor a 0.");
    }
    cantidadIngresada=parseInt(cantidadIngresada);
    precioIngresado=prompt("Ingrese un precio mayor a 0.");
    while(isNaN(precioIngresado)==true || precioIngresado<0)
    {
      precioIngresado=prompt("Por favor, vuelva a ingresar un precio mayor a 0.");
    }
    precioIngresado=parseFloat(precioIngresado);
    console.log("Bolsa de: "+tipoIngresado+". Cantidad: "+cantidadIngresada+". Precio: $"+precioIngresado);
    respuesta=prompt("Desea agregar más?");
    while(isNaN(respuesta)==false || respuesta!='si' && respuesta!='no')
    {
      respuesta=prompt("Por favor, ingrese 'si' o 'no'.");
    }
    cantidadAcumulada=cantidadAcumulada+cantidadIngresada;
    precioAcumulado=precioAcumulado+precioIngresado;
  }  

  descuento=porcentaje/100;
  if(cantidadAcumulada>10)
  {
    porcentaje=15;
  }
  else
  {
    porcentaje=25;
  }
  alert("El importe bruto es de $"+precioAcumulado);
  alert("Compró "+cantidadAcumulada+" de bolsas, por ende le corresponde un descuento del "+descuento+"%, siendo su importe a pagar: "+precioAcumulado*descuento);
}*/


function mostrar()
{
  var respuesta;
  var tipoIngresado;
  var cantidadIngresada;
  var precioIngresado;
  var precioBruto;
  var acumuladorPrecioBruto;
  var acumuladorCantidadTotal;
  var porcentaje;
  var descuento;
  var precioConDescuento;
  var acumuladorCantidadArena;
  var acumuladorCantidadCal;
  var acumuladorCantidadCemento;
  var tipoConMasCantidad;
  var flagMasCaro;
  var precioMax;
  var tipoMasCaro;


  respuesta = "si";
  precioBruto=0;
  acumuladorPrecioBruto=0;
  acumuladorCantidadArena=0;
  acumuladorCantidadCal=0;
  acumuladorCantidadCemento=0;
  flagMasCaro=0;

  while(respuesta=="si") 
  {
    tipoIngresado=prompt("Ingrese el tipo. (arena, cal o cemento).")
    while(isNaN(tipoIngresado)==false || tipoIngresado!="arena" && tipoIngresado!="cal" && tipoIngresado!="cemento")
    {
      tipoIngresado=prompt("Error!. Ingrese arena, cal o cemento.");
    }  
    cantidadIngresada=prompt("Ingrese la cantidad.");
    while(isNaN(cantidadIngresada)==true || cantidadIngresada<0)
    {
      cantidadIngresada=prompt("Error!. Ingrese valores numericos positivos.")
    }
    cantidadIngresada=parseInt(cantidadIngresada);
    precioIngresado=prompt("Ingrese el precio.");
    while(isNaN(precioIngresado)==true || precioIngresado<0)
    {
      precioIngresado=prompt("Error!. Ingrese valores numericos positivos.")
    }
    precioIngresado=parseInt(precioIngresado);
    precioBruto=cantidadIngresada*precioIngresado;
    acumuladorPrecioBruto=acumuladorPrecioBruto+precioBruto;
    acumuladorCantidadTotal=acumuladorCantidadTotal+cantidadIngresada;

    respuesta=prompt("Desea agregar otro más?.");
    if(flagMasCaro==0)
    {
      precioMax=precioIngresado;
      tipoMasCaro=tipoIngresado;
      flagMasCaro=flagMasCaro+1;
    }
    else
    {
      if(precioMax<precioIngresado)
      {
        precioMax=precioIngresado;
        tipoMasCaro=tipoIngresado;
      }
    }
    switch(tipoIngresado)
    {
      case"arena":
        acumuladorCantidadArena=acumuladorCantidadArena+cantidadIngresada;
        break;
      case"cal":
        acumuladorCantidadCal=acumuladorCantidadCal+cantidadIngresada;
        break;
      case"cemento":
        acumuladorCantidadCemento=acumuladorCantidadCemento+cantidadIngresada;
    }
  }//Fin while

  //A:
  console.log("El precio total bruto a pagar es: "+acumuladorPrecioBruto);
  //B:
  if(acumuladorCantidadTotal>10)
  {
    if(acumuladorCantidadTotal<30)
    {
      porcentaje=15;
    }
    else
    {
      porcentaje=25;
    }
  }
  descuento=acumuladorPrecioBruto*porcentaje/100;
  precioConDescuento=acumuladorPrecioBruto-descuento;
  console.log("El importe total con el descuento es de: $"+precioConDescuento);
  
//C:
  if(acumuladorCantidadArena>acumuladorCantidadCal&&acumuladorCantidadArena>acumuladorCantidadCemento)
  {
    tipoConMasCantidad="Arena";
  }
  else
  {
    if(acumuladorCantidadCal>acumuladorCantidadCemento)
    {
      tipoConMasCantidad="Cal";
    }
    else
    {
      tipoConMasCantidad="Cemento";
    }
  }
  //D:
  console.log("El tipo con más cantidad de bolsas es: "+tipoConMasCantidad);
  //E:
  console.log("El tipo mas caro es: $" + tipoMasCaro);
}