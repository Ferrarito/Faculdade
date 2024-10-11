function validarEmail(email) {
    
    const possuiArroba = email.indexOf('@') !== -1 && email.indexOf('@') === email.lastIndexOf('@');
    
    
    const parteDominio = email.split('@')[1]; 
    const possuiPontoDepoisArroba = parteDominio && parteDominio.includes('.');
  
    return possuiArroba && possuiPontoDepoisArroba; 
  }
  
  
  console.log(validarEmail("teste@examplo.com")); 

  console.log(validarEmail("teste@exemplo")); 

  console.log(validarEmail("teste@@examplo.com")); 

  console.log(validarEmail("teste@examplo.c")); 
  