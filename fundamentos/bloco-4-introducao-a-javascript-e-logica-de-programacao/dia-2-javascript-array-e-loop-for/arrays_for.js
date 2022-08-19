// praticando 
//exercício 1

let menu = ["Home", "Serviços", "Portfólio", "Link"];
let menuServices = menu[1];

console.log(menuServices);

//exercício 2

let menuu = ["Home", "Serviços", "Portfólio", "Links"];
let indexOfPortfolio = menu.indexOf("Portfólio");

console.log(indexOfPortfolio);

//exercício 3

let mmenu = ["Home", "Serviços", "Portfólio", "Links"];

mmenu.push("Contato");

console.log(mmenu);

// praticando for 
//exercício 1

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let i=0; i < groceryList.length; i += 1){
    console.log(groceryList[i]);
}

//praticando for/of
//exercício 1

let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for(let nomes of names){
    console.log(nomes);
}

//exemplo de while 

let counter = 0;

while(counter !== 5){
    counter += 1;
}

