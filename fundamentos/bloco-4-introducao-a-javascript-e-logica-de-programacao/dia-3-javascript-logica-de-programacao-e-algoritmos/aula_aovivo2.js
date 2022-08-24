// Crie um algoritmo que conte
// quantos números do intervalo
// entre 2 e 150 são divisíveis
// por 3.
// Caso a quantidade seja igual
// a 50, exiba uma mensagem
// secreta.
let count = 0;

for (let i = 2; i <= 150; i += 1){
    if(i % 3 === 0){
        count += 1;
    }else{
        continue
    }
}

if(count === 50){
    console.log("São 50 números, mas não conta pra niguém!");
}