let nota = 70;

switch(nota){
    case (nota >= 90):
        console.log("Sua nota é A");
    break;

    case (nota >= 80):
        console.log("Sua nota é B");
    break;

    case (nota >= 70):
        console.log("Sua nota é C");
    break;

    case nota >= 60:
        console.log("Sua nota é D");
    break;

    case nota >= 50:
        console.log("Sua nota é E");
    break;

    case nota < 50:
        console.log("Sua nota é F");
    break;

    case nota < 0 || nota > 100:
        console.log("Essas notas não são possiveis");
    

    
}