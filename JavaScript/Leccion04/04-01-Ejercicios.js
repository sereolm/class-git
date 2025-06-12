//Ejercicio 1: Calcular estación del año
//Ejercicio 2: Hora del día

//Ejercicio1
let mes= 9;
let estacion;
if(mes == 1 || mes == 2 || mes ==12){
    estacion = "Verano";
}
else if(mes == 3 || mes == 4 || mes == 5){
    estacion= "Otoño";
}
else if(mes == 6 || mes == 7 || mes == 8){
    estacion= "Invierno";
}
else if(mes == 9 || mes == 10 || mes == 11){
    estacion= "Primavera";
}
else{
    estacion = "Valor incorrecto";
}
console.log("El valor corresponde a la estación de: "+estacion);

//Ejercicio2
//de 6 a 11 nos saluda: Good morning
//de 12 a 16 nos saluda:good afternoom
//de 17 a 19 nos saluda: good evening
//de 20 1 23 nos saluda: good nigth
//trabajaremos con 24 hs

let horaDia = 7;
let mensaje;
if(horaDia>= 6 && horaDia<=11){
    mensaje = "Good Morning";
}
else if(horaDia>= 12 && horaDia<=16){
    mensaje = "Good Afternoom";
}
else if(horaDia>= 17 && horaDia<=19){
    mensaje = "Good Evening";
}
else if(horaDia>= 20 && horaDia<=23){
    mensaje = "Good Night";
}
else{
    mensaje = "Valor incorrecto";
}
console.log(mensaje);

//Estructura swich(La sintaxis es igual a Java)
switch(mes){//No solo pueden utilizar número, también cadenas
    case 1: case 2: case 12:
    estacion = "Verano";
    break;
    case 3: case 4: case 5:
    estacion = "Otoño";
    break;
    case 6: case 7: case 8:
    estacion = "Invierno";
    break;
    case 9: case 10: case 11:
    estacion = "Primavera";
    break;
    default:
        estacion = "Valor incorrecto";
}
console.log("Bienvenido a la estación de: "+estacion);