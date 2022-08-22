let maiorNumeroPrimo = 0;

for(let i = 2; i <= 50; i += 1){
    if(i % 10 !== 0 && i > maiorNumeroPrimo){
       maiorNumeroPrimo = i;
    }else{
        continue
    }
}

console.log(maiorNumeroPrimo);