const createEmails = (nome) => {
    return `${nome.replace(' ', '_').toLowerCase()}@trybe.com`
};

const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

console.log(newEmployees(createEmails));

const ifEqual = (num1, num2) => {
    if(num1 === num2){
     return 'Parabéns você ganhou';
    }
    return 'Tente novamente';
 };

const sorteio = (numero, callback ) => {
   const numAleatorio = Math.floor(Math.random() * 5) + 1;
   console.log(numAleatorio)
   return callback(numero, numAleatorio);

}

console.log(sorteio(1, ifEqual));

const comparaRespostas = (respostaCorreta, respostaEstudante) => {
    let pontos = 0; 
    for (let i = 0; i < respostaCorreta.length; i += 1) {
      if(respostaEstudante[i] === 'N.A'){
        continue;
      } else if(respostaCorreta[i] === respostaEstudante[i]){
          pontos += 1;
      } else if(respostaCorreta[i] !== respostaEstudante[i]){
        pontos -= 0.5;
      }
      }
      return pontos;
    };

const corretorDeExames = (arrayCorretas, arrayEstudante, callback) => {
  return callback(arrayCorretas, arrayEstudante);
};

console.log(corretorDeExames(['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'], ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'], comparaRespostas));







