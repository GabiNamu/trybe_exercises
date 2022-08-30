document.getElementById("elementoOndeVoceEsta").innerHTML;
 document.getElementById("elementoOndeVoceEsta").parentElement.style.color = "purple";
document.getElementById("primeiroFilhoDoFilho").innerHTML = "kbdkjbfksjndjfkjbkjubfjdkbuskudjbkjfbsdkbkjdfsbfkjsdbfjdbfjdksbffdku"

console.log(document.getElementById("pai").firstElementChild);

console.log(document.getElementById("elementoOndeVoceEsta").previousElementSibling);

console.log(document.getElementById("elementoOndeVoceEsta").nextSibling);

console.log(document.getElementById("elementoOndeVoceEsta").nextElementSibling);

console.log(document.getElementById("pai").children[2]);

const pai = document.getElementById("pai");

const newSibling = document.createElement('section');
newSibling.className = 'newSib';
console.log(newSibling);
pai.appendChild(newSibling);

const mothersection = document.getElementById("elementoOndeVoceEsta");
const newsection = document.createElement('section');
newsection.className = 'newsec';
console.log(newsection);
mothersection.appendChild(newsection);

const container = document.getElementById("primeiroFilhoDoFilho");
const newFilhoDoFilho = document.createElement('section');
newFilhoDoFilho.className = 'newfifi';
console.log(newFilhoDoFilho);
container.appendChild(newFilhoDoFilho);

console.log(document.getElementById("newfifi").parentNode);

pai.remove(Element);




