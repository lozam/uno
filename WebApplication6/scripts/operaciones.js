function sumar(n1, n2){
    return n1 + n2;
}

(function () {
    var r = sumar(15, 20);
    alert(r);

    var obj = { x: 22, y: 44 }; //json
    //var obj = {resultado:0}; //json
       
    var args = [5, 23];

    var rr = sumar.apply(obj, args);
    var rrr = sumar.call(obj, 5, 23);

    alert("con apply: "+rr);
    alert("con call: " + rrr);

    //alert(obj.resultado);
})();