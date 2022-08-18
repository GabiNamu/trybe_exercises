let xadrez = "bispo";

switch(xadrez.toLowerCase()){
    case "bispo":
        console.log("esquerda para a direita");
    break;
    case "rei" :
        console.log("vertical, horizontal e vertical")
    break;
    case "rainha":
        console.log("fileiras, colunas e diagonais ")
    break;
    default: 

    console.log("Essa peça não existe!");

}