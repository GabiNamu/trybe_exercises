let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//requisito 1
for(let num of numbers){
    console.log(num);
}

//requisito 2
let soma = 0;
for (let i=0; i < numbers.length; i += 1){
    soma = soma + numbers[i];
}
console.log(soma);

//requisito 3
let media = soma / numbers.length;
console.log(media);

//requisito 4
if (media > 20){
    console.log("Valor maior que 20");
}else{
    console.log("Valor menor ou igual a 20");
}

//requisito 5
let maiorNumero = numbers[0];
for (let i=1; i < numbers.length; i += 1){
    if(numbers[i] > maiorNumero){
        maiorNumero = numbers[i];
    }else{
        continue
    }
    console.log(maiorNumero);
}

//requisito 6
let counter = 0;
for (let i = 0; i < numbers.length; i += 1){
    if (numbers[i] % 2 !== 0){
        counter = counter + 1;
    }else{
        continue;
    }
}


if (counter > 0){
    console.log(counter)
}else{
    console.log("nenhum valor ímpar encontrado");
}

//requisito 7 
let menorNumero = numbers[0];
for (let i=1; i < numbers.length; i += 1){
    if(numbers[i] < menorNumero){
        menorNumero = numbers[i];
    }else{
        continue
    }
    console.log(menorNumero);
}

//requisito 8
let nova = [];
for (let index = 1; index <= 25; index += 1){
    nova.push(index);
    
}
console.log(nova);

//requisito 9
for (let i=0; i<nova.length; i+=1){
    console.log(nova[i] / 2);
}

