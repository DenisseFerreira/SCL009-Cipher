var cifrar=function(mipalabra,offset){ //la funcion recibe dos parametros llamados mipalabra y offset
  // console.log(mipalabra);

 var micifrado="";

   for (var i=0; i<mipalabra.length; i++){
     var x = (mipalabra[i].charCodeAt(0));//codigo ascii
         // console.log("x = " + x);
         //aqui tengo el cifrado que le corresponde a cada letra
         var minuevacasilla=parseInt(x)-65+parseInt(offset); 
         
        //console.log("es " +minuevacasilla);
       // % 26 + 65; 
        minuevacasilla=minuevacasilla%26;
       //  console.log("es " +minuevacasilla);
        minuevacasilla=minuevacasilla+65;
       //  console.log("es " +minuevacasilla);

         micifrado=micifrado + String.fromCharCode(minuevacasilla); //concateno cada letra cifrada con las anteriores
        // console.log (minuevacasilla);
        // console.log (String.fromCharCode(minuevacasilla)); 
 }
 
 console.log(micifrado);
 return micifrado;
}

var descifrar=function(mipalabra,offset){ 


  var midescifrado="";
 
  for (var i=0; i<mipalabra.length; i++){
    var x = (mipalabra[i].charCodeAt(0));
      
       var minuevacasilla=parseInt(x)-65     - parseInt(offset);       
     
       minuevacasilla=minuevacasilla%26;
       //console.log("es " + minuevacasilla);
 
       if(minuevacasilla<0){
         minuevacasilla = 91+minuevacasilla;
       }else{
         minuevacasilla=minuevacasilla+65;
       }
       
     
       midescifrado=midescifrado + String.fromCharCode(minuevacasilla); 
       //console.log(midescifrado);
      
 }
 
 console.log(midescifrado);
 return midescifrado;
 }
 
 
 