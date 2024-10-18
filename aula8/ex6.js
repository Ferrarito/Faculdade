let aluno = {
    "Nome" : "Guilherme",
    "Idade" : 18 ,
    "Curso" : "Engenharia da computação",
    "Matricula" : 247771,

    mostraInformaçoes : function(){
        return this.Nome + "\n" + this.Idade + "\n" + this.Curso + " \n" + this.Matricula
    }
};

console.log(aluno.mostraInformaçoes());
