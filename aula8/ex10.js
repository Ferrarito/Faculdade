
let alunos = [
    { nome: "Ana", idade: 17 },
    { nome: "Carlos", idade: 19 },
    { nome: "Bruna", idade: 22 },
    { nome: "Diego", idade: 16 }
  ];
  
  
  function alunosMaior(alunos) {
    return alunos.filter(aluno => aluno.idade > 18);
  }
  
  
  const maioresDeIdade = alunosMaior(alunos);
  console.log(maioresDeIdade);
  