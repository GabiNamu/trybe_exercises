document.getElementById("header-container").style.backgroundColor = "green";

let urgente = document.getElementsByClassName("emergency-tasks");

for(let i=0; i<urgente.length; i+=1){
    urgente[i].style.color = "white";
    urgente[i].style.backgroundColor = "pink";
}

document.querySelectorAll("h3")[0].style.backgroundColor = "purple";
document.querySelectorAll("h3")[1].style.backgroundColor = "purple";

let naoUrgente = document.getElementsByClassName("no-emergency-tasks");

for(let i=0; i<naoUrgente.length; i+=1){
    naoUrgente[i].style.color = "white";
    naoUrgente[i].style.backgroundColor = "yellow";
}

document.querySelectorAll("h3")[2].style.backgroundColor = "black";
document.querySelectorAll("h3")[3].style.backgroundColor = "black";

document.getElementById("footer-container").style.backgroundColor = "#006400";