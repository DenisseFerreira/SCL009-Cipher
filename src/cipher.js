window.cipher = {
  encode: (mipalabra,offset) => {
    /* Acá va tu código */
    var micifrado="";
    for (var i=0; i<mipalabra.length; i++){
      if(mipalabra[i]==' '){
        micifrado=micifrado + mipalabra[i];
        continue;
      }
      let  x = (mipalabra[i].charCodeAt(0));//codigo ascii
      // corresponde a mayuscula
      if( x >=65 && x <= 90){
        var minuevacasilla=parseInt(x)-65+parseInt(offset)%26 +65; //aqui tengo el cifrado que le corresponde a cada letra
        micifrado=micifrado + String.fromCharCode(minuevacasilla); //concateno cada letra cifrada con las anteriores
      }//cifrando miniscula
      else if (x >=97 && x <= 122){
        var minuevacasilla=parseInt(x)-97+parseInt(offset)%26 +97; //aqui tengo el cifrado que le corresponde a cada letra
        micifrado=micifrado + String.fromCharCode(minuevacasilla);
      }//cifrando numeros 
      else if (x >=48 && x <= 57){
        var minuevacasilla=parseInt(x)-48+parseInt(offset)%10 +48; //aqui tengo el cifrado que le corresponde a cada letra
        micifrado=micifrado + String.fromCharCode(minuevacasilla);
      }
    }
   return micifrado;
  },

  decode: (mipalabra,offset) => {
    /* Acá va tu código */
    var midescifrado="";
    for (var i=0; i<mipalabra.length; i++){
      if(mipalabra[i]==' '){
        midescifrado=midescifrado + mipalabra[i];
        continue;
      }
      var x = (mipalabra[i].charCodeAt(0));
      //mayuscula
      if( x >=65 && x <= 90){
        var minuevacasilla=parseInt(x)-65 - parseInt(offset);       
        minuevacasilla=minuevacasilla%26;
        if(minuevacasilla<0){
          minuevacasilla = 91+minuevacasilla;
        }else{
          minuevacasilla=minuevacasilla+65;
        }
        midescifrado=midescifrado + String.fromCharCode(minuevacasilla); 
      }//minuscula  
      else if (x >=97 && x <= 122){
        var minuevacasilla=parseInt(x)-97 - parseInt(offset);       
        minuevacasilla=minuevacasilla%26;
        if(minuevacasilla<0){
          minuevacasilla = 123+minuevacasilla;
        }else{
          minuevacasilla=minuevacasilla+97;
        }
        midescifrado=midescifrado + String.fromCharCode(minuevacasilla); 
      }//numeros
      else if (x >=48 && x <= 57){
        var minuevacasilla=parseInt(x)-48 - parseInt(offset);       
        minuevacasilla=minuevacasilla%10;
        if(minuevacasilla<0){
          minuevacasilla = 58+minuevacasilla;
        }else{
          minuevacasilla=minuevacasilla+48;
        }
        midescifrado=midescifrado + String.fromCharCode(minuevacasilla);
      }
    }
    return midescifrado;
  }
};
