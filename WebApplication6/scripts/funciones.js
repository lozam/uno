function hola1(msg) {
    alert(msg);
}

var hola2 = function (msg) {
    alert(msg);
}

hola1("1, Dime el numero 1");
hola2("2, Dime el numero 1");

//Hola2 = "hola don pepeito";
hola3 = hola2;

hola3("hola");

var pasar = function (objeto) {
    alert(objeto);
};

var recibir = function (pasado) {
    pasado("estoy llamando a una funcion desde otra");
};

recibir(pasar);