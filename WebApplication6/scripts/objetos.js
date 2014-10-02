var obj = new Object;
obj.nombre = "luis";
obj.apellido = "gil";

var obj2 = { nombre: "luis", apeellido: "gil" };

var obj3 = {};
obj3.nombre = "luis";
obj3.apellido = "gil";

function Persona(nombre, apellido) {
    this.nombre = nombre || "";
    this.apellido = apellido || "";
    this.escribir = function () {
        alert(this.nombre+ " "+ this.apellido);
    }
}
var p = new Persona("luis", "gil");
var p2 = new Persona();
var p3 = new Persona(undefined, "gil");

p3.escribir();

String.prototype.dimeAlgo = function () {
    return "Algo";
}
String.prototype.toJSON = function () {
    return "JSON";
}
var hola = "";
alert(hola.dimeAlgo());
alert(hola.toJSON());
//-----------------------------------------------------
var hola = "";

alert(hola.toJSON());

Estudiante.prototype = new Persona;
Estudiante.constructor = Estudiante;

function Estudiante(nombre, apellido, curso) {
    this.nombre = nombre
    this.apellido = apellido;
    this.curso = curso;
}

Estudiante.prototype.escribir = function (){
    alert(this.nombre + " " + this.apellido + " " + this.curso);
};

var e = new Estudiante("Luis", "Gil", "C#");
alert(e instanceof Persona);
e.escribir();