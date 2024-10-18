let array = [30, 5 , 6, 7, 21, 43,3]

function Maior(num){
    let maior = 0
    for(let i of array){
        if(i >= maior){
            maior = i
            
        }
    }
        return maior;
}
console.log(Maior(array));