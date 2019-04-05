
var botoncifrar = document.getElementById("botoncifrar");
    botoncifrar.addEventListener('click',() => {
     let mitexto=document.getElementById("textoingresado").value;
     let mioffset=document.getElementById("offsetingresado").value;
     let miresultado=document.getElementById("textoresultado");
     miresultado.innerHTML= window.cipher.encode(mitexto,mioffset);
}
);


var botondescifrar = document.getElementById("botondescifrar");
    botondescifrar.addEventListener("click",() => {
    let mitexto=document.getElementById("textoingresado").value;
    let mioffset=document.getElementById("offsetingresado").value;
    let miresultado=document.getElementById("textoresultado");
    miresultado.innerHTML=window.cipher.decode(mitexto,mioffset);
}
); 
  