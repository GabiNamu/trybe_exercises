//Crie um algoritmo que recebe
// a idade de Noel, Ellen e Nasc
// imprime quem e a pessoa mals
// nova no formato:
// "Pessoa" é a mais nova

let idadeNoel = 40;
let idadeEllen = 28;
let idadeNasc = 24;

if(idadeNoel < idadeEllen && idadeNoel < idadeNasc){
    console.log("Noel é o mais novo.");
}else if(idadeEllen < idadeNoel && idadeEllen < idadeNasc){
    console.log("Ellen é a mais nova.");
}else if(idadeNasc < idadeNoel && idadeNasc < idadeEllen){
    console.log("Nasc é o mais novo.");
}else{
    console.log("existem pessoas com a mesma idade.")
}