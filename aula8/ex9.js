let endereco = {
    rua: "Rua das Flores",
    numero: 835,
    bairro: "Centro",
    cidade: "Itu"
  };
  
  
  for (let propriedade in endereco) {
    console.log(`${propriedade}: ${endereco[propriedade]}`);
  }
  
