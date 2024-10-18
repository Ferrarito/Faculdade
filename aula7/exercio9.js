function validarEmail(email) {
    
    const possuiArroba = email.indexOf('@') !== -1 && email.indexOf('@') === email.lastIndexOf('@');
    
    
    const parteDominio = email.split('@')[1]; 
    const possuiPontoDepoisArroba = parteDominio && parteDominio.includes('.');
  
    return possuiArroba && possuiPontoDepoisArroba; 
  }
  
  
  console.log(validarEmail("Facens@gmail.com")); 

  console.log(validarEmail("cod@duty")); 

  console.log(validarEmail("falha@@hotmail.com")); 

  console.log(validarEmail("naoebom@pepino.c")); 
  