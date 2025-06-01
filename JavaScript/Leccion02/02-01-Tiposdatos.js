//Tipos de Datos en JavaScript
/*
La sintaxis en lo que es comentarios
es muy similar a la de Java
realmente diriamos que es identica
*/
//Tipo Str
var nombre = 'Ariel';
console.log(typeof nombre);
nombre = 7;
console.log(typeof nombre)
nombre = 12.3;
console.log(typeof nombre)

//Tipo numérico
var numero = 3000;
console.log(numero);
//Tipo object
var objeto = {
nombre: "Ariel",
apellido: "Betancud",
telefono: "2615362712"
}

console.log(typeof objeto);

//Tipo de dato boolean
var bandera = true;
console.log(bandera);
//Tipo de dato funcion 
function miFuncion(){}
console.log(typeof miFuncion);

//Tipo de dato symbol
var simbolo = Symbol("Mi simbolo");
console.log(typeof simbolo);

//Tipo de dato clase
class Persona{
	contructor(nombre,apellido){
		this.nombre = nombre;
		this.apellido = apellido;
	}
}
console.log(typeof Persona);