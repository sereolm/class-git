//Ejercicio para encontrar números pares e impares
let parInpar =10;
if(parInpar % 2 == 0){
    console.log("Es un número PAR");
}
else{
    console.log("Es un numero IMPAR");
}

//Ejercicio: es mayor de edad
let edad= 18, adulto =18;
if( edad >= adulto ){
	console.log('Usted es una persona adulta');
}
else{
	console.log('Usted es una persona menor de edad');
}

//Ejercicio: Dentro de un rango
let dentroRango = 10;//Aqui vamos a ir cambiando el valor
let valMin = 0, valMax =10;
if(dentroRango >= valMin && dentroRango<= valMax){
    console.log('Esta dentro del rango establecido') 
}
else{
    console.log('Esta fuera del rango establecido')
}

//Ejercicio: Si el padre puede asistir al juego de su hijo
let vacaciones = true, diaDescanso = false;
if(vacaciones || diaDescanso){
    console.log("El padre puede asistir al juego de su hijo")
}
else{
    console.log("El padre NO puede asistir al juego de su hijo")
}
//Operador ternario
let resultado2 = 3 > 2 ? "Verdadero":"Falso";
console.log(resultado2)

let numero = 12;
resultado2 = numero % 2 == 0 ? "Es un número PAR" : "Es un número IMPAR";
console.log(resultado2)

// Convertir String a Number
let miNumero = "21"; // Es una cadena
console.log(typeof miNumero); // string

let edad2 = Number(miNumero); // Esta es una función
console.log(typeof edad2);    // number

//Funcion isNaN
if(isNaN(edad2)){//No es un número = is not a number( devuelve un resultado booleano )
    console.log("La variable no contiene slo numero")
}
else{
    if(edad2 >= 18){
        console.log("Puede votar");
    }
    else{
        console.log("Es muy jóven para votar");
    }
}

//Operador ternario
let resultado3 = edad2 >= 18 ? "Puede votar" : "Es muy joven para votar";
console.log(resultado3);


