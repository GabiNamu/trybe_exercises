let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array[0];

for(let i = 1; i < array.length; i += 1){
   if(array[i].length > maiorPalavra.length){
    maiorPalavra = array[i];
   }else{
    continue
   }
}

console.log(maiorPalavra);

let menorPalavra = array[0];

for(let i = 1; i < array.length; i += 1){
   if(array[i].length < menorPalavra.length){
      menorPalavra = array[i];
     }else{
      continue
     }
}

console.log(menorPalavra);
