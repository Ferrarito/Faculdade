let array= [1,2,3,4,5,6,7,8,9,10];
function impar(arr){
    let im = 0;
    for(let i of array){
        if(i % 2 !== 0){
          im = i;
          console.log(i);
          
        }

    }

    
}
let resultado = impar(array);
console.log(resultado);

