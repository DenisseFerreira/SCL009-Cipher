window.cipher = {
  encode: (mipalabra,offset) => {
    /* Acá va tu código */
    var micifrado="";
    for (var i=0; i<mipalabra.length; i++){
      if(mipalabra[i]==' '){
        micifrado=micifrado + mipalabra[i];
        continue;
      }
        var x = (mipalabra[i].charCodeAt(0));//codigo ascii
        var minuevacasilla=parseInt(x)-65+parseInt(offset); //aqui tengo el cifrado que le corresponde a cada letra
        minuevacasilla=minuevacasilla%26;   // % 26 + 65; 
        minuevacasilla=minuevacasilla+65;
        micifrado=micifrado + String.fromCharCode(minuevacasilla); //concateno cada letra cifrada con las anteriores
    }
   return micifrado;
  },

  decode: (mipalabra,offset) => {
    /* Acá va tu código */
    var midescifrado="";
    for (var i=0; i<mipalabra.length; i++){
      var x = (mipalabra[i].charCodeAt(0));
      var minuevacasilla=parseInt(x)-65 - parseInt(offset);       
      minuevacasilla=minuevacasilla%26;
      if(minuevacasilla<0){
         minuevacasilla = 91+minuevacasilla;
      }else{
         minuevacasilla=minuevacasilla+65;
      }
      midescifrado=midescifrado + String.fromCharCode(minuevacasilla); 
    }
    return midescifrado;
  }
};

