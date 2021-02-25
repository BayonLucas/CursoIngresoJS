//Bayón Lucas

/*Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 1 y 100 (validar),
la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) La marca del producto más pesado
c) La cantidad de productos que se conservan a menos de 0 grados.
d) El promedio del peso de todos los productos.
f) El peso máximo y el mínimo.*/

function mostrar()
{
    var marcaIngresada;
    var pesoIngresado;
    var temperaturaIngresada;
    var respuesta;

    respuesta="si";

    while(respuesta=="si")
    {
        marcaIngresada=prompt("Ingrese la marca del producto");
        while(isNaN(marcaIngresada)==false)
        {
            marcaIngresada=prompt("La marca no pueden ser solo números");
        }
        pesoIngresado=prompt("Ingrese el peso del producto");
        while(isNaN(pesoIngresado)==true || pesoIngresado<1 || pesoIngresado<100)
        {
            pesoIngresado=prompt("");
        }
        temperaturaIngresada=prompt("Ingrese la temperatura del producto");
        respuesta=prompt("Desea agregar otro más?");
    }


}









}
