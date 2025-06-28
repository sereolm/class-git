//Ejercicio 1: Calcular estación del año
//Ejercicio 2: Hora del día

//Ejercicio1
// let mes= 9;
// let estacion;
// if(mes == 1 || mes == 2 || mes ==12){
//     estacion = "Verano";
// }
// else if(mes == 3 || mes == 4 || mes == 5){
//     estacion= "Otoño";
// }
// else if(mes == 6 || mes == 7 || mes == 8){
//     estacion= "Invierno";
// }
// else if(mes == 9 || mes == 10 || mes == 11){
//     estacion= "Primavera";
// }
// else{
//     estacion = "Valor incorrecto";
// }
// console.log("El valor corresponde a la estación de: "+estacion);

//Ejercicio2
// de 6 a 11 nos saluda: Good morning
// de 12 a 16 nos saluda:good afternoom
// de 17 a 19 nos saluda: good evening
// de 20 1 23 nos saluda: good nigth
// trabajaremos con 24 hs

// let horaDia = 7;
// let mensaje;
// if(horaDia>= 6 && horaDia<=11){
//     mensaje = "Good Morning";
// }
// else if(horaDia>= 12 && horaDia<=16){
//     mensaje = "Good Afternoom";
// }
// else if(horaDia>= 17 && horaDia<=19){
//     mensaje = "Good Evening";
// }
// else if(horaDia>= 20 && horaDia<=23){
//     mensaje = "Good Night";
// }
// else{
//     mensaje = "Valor incorrecto";
// }
// console.log(mensaje);

//Estructura swich(La sintaxis es igual a Java)
// switch(mes){//No solo pueden utilizar número, también cadenas
//     case 1: case 2: case 12:
//     estacion = "Verano";
//     break;
//     case 3: case 4: case 5:
//     estacion = "Otoño";
//     break;
//     case 6: case 7: case 8:
//     estacion = "Invierno";
//     break;
//     case 9: case 10: case 11:
//     estacion = "Primavera";
//     break;
//     default:
//         estacion = "Valor incorrecto";
// }
// console.log("Bienvenido a la estación de: "+estacion);

// //Ampliando el uso de var let y const
// */
// //Con var puedes resignar en cualquier momento
// //este forma parte del ambito global
// //un error es que se sobreescriba

// var nombre = 'Ariel';
// nombre = 'Osvaldo';
// console.log(nombre);

// function saludar() {
//     var nombre = 'Natalia';
//     console.log(nombre); // Aquí no lee el dato externo, usa el interno de la función
// }

// console.log(nombre); // Muestra 'Osvaldo'
// saludar();           // Muestra 'Natalia'

// if (true) {
//     var edad = 34;
//     console.log(edad);
// }

// console.log(edad); // En la función funcionó correctamente, en la estructura if no falló

// //const se ituliza para valores constantes que no pueden ser reasignadas

// const fechaNacimiento = 2006;
// console.log(fechaNacimiento);
//fechaNacimiento = 2003;
//console.log(fechaNacimiento); //solo se ejecuta el console anterior
//Let days =["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];

//function getDay(n)

//Evitar repetir tu codigo
//Dry don´t repeat yourself
let days = 5;
switch (days) {
  case 1:
    console.log('hoy es Lunes');
    break;
  case 2:
    console.log('hoy es Martes');
    break;
  case 3:
    console.log('hoy es Miercoles');
    break;
  case 4:
    console.log('hoy es Jueves');
    break;
  case 5:
    console.log('hoy es Viernes');
    break;
  case 6:
    console.log('hoy es Sábado');
    break;
    case 7:
    console.log('hoy es Domingo');
    break;
    default:
        console.log("Error en el ingreso del día de la semana")
}

console.log("Bienvenido a la estación de: "+estacion);


//Esta es la version mejorada

let days2 = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
function getDay(n){
    if(n < 1 || n > 7){
        throw new Error("out of range");
    }
    return days2[n-1];
}
console.log(getDay(3));

