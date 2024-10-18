function ePalindromo(str) {
    
    const limpaStr = str.replace(/\s+/g, '').toLowerCase();
  
    
    const invertida = limpaStr.split('').reverse().join('');
  
    
    return limpaStr === invertida;
  }
  
  
  console.log(ePalindromo("arara"));
  console.log(ePalindromo("Ana")); 
  console.log(ePalindromo("Ermes Trismegisto")); 
  console.log(ePalindromo("palindromo"));
  