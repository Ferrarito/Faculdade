function contarVogais(texto) {
    let vogais = "aeiou"; 

    let contador = 0;
    
    for (let i = 0; i < texto.length; i++) {

      if (vogais.includes(texto[i])) { 

        contador++;
      }
    }
    
    return contador; 
  }
  

  console.log(contarVogais("javascript")); 
  
  
  console.log(contarVogais("programacao"));  
  