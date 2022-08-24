function operacoes (a, b) {
    let soma = a + b;
    let subtracao = a - b;
    let multiplicacao = a * b;
    let divisao = a / b;
    let modulo = a % b;

    console.log(soma, subtracao, multiplicacao, divisao, modulo);
}

operacoes(2, 4);

function numeroMaior(num1, num2){
    if (num1 > num2){
        console.log(num1 + " é maior que " + num2);
    }else if (num2 > num1){
        console.log(num2 + " é maior que " + num1);
    }else{
        console.log("Os números são iguais");
    }
} 

numeroMaior(10, 20);


function maiorDosNumeros(n1, n2, n3){
    if(n1 > n2 && n1 > n3){
        console.log(n1 + " é o maior número")
    }else if(n2 > n1 && n2 > n3){
        console.log(n2 + " é o maior número")
    }else if(n3 > n1 && n3 > n2){
        console.log(n3 + " é o maior número")
    }else {
        console.log("Existem números iguais")
    }
}

maiorDosNumeros(5, 10, 15);

function itsTrue (param1){
    if(param1 === true){
        console.log("positive");
    }else if(param1 === false){
        console.log("negative")
    }else{
        console.log("zero")
    }
}

itsTrue(false);

function anguloTriangulo (ang1, ang2, ang3){
    if (ang1 + ang2 + ang3 == 180){
        console.log("true")
    }else if(ang1 + ang2 + ang3 != 180){
        console.log("false")
    }else if(ang1 < 0 || ang2 <0 || ang3 < 0 ){
        console.log("Erro") 
    }
}

anguloTriangulo (30, 60, 90);
