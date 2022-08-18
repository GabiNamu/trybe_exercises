const num1 = 7;
const num2 = 7;
const num3 = 2;

if(num1 > num2 && num1 > num3){
    console.log(num1 + " é o maior número")
}else if(num2 > num1 && num2 > num3){
    console.log(num2 + " é o maior número")
}else if(num3 > num1 && num3 > num2){
    console.log(num3 + " é o maior número")
}else {
    console.log("Existem números iguais")
}