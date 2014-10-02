var arrayAlumnos = [];

function guardaAlumno() {
    var nombre = document.getElementById("nombre").value;
    var nota = document.getElementById("nota").value;
    var edad = document.getElementById("edad").value;

    arrayAlumnos.push(new Alumno(nombre, nota, edad));

    mostrarLista();
    limpiaCampos();
}

function Alumno(nombre, nota, edad){
    this.nombre = nombre || "señor x";
    this.nota = nota || "5";
    this.edad = edad || "sin edad";

    this.escribir = function () {
        return(this.nombre + " " + this.nota + " " + this.edad);
    }
}

function mostrarLista() {
    document.getElementById("listado").innerHTML = "";
    for (var i = 0; i < arrayAlumnos.length; i++) {
        var alumno = arrayAlumnos[i].nombre;

        document.getElementById("listado").innerHTML += "<li>" + alumno + "</li>";
    }
    
}

function limpiaCampos() {
    document.getElementById("nombre").value = "";
    document.getElementById("nota").value = "";
    document.getElementById("edad").value = "";
}

function buscador() {
    var aBuscar = document.getElementById("aBuscar").value;

    for (var i = 0; i < arrayAlumnos.length; i++) {
        if (aBuscar == arrayAlumnos[i].nombre) {
            var alumno = arrayAlumnos[i].escribir();
            document.getElementById("salidaTxt").innerHTML += "* " + alumno + "<br />";
            //document.getElementById("salidaTxt").innerHTML += "* Nombre: " + arrayAlumnos[i].nombre +", Nota: "+arrayAlumnos[i].nota +", Edad: "+arrayAlumnos[i].edad + "<br />";
        } else {
            
        }
    }
}

function notamedia() {
    notas = 0;
    for (var i = 0; i < arrayAlumnos.length; i++) {
        notas +=  parseInt(arrayAlumnos[i].nota);
    }
    alert (notas / arrayAlumnos.length);
}