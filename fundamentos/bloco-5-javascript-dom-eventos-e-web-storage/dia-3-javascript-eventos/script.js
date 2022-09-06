function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();

  
//requisito 1
  let ulDays = document.getElementById("days");
  let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function adicionaLi (){
  
    

    for (let index = 0; index < decemberDaysList.length; index += 1){
      const numbers = decemberDaysList[index];
      const numbersli = document.createElement('li');
      numbersli.className = "days";
      if(decemberDaysList[index] === 24 || decemberDaysList[index] === 25 || decemberDaysList[index] === 31){
        numbersli.className = "days holidays"
      }else if (decemberDaysList[index] === 4 || decemberDaysList[index] === 11 || decemberDaysList[index] === 18 || decemberDaysList[index] === 25){
        numbersli.className = "days friday";
      }
      numbersli.innerHTML = numbers;

      ulDays.appendChild(numbersli);
    }

  }

  adicionaLi();

  //requisito 2
  let containerButton = document.getElementsByClassName("buttons-container");
  const newButton = document.createElement('button');

function buttonHoliday (param){
  newButton.setAttribute('id', 'btn-holiday');
  newButton.innerHTML = `<button>${param}</button>`;
  containerButton[0].appendChild(newButton);
  
}

buttonHoliday("Feriados");

//requisito 3
// newButton.addEventListener("click", mudaFundo);
// console.log(newButton);

// let feriados = 0;

// function mudaFundo(){
  
//   for(let i = 0; i < decemberDaysList.length; i += 1){
//     if (decemberDaysList[i].className === "days holidays"){
//       feriados += decemberDaysList[i]
//     }
// }

// }
// console.log(feriados)

//requisito 4
const buttonSextou = document.createElement('button');

function buttonFriday (param){
  buttonSextou.setAttribute('id', 'btn-friday');
  buttonSextou.innerHTML = `<button>${param}</button>`;
  containerButton[0].appendChild(buttonSextou);
  
}

buttonFriday("Sexta-Feira");

buttonSextou.addEventListener("click", mudaTexto);
let friday = 0;

function mudaTexto(event){
  if(event.target.decemberDaysList.className.contains("friday")){
    friday += event.target.decemberDaysList
  }

}

decemberDaysList.addEventListener("mouseover", mouse);

function mouse (){
  decemberDaysList.innerHTML = 
}




  
  // Escreva seu código abaixo.