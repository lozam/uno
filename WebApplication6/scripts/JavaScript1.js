var array1 = new Array(4);
var array2 = [];
var array3 = [1, 2, 6, 8, 7];

array2[0] = "Pepe";
array1[0] = "Eva";

array3 = array3.concat(array2);
array3.push("hola don Pepito");

array3.splice(2,0, "adios", "don", "jose");

for (i = 0; i < array3.length; i++){
    document.write(array3[i] + "<br />");
}
alert(i);

var hola = function (msg) {
    alert('Hola ' + msg);
};

hola('Mundo');