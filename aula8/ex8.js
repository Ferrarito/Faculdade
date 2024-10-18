let produto = {
    "Nome" : "Morango",
    "preço" : 14 ,
    "quantidade" : 5 ,

    calcularTotal : function(){
        return this.preço * this.quantidade;
    }


}

console.log(produto.calcularTotal());