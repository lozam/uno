var array1 = [];

do {
    var numerito = prompt("escribe un munero");
    if (!isNaN(numerito)) {
        array1.push(parseInt(numerito));
    } else {
        break;
    }

} while (!isNaN(numerito));

function suma() {
    var sum = 0;
    for (i = 0; i < array1.length; i++) {
         sum += array1[i];
    }
    return sum;
}

function media() {
    var med = 0;
    med = suma(array1) / array1.length;

    objmedia = { "media": med };

    return med;
}

alert("la suma es: " + suma());
alert("la media es: " + media());
document.write();




//(function () {
//    for (i = 0; i < array1.length; i++) {
//        suma += array1[i];
//    }
//    media = suma / array1.length;
//    obj = { "media": media };
//})();
/*
1.- funcion que retorna la suma de valores del array.
2.- devuelve la media del array y lo guarda en un tracer objeto.
3.- pasar el objeto con la media a una funcion y que la saque por pantalla
*/