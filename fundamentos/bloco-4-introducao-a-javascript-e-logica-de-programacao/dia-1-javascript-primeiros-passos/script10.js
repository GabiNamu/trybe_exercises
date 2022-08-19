const custoProduto = 100;
const valorVenda = 200;
const imposto = custoProduto * 0.2;
const custoTotal = custoProduto + imposto;
const lucro = (valorVenda - custoTotal) * 1000;
console.log("O lucro da empresa foi: " + lucro);

if(custoProduto < 0 || valorVenda < 0){
    console.log("Erro, esses valores não exeistem!")
}