let salarioBruto = 7000;
let salarioInss = 0;
let salarioLiquido = 0;


if(salarioBruto <= 1556.94){
    salarioInss = salarioBruto - (salarioBruto * 0.08);
}else if(salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    salarioInss = salarioBruto - (salarioBruto * 0.09);
}else if(salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
    salarioInss = salarioBruto - (salarioBruto * 0.11);
}else if(salarioBruto > 5189.82){
    salarioInss = salarioBruto - 570.88
}

if(salarioInss >= 1903.99 && salarioInss <= 2826.65){
    salarioLiquido = salarioInss - ((salarioInss * 0.075) - 142.80);
}else if(salarioInss >= 2826.66 && salarioInss <= 3751.05){
    salarioLiquido = salarioInss - ((salarioInss * 0.15) - 354.80);
}else if(salarioInss >=  3751.06 && salarioInss <= 4664.68){
    salarioLiquido = salarioInss - ((salarioInss * 0.225) - 636.13);
}else if(salarioInss > 4664.68){
    salarioLiquido = salarioInss - ((salarioInss * 0.275) - 869.36);
}else if(salarioInss < 1903.98){
    salarioLiquido = salarioInss;
}

console.log("O seu salário Líquido equivale a: " + salarioLiquido);

