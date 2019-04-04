var llamarcifrar=function(){
    console.log("Dentro de boton cifrar");
    let mitexto=document.getElementById("textoingresado").value;
    //mitexto.toUpperCase();
    console.log(mitexto);

    let mioffset=document.getElementById("offsetingresado").value;
    console.log(mioffset);

    let miresultado=document.getElementById("textoresultado");
    miresultado.innerHTML=cifrar(mitexto,mioffset);
}


var llamardescifrar=function(){
console.log("Dentro de boton descifrar");

let mitexto=document.getElementById("textoingresado").value;
//mitexto.toUpperCase();
console.log(mitexto);

let mioffset=document.getElementById("offsetingresado").value;
console.log(mioffset);

let miresultado=document.getElementById("textoresultado");
miresultado.innerHTML=descifrar(mitexto,mioffset);

}